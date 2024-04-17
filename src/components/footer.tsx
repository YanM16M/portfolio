import { ModeToggle } from "./mode-toggle"

export const Footer = () => {
    return (
        <div className="w-full flex items-center justify-between p-6 pb-4 mt-12">
            <div className="text-muted-foreground font-semibold">
                Yanis Martinon
            </div>
            <div>
                <ModeToggle />
            </div>
        </div>
    )
}