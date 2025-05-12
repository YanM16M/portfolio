import { PreviewProps } from "@/components/preview";

export const projects: PreviewProps[] = [
    {
        title: "Site d'auteur : Yan J. Martin",
        description:
            "Website to promote the novel of the author Yan J. Martin.",
        src: ["lvda.png"],
        url: "https://www.lavoiedesarcanes.com/",
        technologies: ["nextjs", "tailwind"],
    },
    {
        title: "Fédération Française de Tennis de Table",
        description:
            "Official website for professional table tennis championships in France",
        url: "https://www.fftt.com/pro",
        src: ["fftt.png"],
        technologies: ["reactjs", "php", "mysql"],
    },
    {
        title: "Orientrek",
        description: "Orientrek: Trekking holidays in Japan and France",
        src: ["orientrek1.png", "orientrek2.png"],
        beforeSrc: ["orientrek3.png"],
        url: "https://www.orientrek.com/",
        technologies: [
            "nextjs",
            "prisma",
            "supabase",
            "postgresql",
            "tailwind",
        ],
        soon: true,
    },
    {
        title: "Yobool",
        description:
            "Yobool is an online platform that enables users to send their parcels via travelers offering their service.",
        url: "https://www.yobool.com/fr",
        src: ["yobool.png"],
        technologies: ["nextjs", "rails", "tailwind", "shadcnui"],
    },
    {
        title: "GabInvest",
        description: "GabInvest offers a solution to help you buy real estate.",
        url: "https://gab-funnel.vercel.app/?source=portfolio",
        src: ["gabinvest.png"],
        technologies: ["reactjs", "convex", "tailwind"],
    },
];
