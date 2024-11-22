import { cva } from "class-variance-authority";

export const radioWrapperVariants = cva(
    "flex items-center gap-2 cursor-pointer select-none",
    {
        variants: {
            disabled: {
                true: "opacity-50 cursor-not-allowed",
                false: "",
            },
        },
        defaultVariants: {
            disabled: false,
        },
    }
);

export const radioCircleVariants = cva(
    "relative inline-flex items-center justify-center border-2 transition-colors",
    {
        variants: {
            size: {
                sm: "h-4 w-4",
                base: "h-5 w-5",
                lg: "h-6 w-6",
            },
            shape: {
                square: "rounded-none",
                rounded: "rounded-md",
                circle: "rounded-full",
            },
        },
        defaultVariants: {
            size: "base",
            shape: "circle",
        },
    }
);

export const radioIndicatorVariants = cva(
    "absolute inset-0 m-auto transition-transform scale-0",
    {
        variants: {
            shape: {
                square: "rounded-none",
                rounded: "rounded-sm",
                circle: "rounded-full",
            },
            checked: {
                true: "scale-100",
                false: "scale-0",
            },
        },
        defaultVariants: {
            shape: "circle",
            checked: false,
        },
    }
);