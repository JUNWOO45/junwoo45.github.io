import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { publishedPosts } from '../lib/posts';
export async function GET(context: APIContext) {
  return rss({ title: '준우의 기록', description: '배우고, 만들고, 생각한 것을 기록합니다.', site: context.site!, items: (await publishedPosts()).map(post => ({ title: post.data.title, description: post.data.description, pubDate: post.data.date, link: `/posts/${post.id}/` })), customData: '<language>ko</language>' });
}
