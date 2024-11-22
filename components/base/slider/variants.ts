import { cva } from "class-variance-authority";

export const sliderVariants = cva(
    "relative",
    {
        variants: {
            orientation: {
                horizontal: "w-full h-10",
                vertical: "h-[200px] w-10 flex items-center justify-center",
            },
            disabled: {
                true: "opacity-50 cursor-not-allowed",
                false: "cursor-pointer",
            },
        },
        defaultVariants: {
            orientation: "horizontal",
            disabled: false,
        },
    }
);

export const handleVariants = cva(
    "absolute w-4 h-4 cursor-pointer transition-colors duration-150",
    {
        variants: {
            edges: {
                square: "rounded-none",
                rounded: "rounded-md",
                circle: "rounded-full",
            },
            orientation: {
                horizontal: "-translate-x-1/2 top-1/2 -translate-y-1/2",
                vertical: "left-1/2 -translate-x-1/2",
            },
        },
        defaultVariants: {
            edges: "circle",
            orientation: "horizontal",
        },
    }
);

export const trackVariants = cva(
    "absolute rounded-full",
    {
        variants: {
            orientation: {
                horizontal: "h-1 w-full top-1/2 -translate-y-1/2",
                vertical: "w-1 h-full",
            },
        },
        defaultVariants: {
            orientation: "horizontal",
        },
    }
);