import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    transformerCompileClass,
    transformerDirectives,
} from 'unocss';

// Utility function to generate custom UnoCSS rules
type Rule = [RegExp, (m: [string, string, 'px' | 'rem' | '%']) => { [k: string]: string }]

const generateRules = (map: Record<string, string>): Rule[] =>
    Object.entries(map).map(([prefix, prop]) => [
        new RegExp(`^${prefix}-\\[(\\d+)(px|rem|%)\\]$`),
        ([_, n, u]) => ({ [prop]: `${n}${u}` })
    ]);

// All allowed suffixes for color classes
type Suffix = number | string;
interface ClassMap {
    [key: string]: Suffix[];
}

const safelistClasses: ClassMap = {
    "bg-el": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "border-el": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "text-el": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "border": ["green-500", "blue-500"],
    "h": [6],
    "min-h": [6],
    "p": ["0.5"]
}

// Safelist with hardcoded classes
export const safelist: string[] = [
    "basis-1/3-gap-4",
];

// Add classes from safelistClasses to the safelist
const safelistClassesVariants = Object.entries(safelistClasses).flatMap(([p, s]) =>
    s.flatMap(x => [`${p}-${x}`, `hover:${p}-${x}`]));

safelist.push(...safelistClassesVariants);



export default defineConfig({

    transformers: [
        transformerDirectives(),    // Enables @apply, @screen, etc.
        transformerCompileClass(),  // Compiles dynamic class names in JS/TS
    ],
    safelist,

    theme: {
        breakpoints: {
            sm: '320px',
            md: '640px',
        },
        colors: {
            active: { 100: '#ffffff', 400: '#3b82f6' }, // Active state colors
            blk: {
                1: '#111827', // bg-blk-1
                2: '#1F2937',
                3: '#374151',
            },
            el: {
                1: '#334155', // bg-el-1
                2: '#1E293B',
                3: '#064E3B',
                4: '#7C3AED',
                5: '#DB2777',
                6: '#059669',
                7: '#0284C7',
                8: '#DC2626',
                9: '#D97706',
                10: '#0EA5E9',
            },
            accent: {
                1: '#6B7280', // text-accent-1
                2: '#FBBF24',
            },
            state: {

                success: '#4ADE80', //  text-state-success
                error: '#EF4444',
                warning: '#F59E0B',
                disabled: '#A1A1AA',
            },
            brand: {
                primary: 'hsla(var(--hue, 217), 78%, 51%)', // bg-brand-primary
            },
        },
    },

    //  Custom rules
    rules: [
        // Example custom rule
        ['px-100', { 'padding-left': '100px', 'padding-right': '100px' }],
        // Flex basis with calculated gap
        [/^basis-1\/3-gap-4$/, () => ({ 'flex-basis': 'calc(33.333% - (2/3 * 1rem))' }),],
    ],

    // Shortcuts
    shortcuts: [
        {
            'custom-shortcut': 'text-lg text-orange hover:text-teal',
            'custom-btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
        },
        [
            /^btn-(.*)$/,
            ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`,
        ],
    ],

    // Content pipeline
    content: {
        pipeline: {
            include: [
                '**/*.{vue,js,ts,jsx,tsx,html}',
            ],
        },
    },

    // Presets
    presets: [
        presetUno(),
        presetAttributify(),   // Enables attribute mode for utility classes
        presetIcons({
            scale: 1.2,          // Icon scale setting
            cdn: 'https://esm.sh/', // CDN source for icons
        }),
    ],
});
