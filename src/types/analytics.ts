/**
 * Analytics Types
 * ------------
 * Descrição: Tipos para integração com Google Tag Manager e DataLayer.
 */

export interface DataLayerInfo {
	/** Tipo de conteúdo da página (ex: home, blog, podcast) */
	pageType: 'home' | 'blog' | 'podcast' | 'material' | 'page' | 'checkout' | 'thanks' | 'error'
	/** Título amigável para o analytics */
	pageTitle?: string
	/** Descrição curta da página */
	pageDescription?: string
	/** Autor do conteúdo (para blog/podcast) */
	author?: string
	/** Data de publicação formatada */
	publishDate?: string
	/** Categoria principal do conteúdo */
	category?: string
	/** Lista de tags associadas ao conteúdo */
	tags?: string[]
	/** Tipo específico de material (ebook, webinar, hangout) */
	materialType?: string
}
