
import React from "react";
import { Button } from "../ui/button";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    variant?: "secondary" | "destructive" | "outline" | "link" | "default" | "ghost";
    size?: "sm" | "base";
};

export default function ButtonComponent({
    children,
    onClick,
    className,
    disabled,
    type,
    variant,
    size
}: ButtonProps) {
    const baseStyle = "px-4 py-2 rounded-md focus:outline-none";
    const sizeStyle = size === "sm" ? "text-sm" : "text-base";
    // const variantStyle = variant === "primary" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800";
    const disabledStyle = disabled ? "cursor - not - allowed opacity - 50" : "";
    const classes = `${baseStyle} ${sizeStyle} ${disabledStyle} ${className}`;
    return (
        <Button
            onClick={onClick}
            className={classes}
            disabled={disabled}
            variant={variant}
            type={type}
        >
            {children}
        </Button>
    );
}