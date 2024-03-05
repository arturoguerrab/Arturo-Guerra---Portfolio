/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: { lnd: { raw: "(max-height: 666px)  " } },
			gridTemplateRows: {
				a1: "repeat(1, minmax(0, 208px))",
        a2: "repeat(2, minmax(0, 208px))",
        a3: "repeat(3, minmax(0, 208px))",
        a4: "repeat(4, minmax(0, 208px))",
        a5: "repeat(5, minmax(0, 208px))",
        a6: "repeat(6, minmax(0, 208px))",
        a7: "repeat(7, minmax(0, 208px))",
        a8: "repeat(8, minmax(0, 208px))",
			},
		},
	},
	plugins: [],
};
