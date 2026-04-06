import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { configData, podcastConfig } from '@config';

export async function GET(context: any) {
  // Se o podcast estiver desativado, não gerar o RSS
  if (!podcastConfig.enabled) {
    return new Response('Podcast is disabled', { status: 404 });
  }

  const podcast = await getCollection('podcast');
  
  return rss({
    title: configData.podcastName,
    description: configData.podcastDescription,
    site: context.site,
    items: podcast.map((episode) => ({
      title: episode.data.title,
      pubDate: episode.data.pubDate,
      description: episode.data.description,
      link: `/podcast/${episode.id}/`,
    })),
    customData: `<language>pt-br</language>`,
  });
}
