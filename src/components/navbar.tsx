import { Link } from "react-router-dom"
import { ModeToggle } from "./mode-toggle"

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-8">
            <Link to="/">
                <h1 className="font-medium text-3xl">
                    Portfolio
                </h1>
            </Link>
            <ModeToggle />
        </nav>
    )
}