<script lang="ts">
</script>

<div class="page-container">
  <div class="hero">
    <div class="hero-content">
      <div class="hero-statement">
        <span class="hero-statement-text">ELECTRICAL ENGINEER</span>
      </div>

      <h1 class="hero-title">
        Innovation Through <br />
        <span class="hero-title-italic">Scientific Excellence</span>
      </h1>

      <p class="hero-description">
        Expertise in material science, audio electronics, and network
        infrastructure. Engineering solutions for tomorrow's challenges with the
        wisdom of the past
      </p>

      <div class="hero-buttons">
        <a class="btn btn-primary" href="/projects"><h2>VIEW PROJECTS</h2></a>
        <a class="btn btn-outline" href="/contact"><h2>GET IN TOUCH</h2></a>
      </div>
    </div>
  </div>

  <div class="works"></div>
</div>

<style>
  .page-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: var(--background);
  }

  .hero {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    z-index: 10;
  }

  .hero-content {
    position: relative;
    text-align: center;
    max-width: 48rem;
    margin: 0 auto;
  }

  .hero-statement {
    display: inline-block;
    border: 1px solid var(--primary);
    background-color: white;
    box-shadow: 4px 4px 0px 0px rgba(230, 220, 202, 1);
    margin-bottom: 2rem;
    padding: 0.5rem 1.5rem;
  }

  .hero-statement-text {
    font-family: var(--font-sans);
    font-size: var(--text-xs);
    font-weight: var(--font-bold);
    color: var(--primary);
    letter-spacing: 0.25em;
    text-transform: uppercase;
  }

  .hero-title {
    font-family: var(--font-serif);
    font-size: var(--text-5xl);
    color: #2c2c2c;
    line-height: 1.1;
    margin: 0 0 2rem 0;
  }

  @media (min-width: 768px) {
    .hero-title {
      font-size: var(--text-7xl);
    }
  }

  .hero-title-italic {
    color: var(--primary);
    font-style: italic;
  }

  .hero-description {
    font-family: var(--font-sans);
    color: #666;
    max-width: 32rem;
    margin: 0 auto 3rem auto;
    line-height: 1.625;
    font-size: var(--text-sm);
  }

  @media (min-width: 768px) {
    .hero-description {
      font-size: var(--text-base);
    }
  }
</style>
