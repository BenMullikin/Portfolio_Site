<script lang="ts">
  import type { ProjectMetaData } from "$lib/types";

  export let slug: string | undefined;
  export let meta: ProjectMetaData;

  const imageSrc = meta.cover_image || "/images/projects/networking.jpg";
  const date = meta.start_date.split("-")[0];
</script>

<a href={`/projects/${slug}`} class="project-card">
  <div class="image-wrapper">
    <div class="image-overlay"></div>
    <img
      class="card-image"
      src={imageSrc}
      alt={`Cover Image for Project: ${meta.title}`}
    />
  </div>

  <div class="content-wrapper">
    <div class="meta-header">
      <span class="category">{meta.category}</span>
      <span class="date">{date}</span>
    </div>
    <h3 class="title">{meta.title}</h3>
    <p class="description">{meta.description}</p>
  </div>
</a>

<style>
  .project-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--background);
    border: 1px solid #f0ebe0;
    transition:
      border-color 0.5s ease,
      box-shadow 0.5s ease;
    text-decoration: none;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    padding: 0.5rem;
  }

  .project-card:hover {
    border-color: rgba(214, 140, 69, 0.5);
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -1px rgb(0 0 0 / 0.06);
  }

  .image-wrapper {
    position: relative;
    height: 16rem;
    overflow: hidden;
    background-color: #f0ebe0;
    margin-bottom: 1.5rem;
  }

  .image-overlay {
    position: absolute;
    inset: 0;
    background-color: var(--primary);
    mix-blend-mode: color;
    opacity: 0;
    z-index: 10;
    transition: opacity 0.5s ease;
  }

  .project-card:hover .image-overlay {
    opacity: 0.1;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
    filter: grayscale(20%);
    transition:
      transform 0.7s ease-out,
      filter 0.7s ease-out;
  }

  .project-card:hover .card-image {
    transform: scale(1.05);
    filter: grayscale(0%);
  }

  .content-wrapper {
    padding: 0 1rem 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .meta-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
  }

  .category {
    font-size: 10px;
    font-weight: var(--font-bold);
    letter-spacing: 0.2em;
    color: #a8c3bc;
    text-transform: uppercase;
    font-family: var(--font-sans);
  }

  .date {
    font-size: 10px;
    color: #999999;
    font-family: var(--font-sans);
  }

  .title {
    font-size: var(--text-2xl);
    line-height: 2rem;
    font-family: var(--font-serif);
    color: #2c2c2c;
    margin-bottom: 0.75rem;
    transition: color 0.3s ease;
  }

  .project-card:hover .title {
    color: var(--primary);
  }

  .description {
    font-size: var(--text-sm);
    line-height: 1.625;
    color: #666666;
    font-family: var(--font-sans);
    margin-bottom: 1.5rem;
    flex: 1;
  }
</style>
