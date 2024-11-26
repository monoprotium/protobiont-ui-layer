import type { Component } from 'vue'
export { default as PrtIcon } from './PrtIcon.vue';
export type IconSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl"

export interface IconProps {
    iconComponent: string
    size?: IconSize
    color?: string
    class?: string
}

declare module '#app' {
    interface NuxtApp {
        iconCache: Map<string, Component>
    }
}

