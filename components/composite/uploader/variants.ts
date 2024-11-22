import { cva } from "class-variance-authority";

export const uploaderVariants = cva(
    [
        "relative",
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "rounded-lg",
        "transition-all",
        "duration-200",
        "cursor-pointer",
    ],
    {
        variants: {
            variant: {
                default: "bg-neutral-800 hover:bg-neutral-700",
                outline: "border-2 border-neutral-700 hover:border-neutral-600",
                dashed: "border-2 border-dashed border-neutral-700 hover:border-neutral-600",
            },
            size: {
                sm: "p-4",
                base: "p-6",
                lg: "p-8",
            },
            disabled: {
                true: "opacity-50 cursor-not-allowed pointer-events-none",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "base",
            disabled: false,
        },
    },
);

export const previewVariants = cva(
    [
        "flex",
        "items-center",
        "gap-3",
        "p-3",
        "rounded-lg",
        "bg-neutral-800",
        "animate-in",
        "fade-in-0",
        "zoom-in-95",
    ],
    {
        variants: {
            hasPreview: {
                true: "",
                false: "",
            },
        },
        defaultVariants: {
            hasPreview: false,
        },
    },
);