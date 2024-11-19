import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    transformerCompileClass,
    transformerDirectives,
} from 'unocss';

export default defineConfig({
    transformers: [
        transformerDirectives(),    // Enables @apply, @screen, etc.
        transformerCompileClass(),  // Compiles dynamic class names in JS/TS
    ],

    // Presets for UnoCSS
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            cdn: 'https://esm.sh/',
        }),
    ],
});
