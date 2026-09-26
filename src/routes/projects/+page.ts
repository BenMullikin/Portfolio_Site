import type { ProjectMetaData } from '$lib/types';

export async function load() {

  const modules = import.meta.glob('$lib/content/project/*.md', { eager: true });

  const projects = Object.entries(modules).map(([path, module]) => {
    const post = module as { metadata: ProjectMetaData };
    const slug = path.split('/').pop()?.replace('.md', '');

    return {
      slug,
      meta: post.metadata
    }
  });

  return {
    projects
  };
}
