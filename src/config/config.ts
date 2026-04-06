// Config Aggregator
// ------------
// Description: Agrega todas as configurações do site.

import { siteSettings } from '@config/siteSettings'
import { appSettings } from '@config/appSettings'
import { podcastConfig } from '@config/podcast'
import type { Config, Mode, Logo, SiteSettings, AppSettings as AppSettingsType } from '@type/config'

export type { Config, Mode, Logo, SiteSettings, AppSettingsType as AppSettings }
export { podcastConfig }

export const configData: Config = {
	...siteSettings,
	...appSettings,
	podcastEnabled: podcastConfig.enabled,
	podcastPlatforms: podcastConfig.platforms
}
