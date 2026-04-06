// Podcast Configuration
// ------------
// Description: Centralize your podcast platform links here. 
// Set a link to 'false' or remove it to hide the platform from the UI.

export interface PodcastPlatform {
	name: string
	icon: string
	link: string | false
	color: string
}

export interface PodcastConfig {
	/** Enable or disable the entire podcast section across the site */
	enabled: boolean
	platforms: PodcastPlatform[]
}

export const podcastConfig: PodcastConfig = {
	enabled: true,
	platforms: [
		{
			name: 'YouTube',
			icon: 'youtube-icon',
			link: 'https://youtube.com/@seu-canal',
			color: '#FF0000'
		},
		{
			name: 'Spotify',
			icon: 'spotify',
			link: 'https://open.spotify.com/show/seu-podcast',
			color: '#1DB954'
		},
		{
			name: 'Apple',
			icon: 'apple-podcast',
			link: 'https://podcasts.apple.com/podcast/seu-podcast',
			color: '#A05BB4'
		},
		{
			name: 'RSS',
			icon: 'rss',
			link: '/rss.xml',
			color: '#F26522'
		}
	]
}
