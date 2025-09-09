import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const addFollows = mutation({
    args: { userId: v.optional(v.string()), clickOn: v.string() },
    handler: async (ctx, args) => {
        const { clickOn, userId } = args;

        if (!clickOn) return;

        // Début de la journée
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);
        const startTimestamp = startOfDay.getTime();

        // Début du lendemain (fin de la journée d'aujourd'hui)
        const endOfDay = new Date(startOfDay);
        endOfDay.setDate(endOfDay.getDate() + 1);
        const endTimestamp = endOfDay.getTime();

        const alreadyExist = await ctx.db
            .query("follows")
            .filter((q) =>
                q.and(
                    q.eq(q.field("userId"), userId),
                    q.eq(q.field("clickOn"), "/"),
                    q.gte(q.field("_creationTime"), startTimestamp),
                    q.lt(q.field("_creationTime"), endTimestamp)
                )
            )
            .first();

        if (alreadyExist) {
            return alreadyExist;
        }

        const newFollows = await ctx.db.insert("follows", {
            userId,
            clickOn,
        });

        return newFollows;
    },
});
