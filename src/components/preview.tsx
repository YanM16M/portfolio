import { useMutation } from "convex/react";
import { useEffect, useState } from "react";

import { api } from "../../convex/_generated/api";

import { technologiesType } from "@/lib/types";

import { motion } from "framer-motion";

import { FaReact, FaPhp } from "react-icons/fa";
import {
    SiPostgresql,
    SiPrisma,
    SiSupabase,
    SiTailwindcss,
} from "react-icons/si";
import { SiShadcnui, SiMysql, SiRubyonrails } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { getUserId } from "@/lib/utils";

export interface PreviewProps {
    src: string[];
    title: string;
    description: string;
    beforeSrc?: string[];
    technologies?: technologiesType[];
    url?: string;
    githubUrl?: string;
    soon?: boolean;
}

export const Preview = ({
    src,
    title,
    description,
    technologies,
    url,
    githubUrl,
    soon,
}: PreviewProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const addFollows = useMutation(api.follows.addFollows);

    useEffect(() => {
        if (src.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex(
                    (prevIndex) => (prevIndex + 1) % src.length
                );
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [src]);

    const handleSeeLive = () => {
        addFollows({
            userId: getUserId(),
            clickOn: title,
        });
    };

    return (
        <div
            className="max-w-lg h-[500px] flex flex-col pb-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300
        dark:bg-secondary"
        >
            <motion.img
                key={currentImageIndex}
                src={src[currentImageIndex]}
                className="w-full h-[250px] object-cover"
                alt="preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
            />
            <div className="flex flex-col flex-1 items-stretch gap-y-2 p-4">
                <h2 className="font-bold text-lg uppercase">{title}</h2>
                <p className="text-justify text-clamp-3">{description}</p>
                <div className="flex flex-wrap gap-4 py-4">
                    {technologies?.includes("reactjs") && (
                        <Badge
                            variant="outline"
                            className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2"
                        >
                            <FaReact size={18} color="cyan" />
                            ReactJS
                        </Badge>
                    )}
                    {technologies?.includes("tailwind") && (
                        <Badge
                            variant="outline"
                            className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2"
                        >
                            <SiTailwindcss size={18} color="blue" />
                            TailwindCss
                        </Badge>
                    )}
                    {technologies?.includes("shadcnui") && (
                        <Badge
                            variant="outline"
                            className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2"
                        >
                            <SiShadcnui size={18} color="black" />
                            shadcn-ui
                        </Badge>
                    )}
                    {technologies?.includes("nextjs") && (
                        <Badge
                            variant="outline"
                            className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2"
                        >
                            <TbBrandNextjs size={18} color="green" />
                            NextJS
                        </Badge>
                    )}
                    {technologies?.includes("prisma") && (
                        <Badge
                            variant="outline"
                            className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2"
                        >
                            <SiPrisma size={18} color="blue" />
                            Prisma
                        </Badge>
                    )}
                    {technologies?.includes("supabase") && (
                        <Badge
                            variant="outline"
                            className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2"
                        >
                            <SiSupabase size={18} color="green" />
                            Supabase
                        </Badge>
                    )}
                    {technologies?.includes("postgresql") && (
                        <Badge
                            variant="outline"
                            className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2"
                        >
                            <SiPostgresql size={18} color="orange" />
                            PostgreSQL
                        </Badge>
                    )}
                    {technologies?.includes("mysql") && (
                        <Badge
                            variant="outline"
                            className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2"
                        >
                            <SiMysql size={18} color="orange" />
                            MySQL
                        </Badge>
                    )}
                    {technologies?.includes("php") && (
                        <Badge
                            variant="outline"
                            className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2"
                        >
                            <FaPhp size={18} color="indigo" />
                            PHP
                        </Badge>
                    )}
                    {technologies?.includes("rails") && (
                        <Badge
                            variant="outline"
                            className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2"
                        >
                            <SiRubyonrails size={18} color="red" />
                            rails
                        </Badge>
                    )}
                    {technologies?.includes("convex") && (
                        <Badge
                            variant="outline"
                            className="flex items-center text-primary text-xs font-semibold uppercase gap-x-2"
                        >
                            <img
                                src="./convex.svg"
                                alt="convexIcon"
                                className="w-16"
                            />
                        </Badge>
                    )}
                </div>
            </div>
            <div className="flex gap-2 px-4">
                {url ? (
                    <Button onClick={handleSeeLive} asChild>
                        <a href={url} target="_blank">
                            See live
                        </a>
                    </Button>
                ) : (
                    <Button disabled={true}>
                        {soon ? <>Soon...</> : <>No live</>}
                    </Button>
                )}
                {githubUrl && (
                    <Button variant="outline" asChild>
                        <a href={githubUrl} target="_blank">
                            Source Code
                        </a>
                    </Button>
                )}
            </div>
        </div>
    );
};
