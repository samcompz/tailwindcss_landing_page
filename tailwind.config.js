module.exports = {
    content: [
        "./index.html", // Adjust to your HTML file paths
        "./src/**/*.{js,ts,jsx,tsx,html}",

    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                brightRed: 'hsl(12, 88%, 59%)',
                brightRedLight: 'hsl(12, 88%, 69%)',
                brightRedSupLight: 'hsl(12, 88%, 95%)',
                darkBlue: 'hsl(228, 39%, 23%)',
                darkGrayishBlue: 'hsl(227, 12%, 61%)',
                veryDarkBlue: 'hsl(233, 12%, 13%)',
                verypaleRed: 'hsl(13, 100%, 96%)',
                veryLightGray: 'hsl(0, 0%, 98%)',
            },
        },
    },
    plugins: [],
};