import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const addFollows = mutation({
    args: { clickOn: v.string() },
    handler: async (ctx, args) => {
        if (!args.clickOn) return;

        const newFollows = await ctx.db.insert("follows", {
            clickOn: args.clickOn,
        });

        return newFollows;
    },
});
