/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				pblack: "#121212",
				pwhite: "#f5f5f5",
				pgreen: "#00cc66",
				pgray: "#9ba5b7",
			},
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
