/**
 * Configurações de Comportamento e UI do Aplicativo
 * ------------
 * Descrição: Define as configurações de comportamento, UI e serviços externos.
 */

import type { AppSettings } from '@type/config'

/**
 * Objeto de configuração para o comportamento e aparência da aplicação.
 */
export const appSettings: AppSettings = {
	/** Define o modo de cor inicial (auto, light ou dark). */
	mode: 'auto',
	/** Ativa ou desativa as animações de scroll globalmente. */
	scrollAnimations: false,
	/** Número de posts exibidos por página no índice do blog. */
	blogPageSize: 6,
	/** Número de itens exibidos por página na lista de alterações. */
	changelogPageSize: 6,
	/** Número de episódios exibidos por página no podcast. */
	podcastPageSize: 6,
	/** Ativa ou desativa o pop-up que aparece quando o usuário tenta sair da página. */
	exitIntentPopup: true,
	/** Endpoint para o serviço de captura de emails da newsletter. */
	newsletterUrl: 'https://seu-servico-de-email.com/subscribe',
	/** Nome principal do podcast exibido no cabeçalho e páginas de podcast. */
	podcastName: 'FoxyCast',
	/** Descrição curta do podcast para metatags e seção de hero. */
	podcastDescription: 'Conversas com as pessoas mais tragicamente incompreendidas do nosso tempo.'
}
