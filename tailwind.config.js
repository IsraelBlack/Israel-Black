/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{tsx, ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			blue: '#4756df',
      black: '#0c0c0c',
      orange: '#ff7235'
		},
		extend: {
			fontFamily: { inter: ['inter', 'serif'] },
		},
	},
	plugins: [],
};
