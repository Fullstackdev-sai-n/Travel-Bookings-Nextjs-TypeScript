/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			textColor: {
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				grayPrimary: "#D3B0FF",
				graySecondary: "#808080",
				grayLight: "var(--text-gray-light)",
				red: "#FF0000",
				prime: "rgba(163, 163, 163, 0.4)",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			backgroundColor: {
				main: "#F8F9FD",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				indicator1: "#AFFFAD",
				indicator2: "#ADBFFF",
				grayPrimary: "#D3B0FF",
				lightBlue: "#EBE8FF",
				prime: "rgba(163, 163, 163, 0.4)",
			},
			borderColor: {
				primary: "rgba(163, 163, 163, 0.4)",
				secondary: "var(--secondary)",
				prime: "var(--primary)",
			},
			borderWidth: {
				primary: "1px",
			},
			height: {
				prime: "1px",
			},
			boxShadow: {
				primary:
					"0px 196px 78px rgba(21, 31, 72, 0.01), 0px 110px 66px rgba(21, 31, 72, 0.05), 0px 49px 49px rgba(21, 31, 72, 0.09), 0px 12px 27px rgba(21, 31, 72, 0.1), 0px 0px 0px rgba(21, 31, 72, 0.1)",
				secondary:
					"14px 216px 86px rgba(21, 31, 72, 0.01), 8px 121px 73px rgba(21, 31, 72, 0.05), 3px 54px 54px rgba(21, 31, 72, 0.09), 1px 13px 30px rgba(21, 31, 72, 0.1), 0px 0px 0px rgba(21, 31, 72, 0.1)",
				shoppingCard:
					"39px 216px 88px rgba(0, 0, 0, 0.01), 22px 122px 74px rgba(0, 0, 0, 0.05), 10px 54px 55px rgba(0, 0, 0, 0.09), 2px 14px 30px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
				form: "var(--form-shadow)",
			},
			gridTemplateColumns: {
				booking: "1fr 0.5fr",
				bookingSm: "1fr",
				shippingTop: "0.2fr 0.6fr",
				shippingTopSm: "1fr",
				sCSection: "0.2fr 0.6fr",
				sCSectionMd: "0.3fr 1fr",
				starBtn: "0.1fr 1fr",
				progress: "20px 1fr 20px 1fr 20px 1fr 20px",
				shippingC: "1fr 0.2fr",
				bstravel: "100px 1fr 100px",
				bsLoad: "0.4fr 1fr",
			},
		},
	},
	plugins: [],
};
