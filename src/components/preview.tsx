import { FaReact, FaPhp  } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiShadcnui, SiMysql, SiRubyonrails  } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { Badge } from "./ui/badge";

interface PreviewProps {
    src: string;
    title: string;
    description: string;
    technologies?: string[];
}

export const Preview = ({
    src,
    title,
    description,
    technologies
}: PreviewProps) => {
    return (
        <div className="max-w-lg rounded-lg shadow-md hover:shadow-lg hover:scale-105 cursor-pointer transition duration-300
        dark:bg-secondary">
            <img 
                src={src}
                className="w-full"
                alt="preview"
            />
            <div className="p-4 space-y-2">
                <h2 className="font-bold text-lg uppercase">{title}</h2>
                <p className="text-justify text-clamp-3">{description}</p>
                <div className="flex flex-wrap gap-4 pt-2">
                    {technologies?.includes("react") && (
                        <Badge variant="outline" className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2">
                            <FaReact size={24} color="cyan" />
                            ReactJS
                        </Badge>
                    )}
                    {technologies?.includes("tailwind") && (
                        <Badge variant="outline" className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2">
                            <SiTailwindcss  size={28} color="blue" />
                            TailwindCss
                        </Badge>
                    )}
                    {technologies?.includes("shadcnui") && (
                        <Badge variant="outline" className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2">
                            <SiShadcnui size={22} color="black" />
                            shadcn-ui
                        </Badge>
                    )}
                    {technologies?.includes("nextjs") && (
                        <Badge variant="outline" className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2">
                            <TbBrandNextjs size={28} color="green" />
                            NextJS
                        </Badge>
                    )}
                    {technologies?.includes("mysql") && (
                        <Badge variant="outline" className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2">
                            <SiMysql size={28} color="orange" />
                            MySQL
                        </Badge>
                    )}
                    {technologies?.includes("php") && (
                        <Badge variant="outline" className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2">
                            <FaPhp size={28} color="indigo" />
                            PHP
                        </Badge>
                    )}
                    {technologies?.includes("rails") && (
                        <Badge variant="outline" className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2">
                            <SiRubyonrails size={28} color="red" />
                            rails
                        </Badge>
                    )}
                </div>
            </div>
        </div>
    )
}