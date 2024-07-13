import { Link } from "react-router-dom";

const routes = [
    {
        href: "#about",
        label: "About me",
    },
    {
        href: "#projects",
        label: "Projects",
    },
    {
        href: "#skills",
        label: "Skills",
    },
    {
        href: "#contacts",
        label: "Contact",
    },
]


export const Navbar = () => {
    const onClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <nav className="fixed top-0 w-full flex items-center justify-between max-md:justify-center px-6 py-8 z-[50]">
            <Link to="/" onClick={onClick} className="max-md:hidden font-medium text-3xl drop-shadow-md">
                Yanis Martinon
            </Link>
            <div className="flex items-center gap-12">
                {routes.map((route) => (
                    <a
                        href={route.href}
                        className="font-light text-xl max-sm:text-lg hover:text-emerald-500"
                    >
                        {route.label}
                    </a>
                ))}
            </div>
        </nav>
    )
}