import cv from "@/assets/CV.pdf";

import { Download } from "lucide-react";

import { GridBackground } from "@/components/ui/GridBackground";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FiGithub } from "react-icons/fi";

export const WelcomeSection = () => {

    // const getNumberOfExperience = () => {
    //     const startDate = new Date("01/09/2020");
    //     const today = new Date();

    //     return (today.getFullYear() - startDate.getFullYear());
    // }

    return (
        <section className="h-full flex flex-col gap-y-3 items-center justify-center">
            <GridBackground className="flex flex-col gap-y-3 items-center justify-center">
                <h1 className="text-5xl text-white text-center font-anton text-stroke uppercase leading-tight tracking-wide
                dark:text-white">
                    Hello, I'm&nbsp;
                    <span className="text-primary text-stroke-none">
                        Yanis Martinon
                    </span>
                </h1>
                <span className="text-lg font-semibold">
                    I'm a frontend and backend developer
                </span>
                <div>
                    <Badge variant="outline" className="w-[175px] flex flex-col text-center rounded-lg border-black p-4">
                        <span className="text-6xl font-anton">
                            {3}
                        </span>
                        <span className="font-semibold text-md">ans d'expérience</span>
                    </Badge>
                </div>
                <div className="space-x-2">
                    <Button className="font-bold" asChild>
                        <a href="https://github.com/YanM16M" target="_blank">
                            Github
                            <FiGithub className="ml-2" />
                        </a>
                    </Button>
                    <Button variant="custom" asChild>
                        <a href={cv} target="_blank">
                            Download CV
                            <Download className="ml-2" />
                        </a>
                    </Button>
                </div>
            </GridBackground>
        </section>
    )
}