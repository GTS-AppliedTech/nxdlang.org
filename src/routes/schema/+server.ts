import { json } from '@sveltejs/kit';

export const prerender = true;

export function GET() {
	return json(
		{
			'@context': {
				'@version': 1.1,

				doc_id: 'https://nxdlang.org/schema#doc_id',
				title: 'https://nxdlang.org/schema#title',
				description: 'https://nxdlang.org/schema#description',
				layer: 'https://nxdlang.org/schema#layer',
				category: 'https://nxdlang.org/schema#category',

				keywords: {
					'@id': 'https://nxdlang.org/schema#keywords',
					'@container': '@set'
				},

				doc_version: 'https://nxdlang.org/schema#doc_version',
				status: 'https://nxdlang.org/schema#status'
			}
		},
		{
			headers: {
				'content-type': 'application/ld+json'
			}
		}
	);
}