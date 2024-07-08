import cv from "@/assets/CV.pdf";

import { Download, Linkedin } from "lucide-react";

import { GridBackground } from "@/components/ui/GridBackground";
import { Button } from "@/components/ui/button";
import { FiGithub } from "react-icons/fi";

export const WelcomeSection = () => {

    return (
        <section id="welcome" className="h-full flex flex-col gap-y-3 items-center justify-center">
            <GridBackground className="flex flex-col gap-y-3 items-center justify-center">
                <h1 className="text-5xl text-white text-center font-anton text-stroke uppercase leading-tight tracking-wide
                dark:text-white">
                    Hello, I'm&nbsp;
                    <span className="text-primary text-stroke-none">
                        Yanis Martinon
                    </span>
                </h1>
                <span className="text-lg font-semibold">
                    I am a frontend and backend developer
                </span>
                <div className="space-x-2">
                    <Button className="font-semibold bg-blue-500 hover:bg-blue-500/90" asChild>
                        <a href="https://www.linkedin.com/in/yanis-martinon-381651194/" target="_blank">
                            LinkedIn
                            <Linkedin className="ml-2" />
                        </a>
                    </Button>
                    <Button asChild className="font-semibold">
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