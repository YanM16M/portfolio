import { ModeToggle } from "./mode-toggle";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full flex items-center justify-between p-6 pb-4 mt-12">
            <div className="text-muted-foreground text-sm font-light">
                © {currentYear} Yanis Martinon. All Rights Reserved.
            </div>
            <div>
                <ModeToggle />
            </div>
        </div>
    );
};
