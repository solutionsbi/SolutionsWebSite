import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        // Your existing theme configuration
        fontFamily: {
            ibm: ['IBM Plex Sans', 'sans-serif'],
            inter: ['Inter', 'sans-serif'],
        },
        screens: {
            xs: '320px',
            sm: '480px',
            md: '768px',
            lg: '992px',
            xl: '1280px',
            '2xl': '1440px',
            '3xl': '1920px',
        },
        container: {
            center: true,
            screens: {
                sm: '100%',
                md: '100%',
                lg: '992px',
                xl: '1280px',
                '2xl': '1440px',
            },
        },
        maxWidth: {
            xxs: '20rem',
            xs: '25rem',
            sm: '30rem',
            md: '35rem',
            lg: '48rem',
            xl: '64rem',
            xxl: '80rem',
            full: '100%',
        },
        boxShadow: {
            xxsmall: '0px 1px 2px rgba(0, 0, 0, 0.05)',
            xsmall: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
            small: '0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06)',
            medium: '0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03)',
            large: '0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03)',
            xlarge: '0px 24px 48px -12px rgba(0, 0, 0, 0.18)',
            xxlarge: '0px 32px 64px -12px rgba(0, 0, 0, 0.14)',
            custom1:
                '0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 0px 50px 0px rgba(0, 0, 0, 0.25) inset',
        },
        fontSize: {
            xs: ['0.75rem', { lineHeight: '1.5' }],
            sm: ['0.875rem', { lineHeight: '1.5' }],
            base: ['1rem', { lineHeight: '1.5' }],
            md: ['1.125rem', { lineHeight: '1.5' }],
            lg: ['1.25rem', { lineHeight: '1.5' }],
            xl: ['1.25rem', { lineHeight: '1.4' }],
            '2xl': ['1.5rem', { lineHeight: '1.4' }],
            '3xl': ['1.75rem', { lineHeight: '1.4' }],
            '4xl': ['2rem', { lineHeight: '1.3' }],
            '5xl': ['2.25rem', { lineHeight: '1.2' }],
            '6xl': ['2.5rem', { lineHeight: '1.2' }],
            '7xl': ['2.75rem', { lineHeight: '1.2' }],
            '8xl': ['3rem', { lineHeight: '1.2' }],
            '9xl': ['3.25rem', { lineHeight: '1.2' }],
            '10xl': ['3.5rem', { lineHeight: '1.2' }],
        },
        extend: {
            spacing: {
                0: '0px',
                1: '0.25rem',
                2: '0.5rem',
                3: '0.75rem',
                4: '1rem',
                5: '1.25rem',
                6: '1.5rem',
                8: '2rem',
                10: '2.5rem',
                12: '3rem',
                14: '3.5rem',
                16: '4rem',
                18: '4.5rem',
                20: '5rem',
                24: '6rem',
                28: '7rem',
                30: '7.5rem',
                32: '8rem',
                36: '9rem',
                40: '10rem',
                44: '11rem',
                48: '12rem',
                52: '13rem',
                56: '14rem',
                60: '15rem',
                64: '16rem',
                72: '18rem',
                80: '20rem',
                96: '24rem',
                px: '1px',
            },
            colors: {
                brand: {
                    black: '#000000',
                    white: '#ffffff',
                    blueBrand: '#2960F7',
                },
                neutral: {
                    DEFAULT: '#666666',
                    black: '#000000',
                    white: '#ffffff',
                    lightest: '#eeeeee',
                    lighter: '#cccccc',
                    light: '#aaaaaa',
                    dark: '#444444',
                    darker: '#222222',
                    darkest: '#111111',
                },
                system: {
                    'success-green': '#027a48',
                    'success-green-light': '#ecfdf3',
                    'error-red': '#b42318',
                    'error-red-light': '#fef3f2',
                },
                background: {
                    DEFAULT: '#ffffff',
                    primary: '#ffffff',
                    secondary: '#eeeeee',
                    tertiary: '#666666',
                    alternative: '#000000',
                    success: '#ecfdf3',
                    error: '#fef3f2',
                },
                border: {
                    DEFAULT: '#000000',
                    primary: '#000000',
                    secondary: '#aaaaaa',
                    tertiary: '#444444',
                    alternative: '#ffffff',
                    success: '#027a48',
                    error: '#b42318',
                },
                text: {
                    DEFAULT: '#000000',
                    primary: '#000000',
                    secondary: '#aaaaaa',
                    alternative: '#ffffff',
                    success: '#027a48',
                    error: '#b42318',
                },
                link: {
                    DEFAULT: '#000000',
                    primary: '#000000',
                    secondary: '#666666',
                    alternative: '#ffffff',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0',
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                    to: {
                        height: '0',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [tailwindcssAnimate],
}
