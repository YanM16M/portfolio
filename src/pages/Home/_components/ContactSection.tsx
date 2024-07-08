import { ContactCard } from "@/components/contact-card"
import { GithubIcon } from "lucide-react"
import { FaLinkedinIn } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

import { SiMalt } from "react-icons/si";

export const ContactSection = () => {
    return (
        <section id="contacts" className="flex flex-col gap-20">
            <h1 className="text-5xl font-thin text-center">Contact me</h1>
            <div className="w-full flex flex-col items-center justify-center gap-4">
                <ContactCard 
                    title="yanis.martinon2@gmail.com"
                    description="Mail"
                    icon={<SiGmail size={24} className="group-hover:text-red-500" />}
                    url="mailto:yanis.martinon2@gmail.com"
                />
                <ContactCard 
                    title="Yanis Martinon"
                    description="Linkedin"
                    icon={<FaLinkedinIn size={24} className="group-hover:text-blue-500" />}
                    url="https://www.linkedin.com/in/yanis-martinon-381651194/"
                />
                <ContactCard 
                    title="Yanis Martinon"
                    description="Malt"
                    icon={<SiMalt size={24} className="group-hover:text-red-500" />}
                    url="https://www.malt.fr/profile/yanismartinon"
                />
                <ContactCard 
                    title="Répertoires GitHub"
                    description="GitHub"
                    icon={<GithubIcon size={24} className="group-hover:text-green-500" />}
                    url="https://www.malt.fr/profile/yanismartinon"
                />
            </div>
            <h2 className="text-2xl text-center font-thin ">
                Looking forward to our cooperation! 
            </h2>
        </section>
    )
}