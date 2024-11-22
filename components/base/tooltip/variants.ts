import { cva } from "class-variance-authority";

export const tooltipVariants = cva(
    [
        "px-3",
        "py-2",
        "text-sm",
        "font-medium",
        "shadow-lg",
        "rounded-md",
        "select-none",
        "animate-in",
        "fade-in-0",
        "zoom-in-95",
    ].join(" "),
    {
        variants: {
            variant: {
                default: "bg-neutral-900 text-white",
                primary: "bg-blue-600 text-white",
                success: "bg-green-600 text-white",
                warning: "bg-amber-600 text-white",
                danger: "bg-red-600 text-white",
            },
            placement: {
                top: "bottom-full mb-2",
                bottom: "top-full mt-2",
                left: "right-full mr-2 translate-y-[-50%]",
                right: "left-full ml-2 translate-y-[-50%]",
            },
        },
        defaultVariants: {
            variant: "default",
            placement: "top",
        },
    }
);

export const arrowVariants = cva("absolute w-2 h-2 rotate-45", {
    variants: {
        placement: {
            top: "bottom-[-4px] left-[50%] translate-x-[-50%]",
            bottom: "top-[-4px] left-[50%] translate-x-[-50%]",
            left: "right-[-4px] top-[50%] translate-y-[-50%]",
            right: "left-[-4px] top-[50%] translate-y-[-50%]",
        },
    },
    defaultVariants: {
        placement: "top",
    },
});