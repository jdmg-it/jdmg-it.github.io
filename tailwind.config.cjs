/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class', '[data-theme="dark"]'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'page-bg': 'var(--page-bg)',
				'primary-text': 'var(--primary-text)',
				'muted-text': 'var(--muted-text)',
				'input-bg': 'var(--input-bg)',
				'input-bg-hover': 'var(--input-bg-hover)',
				'switch-bg': 'var(--switch-bg)',
				'switch-circle-bg': 'var(--switch-circle-bg)',
				'icon-sun': 'var(--icon-sun)',
				'icon-moon': 'var(--icon-moon)',
			},
		},
	},
	plugins: [],
}
