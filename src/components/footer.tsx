import { ModeToggle } from "./mode-toggle"

export const Footer = () => {
    return (
        <div className="w-full flex items-center justify-between p-6 pb-4 mt-12">
            <div className="text-muted-foreground text-sm font-light">
                © 2024 Yanis Martinon. All Rights Reserved.
            </div>
            <div>
                <ModeToggle />
            </div>
        </div>
    )
}