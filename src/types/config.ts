// Config Types
// ------------
// Description: Centraliza todas as interfaces e tipos de configuração do projeto.

/**
 * Modos de exibição do tema:
 * - 'auto': Segue a preferência do sistema operacional.
 * - 'light': Força o modo claro.
 * - 'dark': Força o modo escuro.
 */
export type Mode = 'auto' | 'light' | 'dark'

/**
 * Estrutura do logotipo do site.
 */
export interface Logo {
	/** Caminho para a imagem do logo no modo claro (ex: /logo.svg) */
	src: string
	/** Caminho opcional para a imagem do logo no modo escuro */
	srcDark?: string
	/** Texto alternativo para acessibilidade */
	alt: string
	/** Texto exibido ao lado do ícone do logo */
	text: string
}

/**
 * Configurações de identidade, SEO e redes sociais.
 */
export interface SiteSettings {
	/** Título principal do site (exibido na aba do navegador) */
	siteTitle: string
	/** Descrição do site para motores de busca (SEO) */
	siteDescription: string
	/** Caminho para a imagem de compartilhamento nas redes sociais (Open Graph) */
	ogImage: string
	/** Configurações do logotipo */
	logo: Logo
	/** Habilita ou desabilita a tag link rel="canonical" */
	canonical: boolean
	/** Adiciona tag meta robots "noindex" se verdadeiro */
	noindex: boolean
	/** Links para perfis em redes sociais */
	social: {
		twitter?: string | null
		linkedin?: string | null
		instagram?: string | null
		youtube?: string | null
		facebook?: string | null
		github?: string | null
	}
}

/**
 * Configurações de comportamento do aplicativo, UI e serviços externos.
 */
export interface AppSettings {
	/** Modo padrão do tema (auto, light ou dark) */
	mode: Mode
	/** Habilita ou desabilita as animações de entrada ao fazer scroll */
	scrollAnimations: boolean
	/** Número de posts exibidos por página no Blog */
	blogPageSize: number
	/** Número de itens exibidos por página no Changelog */
	changelogPageSize: number
	/** Número de episódios exibidos por página no Podcast */
	podcastPageSize: number
	/** Habilita o popup exibido quando o usuário tenta sair da página */
	exitIntentPopup: boolean
	/** URL do endpoint ou serviço de captura de emails (newsletter) */
	newsletterUrl: string
	/** Nome do Podcast exibido no site */
	podcastName: string
	/** Breve descrição do Podcast para a seção de cabeçalho/SEO */
	podcastDescription: string
}

/**
 * Agregador central que combina as configurações de site e de aplicativo.
 */
export interface Config extends SiteSettings, AppSettings {}
