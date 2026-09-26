import { error } from '@sveltejs/kit';
import type { Project, ProjectMetaData } from '$lib/types';

export async function load({ params }) {
  const modules = import.meta.glob('/src/lib/content/project/*.md');

  const expectedPath = `/src/lib/content/project/${params.slug}.md`;
  const match = modules[expectedPath];

  if (!match) {
    throw error(404, `Project ${params.slug} not found. This is embarassing...`);
  }

  try {
    const post = await match() as Project;

    return {
      content: post.default,
      meta: post.metadata as ProjectMetaData
    };
  } catch (e) {
    throw error(500, 'Error rendering project data.')
  };

}
