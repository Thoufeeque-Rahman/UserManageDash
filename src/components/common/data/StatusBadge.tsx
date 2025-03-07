
import { cn } from "@/lib/utils";

type StatusType = "published" | "draft" | "pending" | "archived" | "rejected" | "success" | "warning" | "error" | "info";

interface StatusBadgeProps {
    status: StatusType | string;
    label?: string;
    className?: string;
    size?: "sm" | "md" | "lg";
}

export function StatusBadge({
    status,
    label,
    className,
    size = "md",
}: StatusBadgeProps) {
    const getStatusStyles = (status: string) => {
        switch (status.toLowerCase()) {
            case "published":
            case "success":
                return "bg-emerald-100/80 text-emerald-800 border-emerald-200/50 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/50";
            case "draft":
                return "bg-slate-100/80 text-slate-800 border-slate-200/50 dark:bg-slate-950/40 dark:text-slate-400 dark:border-slate-900/50";
            case "pending":
            case "warning":
                return "bg-amber-100/80 text-amber-800 border-amber-200/50 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900/50";
            case "archived":
                return "bg-indigo-100/80 text-indigo-800 border-indigo-200/50 dark:bg-indigo-950/40 dark:text-indigo-400 dark:border-indigo-900/50";
            case "rejected":
            case "error":
                return "bg-rose-100/80 text-rose-800 border-rose-200/50 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-900/50";
            case "info":
                return "bg-sky-100/80 text-sky-800 border-sky-200/50 dark:bg-sky-950/40 dark:text-sky-400 dark:border-sky-900/50";
            default:
                return "bg-slate-100/80 text-slate-800 border-slate-200/50 dark:bg-slate-950/40 dark:text-slate-400 dark:border-slate-900/50";
        }
    };

    const sizeClasses = {
        sm: "text-xs px-2 py-0.5",
        md: "text-xs px-2.5 py-0.5",
        lg: "text-sm px-3 py-1",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border font-medium animate-fade-in backdrop-blur-[1px]",
                getStatusStyles(status),
                sizeClasses[size],
                className
            )}
        >
            {/* <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full" /> */}
            {label || status}
        </span>
    );
}
