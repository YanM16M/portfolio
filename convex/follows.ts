import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const addFollows = mutation({
    args: { userId: v.optional(v.string()), clickOn: v.string() },
    handler: async (ctx, args) => {
        const { clickOn, userId } = args;

        if (!clickOn) return;

        const newFollows = await ctx.db.insert("follows", {
            userId,
            clickOn,
        });

        return newFollows;
    },
});
