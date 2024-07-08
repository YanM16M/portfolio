import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ContactCardProps {
    title: string;
    url: string;
    icon: React.ReactNode;
    description?: string;
}

export const ContactCard = ({
    title,
    description,
    icon,
    url
}: ContactCardProps) => {
    return (
        <Link to={url} target="_blank" className="group w-full max-w-xl flex items-center justify-between p-4 border rounded-lg shadow-sm transition
        hover:-translate-y-2 hover:cursor-pointer">
            <div className="flex items-center gap-2">
                <div className="p-4 border rounded-full">
                   {icon}
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold">{title}</span>
                    <span className="text-xs text-muted-foreground">{description}</span>
                </div>
            </div>
            <ExternalLink className={`group-hover:opacity-75 transition`} />
        </Link>
    )
}