/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
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
            xxs: '20rem', // 320px
            xs: '25rem', // 400px
            sm: '30rem', // 480px
            md: '35rem', // 560px
            lg: '48rem', // 768px
            xl: '64rem', // 1024px
            xxl: '80rem', // 1280px
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
        },

        fontSize: {
            xs: ['0.75rem', { lineHeight: '1.5' }], // 12px
            sm: ['0.875rem', { lineHeight: '1.5' }], // 14px
            base: ['1rem', { lineHeight: '1.5' }], // 16px
            md: ['1.125rem', { lineHeight: '1.5' }], // 18px
            lg: ['1.25rem', { lineHeight: '1.5' }], // 20px
            xl: ['1.25rem', { lineHeight: '1.4' }], // 20px
            '2xl': ['1.5rem', { lineHeight: '1.4' }], // 24px
            '3xl': ['1.75rem', { lineHeight: '1.4' }], // 28px
            '4xl': ['2rem', { lineHeight: '1.3' }], // 32px
            '5xl': ['2.25rem', { lineHeight: '1.2' }], // 36px
            '6xl': ['2.5rem', { lineHeight: '1.2' }], // 40px
            '7xl': ['2.75rem', { lineHeight: '1.2' }], // 40px
            '8xl': ['3rem', { lineHeight: '1.2' }], // 48px
            '9xl': ['3.25rem', { lineHeight: '1.2' }], // 52px
            '10xl': ['3.5rem', { lineHeight: '1.2' }], // 56px
        },
        extend: {
            spacing: {
                px: '1px', // 1px
                0: '0px', // 0px
                1: '0.25rem', // 4px
                2: '0.5rem', // 8px
                3: '0.75rem', // 12px
                4: '1rem', // 16px
                5: '1.25rem', // 20px
                6: '1.5rem', // 24px
                8: '2rem', // 32px
                10: '2.5rem', // 40px
                12: '3rem', // 48px
                14: '3.5rem', // 56px
                16: '4rem', // 64px
                18: '4.5rem', // 72px
                20: '5rem', // 80px
                24: '6rem', // 96px
                28: '7rem', // 112px
                30: '7.5rem', // 120px
                32: '8rem', // 128px
                36: '9rem', // 144px
                40: '10rem', // 160px
                44: '11rem', // 176px
                48: '12rem', // 192px
                52: '13rem', // 208px
                56: '14rem', // 224px
                60: '15rem', // 240px
                64: '16rem', // 256px
                72: '18rem', // 288px
                80: '20rem', // 320px
                96: '24rem', // 384px
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
                    DEFAULT: '#ffffff', // bg-background, text-background, border-background,
                    primary: '#ffffff', // bg-background-primary, text-background-primary, border-background-primary,
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
        },
    },
    plugins: [],
}
