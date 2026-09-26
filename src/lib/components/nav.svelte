<script lang="ts">
  import { page } from "$app/stores";
  import Logo from "$lib/components/logo.svelte";
</script>

<nav class="nav">
  <a class="logo-link" href="/"><Logo /></a>
  <div class="nav-links">
    <a class="nav-link" class:active={$page.url.pathname === "/"} href="/"
      >Home</a
    >
    <a
      class="nav-link"
      class:active={$page.url.pathname === "/projects"}
      href="/projects">Projects</a
    >
    <a
      class="nav-link"
      class:active={$page.url.pathname === "/blog"}
      href="/blog">Blog</a
    >
    <a
      class="nav-link"
      class:active={$page.url.pathname === "/about"}
      href="/about">About</a
    >
    <a
      class="nav-link"
      class:active={$page.url.pathname === "/contact"}
      href="/contact">Contact</a
    >
  </div>
</nav>

<style>
  .nav {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem 1.5rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-sans);
    background-color: var(--background);
    border-bottom: 1px solid rgba(230, 220, 202, 0.5);
    box-sizing: border-box;
    z-index: 50;
  }

  @media (min-width: 768px) {
    .nav {
      padding: 2rem;
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    z-index: 50;
    text-decoration: none;
  }

  .logo-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    z-index: 50;
    text-decoration: none;
  }

  .nav-links {
    display: none;
    align-items: center;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .nav-links {
      display: flex;
    }
  }

  .nav-link {
    font-size: var(--text-xs);
    font-weight: var(--font-bold);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    transition: color 0.2s;
    color: #8a8a8a;
    text-decoration: none;
    padding-bottom: 0.25rem;
    border-bottom: 2px solid transparent;
  }

  .nav-link:hover {
    color: var(--primary);
  }

  .nav-link.active {
    color: #2c2c2c;
    border-bottom-color: var(--primary);
  }
</style>
