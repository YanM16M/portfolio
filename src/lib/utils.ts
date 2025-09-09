import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { v4 as uuidv4 } from "uuid";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getUserId = () => {
    if (typeof window !== "undefined") {
        let userId = localStorage.getItem("userId");
        if (!userId) {
            userId = uuidv4();
            localStorage.setItem("userId", userId || "");
        }
        return userId;
    }
    return "";
};
