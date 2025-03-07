
import { ReactNode } from "react";
import { cn } from "@/lib/utils";


interface DataCardProps {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
    hoverable?: boolean;
    glass?: boolean;
}

export function DataCard({
    className,
    children,
    onClick,
    hoverable = false,
    glass = false,
}: DataCardProps) {
    return (
        <div
            className={cn(
                "rounded-lg border border-border/50 bg-card p-6 shadow-sm animate-fade-in",
                "transition-all duration-300",
                hoverable && "hover:shadow-md hover:border-border/80 hover:-translate-y-0.5 cursor-pointer",
                glass && "bg-white/90 dark:bg-black/60 backdrop-blur-md border-white/20 dark:border-white/10",
                className
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
