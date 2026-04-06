// Site Settings
// ------------
// Description: Configurações de identidade do site, SEO e redes sociais.

import type { SiteSettings } from '@type/config'

export const siteSettings: SiteSettings = {
	siteTitle: 'Foxi. Tailwind CSS Astro Starter Kit da Oxygenna',
	siteDescription:
		'Foxi é uma agência de design e desenvolvimento especializada na criação de sites bonitos e funcionais.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		srcDark: '/logo.svg',
		alt: 'Logotipo Foxi.',
		text: 'Foxi.'
	},
	canonical: true,
	noindex: false,
	social: {
		twitter: 'https://twitter.com/luizeof',
		linkedin: 'https://linkedin.com/in/luizeof',
		instagram: 'https://instagram.com/luizeof',
		youtube: 'https://youtube.com/@luizeof',
		github: 'https://github.com/luizeof',
		facebook: null
	}
}
