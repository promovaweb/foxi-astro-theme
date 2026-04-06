/**
 * Configurações de Identidade e SEO do Site
 * ------------
 * Descrição: Define as informações globais do site, metatags SEO e perfis sociais.
 */

import type { SiteSettings } from '@type/config'

/**
 * Objeto de configuração para as configurações globais do site.
 */
export const siteSettings: SiteSettings = {
	/** Título global do site usado em abas de navegador e metatags. */
	siteTitle: 'Foxi. Tailwind CSS Astro Starter Kit da Oxygenna',
	/** Descrição geral do site para motores de busca. */
	siteDescription:
		'Foxi é uma agência de design e desenvolvimento especializada na criação de sites bonitos e funcionais.',
	/** Imagem padrão de compartilhamento para redes sociais (Open Graph). */
	ogImage: '/og.jpg',
	/** Configuração do logotipo da marca. */
	logo: {
		/** Caminho para o logo no modo claro. */
		src: '/logo.svg',
		/** Caminho para o logo no modo escuro. */
		srcDark: '/logo.svg',
		/** Texto alternativo para acessibilidade. */
		alt: 'Logotipo Foxi.',
		/** Texto textual exibido ao lado do logo. */
		text: 'Foxi.'
	},
	/** Se deve incluir metatags canônicas. */
	canonical: true,
	/** Se deve instruir robôs de busca a não indexarem o site. */
	noindex: false,
	/** Links para os perfis das redes sociais oficiais. */
	social: {
		/** Perfil no Twitter/X. */
		twitter: 'https://twitter.com/luizeof',
		/** Perfil no LinkedIn. */
		linkedin: 'https://linkedin.com/in/luizeof',
		/** Perfil no Instagram. */
		instagram: 'https://instagram.com/luizeof',
		/** Canal oficial no YouTube. */
		youtube: 'https://youtube.com/@luizeof',
		/** Perfil no GitHub para repositórios. */
		github: 'https://github.com/luizeof',
		/** Perfil no Facebook (nulo se não utilizado). */
		facebook: null
	}
}
