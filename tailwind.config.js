/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{tsx, ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			blue: '#0b0085',
			black: '#0c0c0c',
			orange: '#ff7235',
			white: '#f2f2f2',
			gray: ' 	#E2E3DF  ',
			greenDark: '#008575 ',
			red: '#850010',
		},
		extend: {
			fontFamily: { inter: ['inter', 'serif'] },
			boxShadow: {
				cust: '0px 2px 15px 2px rgb(107, 114, 128)',
			},
		},
	},
	plugins: [],
};
