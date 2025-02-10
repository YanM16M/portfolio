import { Preview, PreviewProps } from "@/components/preview";

const projects: PreviewProps[] = [
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
        technologies: ["nextjs", "prisma", "supabase", "postgresql"],
        soon: true,
    },
    {
        title: "GabInvest",
        description: "GabInvest offers a solution to help you buy real estate.",
        url: "https://gab-funnel.vercel.app/?source=portfolio",
        src: ["gabinvest.png"],
        technologies: ["reactjs", "convex", "tailwind"],
    },
    {
        title: "Notion clone",
        description: "Notion Clone is a replica of the Notion web platform.",
        url: "https://lifen-swart.vercel.app/",
        githubUrl: "https://github.com/YanM16M/notion-clone",
        src: ["notion.png"],
        technologies: ["nextjs", "tailwind", "shadcnui"],
    },
    {
        title: "Yobool",
        description:
            "Yobool is an online platform that enables users to send their parcels via travelers offering their service.",
        src: ["yobool.png"],
        technologies: ["reactjs", "rails", "tailwind", "shadcnui"],
    },
    {
        title: "Finance App",
        description:
            "Finance App is a platform enabling users to manage their expenses and income.",
        url: "https://finance-app-lovat.vercel.app/",
        githubUrl: "https://github.com/YanM16M/finance-app",
        src: ["finance-app.png"],
        technologies: ["nextjs", "mysql", "tailwind", "shadcnui"],
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="flex flex-col items-center gap-y-20">
            <h1 className="font-thin text-5xl">Projects</h1>
            <div className="w-fit grid grid-cols-1 lg:grid-cols-2 gap-20">
                {projects.map((project, index) => (
                    <Preview key={index} {...project} />
                ))}
            </div>
        </section>
    );
};
