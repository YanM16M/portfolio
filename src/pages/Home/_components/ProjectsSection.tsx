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
