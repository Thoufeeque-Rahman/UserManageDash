
import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { X, Search } from "lucide-react";

interface SearchFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  className?: string;
  wrapperClassName?: string;
}

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  (
    {
      className,
      wrapperClassName,
      placeholder = "Search...",
      value: propValue,
      onChange,
      onSearch,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState(propValue || "");
    const controlledValue = propValue !== undefined ? propValue : value;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (propValue === undefined) {
        setValue(newValue);
      }
      onChange?.(newValue);
    };

    const handleClear = () => {
      if (propValue === undefined) {
        setValue("");
      }
      onChange?.("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onSearch) {
        e.preventDefault();
        onSearch(controlledValue.toString());
      }
    };

    return (
      <div
        className={cn(
          "relative flex items-center group animate-fade-in",
          wrapperClassName
        )}
      >
        {/* <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        /> */}
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          ref={ref}
          type="search"
          value={controlledValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            "h-10 w-full rounded-md border border-input/60 bg-background/70 py-2 pl-9 pr-8 text-sm",
            // "backdrop-blur-[2px] shadow-sm",
            "transition-all duration-200",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-1",
            "hover:border-primary/30 hover:bg-accent/30",
            className
          )}
          {...props}
        />
        {controlledValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={16} />
            <span className="sr-only">Clear search</span>
          </button>
        )}
      </div>
    );
  }
);
SearchField.displayName = "SearchField";
