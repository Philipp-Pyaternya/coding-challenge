import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'pale-blue': 'hsl(221, 100%, 96%)',
                'light-lavender': 'hsl(241, 100%, 89%)',
                'dark-gray-blue': 'hsl(224, 30%, 27%)',
            },
            backgroundImage: {
                'circle-gradient':
                    'linear-gradient(hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0))',
                'main-gradient':
                    'linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%))',
                'dark-gray-blue': 'hsl(224, 30%, 27%)',

                'failed-gradient':
                    'linear-gradient(hsl(0, 100%, 67%), hsl(0, 81%, 40%))',
                'failed-circle-gradient':
                    'linear-gradient(hsla(0, 72%, 46%, 1), hsla(0, 72%, 46%, 0))',
            },
        },
    },
    plugins: [],
};
export default config;
