import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{html,ts,md,analog,ag}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        main: {
          primary: '#26ade3',

          secondary: '#1C2654',

          accent: '#1C2654',

          neutral: '#26ade3',

          'base-100': '#f4f6f7',

          info: '#17a2b8',

          success: '#198754',

          warning: '#ffc107',

          error: '#dc3545',
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar'),
    require('daisyui'),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-animate'),
    'prettier-plugin-tailwindcss',
  ],
} satisfies Config;
