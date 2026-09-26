<script lang="ts">
  import Nav from "$lib/components/nav.svelte";
  import Footer from "$lib/components/footer.svelte";

  import "$lib/themes/theme-light.css";

  let { children } = $props();
</script>

<div class="layout">
  <Nav />

  <main class="page-wrapper">
    {@render children()}
  </main>
</div>

<Footer />

<style>
  :global(*) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    background-color: var(--background);
    color: var(--text-primary);
    font-family: var(--font-sans);
    line-height: 1.6;
    font-size: var(--font-size);
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }

  :global(::selection) {
    background-color: var(--primary);
    color: white;
  }

  :global(body) {
    background-color: var(--background);
    overflow-x: hidden;
    margin: 0;
  }

  :global(h1) {
    font-size: var(--text-2xl);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  :global(h2) {
    font-size: var(--text-xl);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
  }

  .page-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
</style>
