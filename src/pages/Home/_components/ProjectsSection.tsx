import { Preview } from "@/components/preview";
import { projects } from "@/lib/projects";

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
