import { Preview } from "@/components/preview";


const projects = [
    {
        id: 1,
        title: "Fédération Française de Tennis de Table",
        description: "Official website for professional table tennis championships in France",
        url: "https://www.fftt.com/pro",
        src: "fftt.png",
        technologies: ["react", "php", "mysql"],
    },
    {
        id: 2,
        title: "Yobool",
        description: "Yobool is an online platform that enables users to send their parcels via travelers offering their service.",
        src: "yobool.png",
        technologies: ["reactjs", "rails", "tailwind", "shadcnui", "mysql"],
    },
    {
        id: 3,
        title: "Learning School",
        description: "Learning School is a platform enabling users to create and follow online courses.",
        url: "https://learning-school-orcin.vercel.app/",
        githubUrl: "https://github.com/YanM16M/learning-school",
        src: "learning-school.png",
        technologies: ["nextjs", "mysql", "tailwind", "shadcnui"],
    },
    {
        id: 4,
        title: "Notion clone",
        description: "Notion Clone is a replica of the Notion web platform.",
        url: "https://lifen-swart.vercel.app/",
        githubUrl: "https://github.com/YanM16M/notion-clone",
        src: "notion.png",
        technologies: ["nextjs", "tailwind", "shadcnui"],
    },
]

export const ProjectsSection = () => {
    return (
        <section className="flex flex-col items-center gap-y-20">
            <h1 className="font-thin text-5xl">Projects</h1>
            <div className="w-fit grid grid-cols-1 lg:grid-cols-2 gap-20">
              {projects.map((project) => (
                <Preview 
                    key={project.id}
                    {...project}
                />
              ))}
            </div>
        </section>
    );
};
