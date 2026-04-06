// Footer Navigation
// ------------
// Description: Os dados de navegação do rodapé do site.

export interface FooterAbout {
	title: string
	aboutText: string
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Foxi.',
		aboutText:
			'Componentes responsivos, acessíveis e feitos por especialistas em React e HTML, prontos para serem usados em seu site ou aplicativo. Basta copiar e colar em seu projeto Tailwind CSS.'
	},
	footerColumns: [
		{
			category: 'Produto',
			subCategories: [
				{
					subCategory: 'Recursos',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Preços',
					subCategoryLink: '/pricing'
				},
				{
					subCategory: 'Changelog',
					subCategoryLink: '/changelog'
				},
				{
					subCategory: 'Termos',
					subCategoryLink: '/terms'
				}
			]
		},
		{
			category: 'Sobre nós',
			subCategories: [
				{
					subCategory: 'Sobre nós',
					subCategoryLink: '/'
				},
				{
					subCategory: 'Notícias',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'Carreiras',
					subCategoryLink: '/blog'
				}
			]
		},
		{
			category: 'Entre em contato',
			subCategories: [
				{
					subCategory: 'Contato',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Suporte',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Junte-se a nós',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© Foxi 2024.'
	}
}
