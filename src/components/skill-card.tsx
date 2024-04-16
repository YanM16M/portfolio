interface SkillCardProps {
    icon: React.ReactNode;
    label: string;
}

export const SkillCard = ({
    icon,
    label,
}: SkillCardProps) => {
    return (
        <div className="w-[175px] h-[150px] flex flex-col items-center justify-center gap-4
        border border-primary rounded-lg
        dark:bg-secondary dark:border-none">
            {icon}
            <span>
                {label}
            </span>
        </div>
    )
}