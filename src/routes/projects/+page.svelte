<script lang="ts">
  import ProjectCard from "$lib/components/project_card.svelte";
  export let data;

  import "$lib/themes/theme-light.css";
</script>

<div class="project-container">
  <div class="project-wrapper">
    <header class="project-header">
      <span class="subtitle">Archive Directory</span>
      <h1 class="title">Project Catalog</h1>
    </header>

    <div class="project-grid">
      {#each data.projects as project}
        <ProjectCard slug={project.slug} meta={project.meta} />
      {/each}
    </div>
  </div>
</div>

<style>
  .project-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: #f9f7f1;
    padding: 2rem 1.5rem 5rem 1.5rem;
    font-family: var(--font-sans);
  }

  .project-wrapper {
    max-width: 72rem;
    margin: 0 auto;
  }

  .project-header {
    margin-bottom: 3rem;
    border-bottom: 1px solid #e6dcca;
    padding-bottom: 1.5rem;
  }

  .subtitle {
    display: block;
    font-size: var(--text-xs);
    font-weight: var(--font-bold);
    letter-spacing: 0.2em;
    color: var(--primary);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .title {
    font-size: var(--text-4xl);
    font-family: var(--font-serif);
    color: #2c2c2c;
    margin: 0;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .project-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) {
    .project-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
