module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ["Gantari", "sans-serif"],
        },
        colors: {
            black: "#303030",
        },
        spacing: {
            1: ".8rem",
            2: "1.6rem",
            3: "2.4rem",
            4: "3.2rem",
            5: "4rem",
            6: "4.8rem",
            7: "5.6rem",
            8: "6.4rem",
            9: "7.2rem",
        },
        fontSize: {
            sm: "1.6rem",
            md: "2.4rem",
            lg: "3.2rem",
            xl: "4rem",
            title: [
                "8rem",
                {
                    letterSpacing: "0.1rem",
                },
            ],
        },
        fontWeight: {
            thin: 100,
            light: 300,
            normal: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
        },
    },
    plugins: [],
};
