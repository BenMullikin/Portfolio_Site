<script lang="ts">
  export let data;

  $: ({ content: Content, meta } = data);
</script>

<div class="project-containter">
  <div class="project-wrapper">
    <a href="/projects" class="project-link">&lArr; Return to Catalog</a>

    <header class="project-header">
      <div class="header-left">
        <div class="status-badge">
          <span class="status-dot"></span>
          Status: {meta.status}
        </div>
        <h1 class="project-title">{meta.title}</h1>
      </div>

      <div class="header-right">
        <div class="meta-label">Revision</div>
        <div class="meta-value">REV-{meta.rev}</div>

        <div class="meta-label">Start Date</div>
        <div class="meta-value">
          {new Date(meta.start_date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </header>

    <div class="content">
      <div class="main-content">
        {#if meta.cover_image}
          <div class="hero-image-wrapper">
            <img src={meta.cover_image} alt={meta.title} class="hero-image" />
            <div class="hero-caption">Fig 1.1: Project Cover</div>
          </div>
        {/if}

        <section class="abstract">
          <h3 class="abstract-title">Abstract</h3>
          <article class="prose">
            <svelte:component this={Content} />
          </article>
        </section>
      </div>

      <div class="sidebar">
        {#if meta.specs && meta.specs.length > 0}
          <div class="specs-box">
            <h4 class="sidebar-title">Specifications</h4>
            <ul class="specs-list">
              <!-- {#each meta.specs as spec} -->
              <!--   {@const [label, ...valueParts] = spec.split(":")} -->
              <!--   <li class="spec-item"> -->
              <!--     <span class="spec-label">{label.trim()}</span> -->
              <!--     <span class="spec-value">{valueParts.join(":").trim()}</span> -->
              <!--   </li> -->
              <!-- {/each} -->
            </ul>
          </div>
        {/if}

        {#if meta.github}
          <div class="actions">
            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline"
            >
              Repository
            </a>
          </div>
        {/if}

        {#if meta.tags && meta.tags.length > 0}
          <div class="tags-section">
            <h4 class="sidebar-title">Tags</h4>
            <div class="tags-container">
              {#each meta.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .project-containter {
    display: flex;
    flex: 1;
    min-height: 100vh;
    background-color: var(--background-color);
    padding: 2rem 1.5rem 1.5rem;
    font-family: "DM Sans", sans-serif;
  }

  .project-wrapper {
    max-width: 72rem;
    margin: 0 auto;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #999;
    text-decoration: none;
    margin-bottom: 2rem;
    transition: color 0.2s ease;
  }

  .project-link:hover {
    color: #d68c45;
  }

  .project-header {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 4rem;
    border-bottom: 2px solid #2c2c2c;
    padding-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .project-header {
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    }
  }

  .header-left {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .header-right {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  @media (min-width: 768px) {
    .header-right {
      align-items: flex-end;
      text-align: right;
    }
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.75rem;
    border: 1px solid #d68c45;
    color: #d68c45;
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background-color: rgba(214, 140, 69, 0.05);
    width: max-content;
  }

  .status-dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #d68c45;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .project-title {
    font-family: "Libre Baskerville", serif;
    font-size: 2.5rem;
    color: #2c2c2c;
    line-height: 1.1;
    margin: 0;
  }

  @media (min-width: 768px) {
    .project-title {
      font-size: 3.75rem;
    }
  }

  .meta-label {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #999;
    margin-bottom: 0.25rem;
  }

  .meta-value {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.5rem;
    color: #2c2c2c;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    .content {
      grid-template-columns: repeat(12, 1fr);
    }

    .main-content {
      grid-column: span 8;
    }

    .sidebar {
      grid-column: span 4;
    }
  }

  .main-content .sidebar {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .hero-image-wrapper {
    position: relative;
    aspect-ratio: 16/9;
    background-color: #e6dcca;
    border: 1px solid #e6dcca;
    padding: 0.5rem;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%) contrast(125%);
  }

  .hero-caption {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.25rem 0.75rem;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    backdrop-filter: blur(4px);
  }

  .abstract-title {
    font-family: "Libre Baskerville", serif;
    font-size: 1.25rem;
    color: #2c2c2c;
    margin-bottom: 1rem;
  }

  .prose {
    font-family: "Libre Baskerville", serif;
    color: #444;
    line-height: 1.8;
  }

  .prose :global(p) {
    margin-bottom: 1.5rem;
  }

  .sidebar-title {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #d68c45;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #f0f0f0;
  }

  .tags-section .sidebar-title {
    color: #999;
    border-bottom: none;
    margin-bottom: 1rem;
  }

  .specs-box {
    background-color: white;
    padding: 1.5rem;
    border: 1px solid #e6dcca;
    box-shadow: 4px 4px 0px 0px rgba(230, 220, 202, 0.6);
  }

  .specs-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .spec-item {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 0.875rem;
  }

  .spec-label {
    color: #999;
  }

  .spec-value {
    font-weight: bold;
    color: #2c2c2c;
    font-family: "Space Grotesk", sans-serif;
  }

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    padding: 0.25rem 0.75rem;
    background-color: rgba(230, 220, 202, 0.3);
    border: 1px solid #e6dcca;
    color: #555;
    font-size: 0.75rem;
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.75rem;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;
    cursor: pointer;
  }

  .btn-outline {
    border: 1px solid #2c2c2c;
    color: #2c2c2c;
    background: transparent;
  }

  .btn-outline:hover {
    background-color: #f0f0f0;
  }
</style>
