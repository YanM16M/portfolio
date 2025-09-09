import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    follows: defineTable({
        userId: v.optional(v.string()),
        clickOn: v.string(),
    }),
});
