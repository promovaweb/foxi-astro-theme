// Config Aggregator
// ------------
// Description: Agrega todas as configurações do site.

import { siteSettings } from './siteSettings'
import { appSettings } from './appSettings'
import type { Config, Mode, Logo, SiteSettings, AppSettings as AppSettingsType } from '@types/config'

export type { Config, Mode, Logo, SiteSettings, AppSettingsType as AppSettings }

export const configData: Config = {
	...siteSettings,
	...appSettings
}
