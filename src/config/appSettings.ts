// App Settings
// ------------
// Description: Configurações de comportamento do aplicativo, UI e serviços.

import type { AppSettings } from '@types/config'

export const appSettings: AppSettings = {
	mode: 'auto',
	scrollAnimations: false,
	blogPageSize: 6,
	changelogPageSize: 6,
	podcastPageSize: 6,
	exitIntentPopup: true,
	newsletterUrl: 'https://seu-servico-de-email.com/subscribe',
	podcastName: 'FoxyCast',
	podcastDescription: 'Conversas com as pessoas mais tragicamente incompreendidas do nosso tempo.'
}
