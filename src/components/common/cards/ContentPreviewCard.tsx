
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ContentPreviewCardProps {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  footer?: ReactNode;
  className?: string;
  glass?: boolean;
  onClick?: () => void;
}

export function ContentPreviewCard({
  title,
  description,
  image,
  imageAlt = "Content preview",
  footer,
  className,
  glass = false,
  onClick,
}: ContentPreviewCardProps) {
  return (
    <div 
      className={cn(
        "rounded-lg border border-border/50 bg-card overflow-hidden transition-all animate-fade-in",
        "shadow-sm hover:shadow-md",
        glass && "bg-white/90 dark:bg-black/60 backdrop-blur-md border-white/20 dark:border-white/10",
        onClick && "cursor-pointer hover:-translate-y-0.5",
        className
      )}
      onClick={onClick}
    >
      {image && (
        <AspectRatio ratio={16 / 9} className="bg-muted/60">
          <img 
            src={image} 
            alt={imageAlt} 
            className="object-cover w-full h-full rounded-t-lg animate-fade-in transition-transform duration-500 hover:scale-105"
          />
        </AspectRatio>
      )}
      <div className="p-5 space-y-3">
        <h3 className="font-medium text-lg leading-tight line-clamp-2 text-foreground">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
        )}
      </div>
      {footer && (
        <div className="px-5 py-3 border-t border-border/30">{footer}</div>
      )}
    </div>
  );
}
