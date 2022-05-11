module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'ingobook-coral': '#FF7070',
				'ingobook-brown': {
					100: '#7D6767',
					200: '#523C3C',
					300: '#3C2727'
				},
				'ingobook-pink': {
					100: '#FFFCFC',
					200: '#FFF9F9',
					300: '#FFF4F4',
					400: '#FFE2E2'
				}
			}
		}
	},
	darkMode: 'class',
	plugins: []
};
