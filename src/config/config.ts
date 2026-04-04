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
	social: {
		twitter?: string | null
		linkedin?: string | null
		instagram?: string | null
		youtube?: string | null
		facebook?: string | null
		github?: string | null
	}
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
	podcastName: 'FoxyCast',
	podcastDescription: 'Conversas com as pessoas mais tragicamente incompreendidas do nosso tempo.',
	social: {
		twitter: 'https://twitter.com/luizeof',
		linkedin: 'https://linkedin.com/in/luizeof',
		instagram: 'https://instagram.com/luizeof',
		youtube: 'https://youtube.com/@luizeof',
		github: 'https://github.com/luizeof',
		facebook: null
	}
}
