import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { FiGithub } from "react-icons/fi"
import { LiaLinkedinIn } from "react-icons/lia"
import { SiGmail } from "react-icons/si"
import { cn } from "@/lib/utils"

import { useScrollTop } from "@/hooks/use-control-top";

export const Navbar = () => {
    const scrolled = useScrollTop();

    const onClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <nav className="fixed top-0 w-full flex items-center justify-between max-sm:justify-center px-6 py-8 z-[50]">
            <Link to="/" onClick={onClick} className="max-sm:hidden font-medium text-3xl drop-shadow-md">
                Portfolio
            </Link>
            <div className="flex items-center gap-2 ">
                <Button variant="outline" className={cn(
                    "hover:text-emerald-500 hover:cursor-pointer transition",
                    scrolled && "shadow-md"
                )} asChild>
                    <a href="https://github.com/YanM16M" target="_blank">
                        <FiGithub size={18} />
                    </a>
                </Button>
                <Button variant="outline" className={cn(
                    "hover:text-emerald-500 hover:cursor-pointer transition",
                    scrolled && "shadow-md"
                )} asChild>
                    <a href="https://www.linkedin.com/in/yanis-martinon-381651194/" target="_blank">
                        <LiaLinkedinIn size={18} />
                    </a>
                </Button>
                <Button variant="outline" className={cn(
                    "hover:text-emerald-500 hover:cursor-pointer transition",
                    scrolled && "shadow-md"
                )} asChild>
                    <a href="mailto:yanis.martinon2@gmail.com" target="_blank">
                        <SiGmail size={18} />
                    </a>
                </Button>
            </div>
        </nav>
    )
}