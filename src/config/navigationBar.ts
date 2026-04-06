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
		{ name: 'Materiais', link: '/materiais' },
		{ name: 'Podcast', link: '/podcast' },
		{ name: 'Preços', link: '/pricing' },
		{ name: 'Recursos', link: '/features' },
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
		{
			name: 'Blog',
			link: '#',
			submenu: [
				{ name: 'Ver Blog', link: '/blog' },
				{ name: 'Changelog', link: '/changelog' },
				{ name: 'Termos', link: '/terms' }
			]
		},
		{ name: 'Contato', link: '/contact' }
	],
	navActions: [{ name: 'Experimente agora', link: '/', style: 'primary', size: 'lg' }]
}
