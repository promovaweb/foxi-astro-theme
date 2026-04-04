// Config
// ------------
// Description: O arquivo de configuração do site.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
	changelogPageSize: number
	podcastPageSize: number
	exitIntentPopup: boolean
	newsletterUrl: string
	podcastName: string
	podcastDescription: string
}

export const configData: Config = {
	siteTitle: 'Foxi. Tailwind CSS Astro Starter Kit da Oxygenna',
	siteDescription:
		'Foxi é uma agência de design e desenvolvimento especializada na criação de sites bonitos e funcionais.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Logotipo Foxi.'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true,
	changelogPageSize: 6,
	podcastPageSize: 6,
	exitIntentPopup: true,
	newsletterUrl: 'https://seu-servico-de-email.com/subscribe',
	podcastName: 'Their Side',
	podcastDescription: 'Conversas com as pessoas mais tragicamente incompreendidas do nosso tempo.'
}
