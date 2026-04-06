// Navigation Bar
// ------------
// Description: The navigation bar data for the website.

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	navItems: [
		{ name: 'Início', link: '/' },
		{ name: 'Funcionalidades', link: '/features' },
		{ name: 'Preços', link: '/pricing' },
		{
			name: 'Recursos',
			link: '#',
			submenu: [
				{ name: 'Blog', link: '/blog' },
				{ name: 'Podcast', link: '/podcast' },
				{ name: 'Changelog', link: '/changelog' },
				{ name: 'Materiais', link: '/materiais' }
			]
		},
		{
			name: 'Componentes',
			link: '#',
			submenu: [
				{ name: 'Heros', link: '/components/hero' },
				{ name: 'Funcionalidades', link: '/components/features' },
				{ name: 'Preços', link: '/components/pricing' },
				{ name: 'Newsletter', link: '/components/newsletter' },
				{ name: 'Depoimentos', link: '/components/testimonials' },
				{ name: 'CTA', link: '/components/cta' },
				{ name: 'Bento Grids', link: '/components/bento' },
				{ name: 'FAQ', link: '/components/faq' },
				{ name: 'Contato', link: '/components/contact' },
				{ name: 'Slides', link: '/components/slides' },
				{ name: 'Equipe', link: '/equipe' }
			]
		},
		{ name: 'Contato', link: '/contact' }
	],
	navActions: [{ name: 'Experimente agora', link: '/', style: 'primary', size: 'lg' }]
}
