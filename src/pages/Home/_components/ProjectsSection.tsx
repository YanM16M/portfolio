import { Preview } from "@/components/preview";


const projects = [
    {
        id: 1,
        title: "Fédération Française de Tennis de Table",
        description: "Site officiel pour les championnats professionnels de tennis de table en France",
        src: "fftt.png",
        technologies: ["react", "php", "mysql"],
    },
    {
        id: 2,
        title: "Yobool",
        description: "Yobool est une plateforme en ligne qui permet aux utilisateurs d'envoyer leur colis par l'intermédiaire de voyageurs proposant leur service.",
        src: "yobool.png",
        technologies: ["reactjs", "rails", "tailwind", "shadcnui", "mysql"],
    },
    {
        id: 3,
        title: "Learning School",
        description: "Learning School est une plateforme permettant aux utilisateurs de créer et suivre des cours en ligne.",
        src: "learning-school.png",
        technologies: ["nextjs", "mysql", "tailwind", "shadcnui"],
    },
    {
        id: 4,
        title: "Notion clone",
        description: "Notion Clone est une réplique de la plateforme web Notion.",
        src: "notion.png",
        technologies: ["nextjs", "tailwind", "shadcnui"],
    },
]

export const ProjectsSection = () => {
    return (
        <section className="flex flex-col items-center gap-y-20">
            <h1 className="font-thin text-5xl">Projets</h1>
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
