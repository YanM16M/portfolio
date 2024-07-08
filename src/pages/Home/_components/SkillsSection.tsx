import { SkillCard } from "@/components/skill-card";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaPhp, FaReact } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { SiMysql, SiShadcnui } from "react-icons/si";
import { TbBrandMongodb, TbBrandNextjs } from "react-icons/tb";

const skills = [
    {
        key: 1,
        icon: <FaReact size={40} />,
        label: "React",
        for: "frontend"
    },
    {
        key: 2,
        icon: <TbBrandNextjs size={40} />,
        label: "Next",
        for: "frontend"
    },
    {
        key: 3,
        icon: <BiLogoTailwindCss size={40} />,
        label: "Tailwind",
        for: "frontend"
    },
    {
        key: 4,
        icon: <SiShadcnui size={40} />,
        label: "shadcn/ui",
        for: "frontend"
    },
    {
        key: 5,
        icon: <FaPhp size={40} />,
        label: "PHP",
        for: "backend"
    },
    {
        key: 6,
        icon: <LiaNode size={40} />,
        label: "Node",
        for: "backend"
    },
    {
        key: 7,
        icon: <SiMysql size={40} />,
        label: "MySQL",
        for: "backend"
    },
    {
        key: 8,
        icon: <TbBrandMongodb size={40} />,
        label: "MongoDB",
        for: "backend"
    },
]

export const SkillsSection = () => {
    return (
        <section id="skills" className="flex flex-col items-center gap-20">
            <h1 className="text-5xl font-thin text-center">Skills</h1>
            <div className="flex flex-col items-center gap-y-10">
                <h2 className="text-2xl">Front-End</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition">
                    {skills.filter(skill => skill.for === "frontend").map((skill) => (
                        <SkillCard {...skill} />
                    ))}
                </div>
                <h2 className="text-2xl">Back-End</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition">
                    {skills.filter(skill => skill.for === "backend").map((skill) => (
                        <SkillCard {...skill} />
                    ))}
                </div>
            </div>
        </section>
    )
}