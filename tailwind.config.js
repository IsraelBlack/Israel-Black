/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{tsx, ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			blue: '#4756df',
      black: '#0c0c0c',
      orange: '#ff7235',
      white: '#ffffff',
      gray: '#6b7280'
		},
		extend: {
			fontFamily: { inter: ['inter', 'serif'] },
      boxShadow: { 
        'cust': '0px 2px 15px 2px rgb(107, 114, 128)',
       }
		},
	},
	plugins: [],
};
