import { cva } from "class-variance-authority";

export const drawerVariants = cva(
    "fixed inset-0 z-50 flex overflow-hidden bg-black/50",
    {
        variants: {
            placement: {
                left: "items-stretch",
                right: "items-stretch justify-end",
                top: "items-start",
                bottom: "items-end",
            },
        },
        defaultVariants: {
            placement: "right",
        },
    }
);

export const contentVariants = cva(
    "bg-neutral-900 flex flex-col overflow-y-auto shadow-xl transition-transform duration-300 ease-in-out text-white",
    {
        variants: {
            placement: {
                left: "w-[400px] h-full transform -translate-x-full data-[state=open]:translate-x-0",
                right: "w-[400px] h-full transform translate-x-full data-[state=open]:translate-x-0",
                top: "h-[200px] w-full transform -translate-y-full data-[state=open]:translate-y-0",
                bottom: "h-[200px] w-full transform translate-y-full data-[state=open]:translate-y-0",
            },
        },
        defaultVariants: {
            placement: "right",
        },
    }
);