<script lang="ts">
  import Logo from "$lib/components/logo.svelte";
</script>

<footer class="site-footer">
  <div class="footer-wrapper">
    <div class="brand-section">
      <div class="logo-wrapper">
        <Logo />
      </div>
      <p class="description">
        Specialized engineering solutions for audio, material science, and
        network infrastructure. Blending retro aesthetics with modern precision.
      </p>
    </div>

    <div class="links-section">
      <h3 class="links-title">Connect</h3>
      <ul class="links-list">
        <li>
          <a href="linkedin.com/in/BenMullikin" target="_blank" rel="noreferrer"
            >LinkedIn</a
          >
        </li>
        <li>
          <a href="github.com/BenMullikin" target="_blank" rel="noreferrer"
            >GitHub</a
          >
        </li>
        <li><a href="/">Email</a></li>
      </ul>
    </div>

    <div></div>
  </div>
</footer>

<style>
  .site-footer {
    background-color: #ffffff;
    color: #2c2c2c;
    padding: 4rem 1.5rem;
    font-family: "DM Sans", sans-serif;
    border-top: 1px solid #e6dcca;
  }

  .footer-wrapper {
    max-width: 72rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: flex-start;
    justify-content: space-between;
  }

  /* Switch to row layout on medium screens and up */
  @media (min-width: 768px) {
    .footer-wrapper {
      flex-direction: row;
    }
  }

  /* Brand Section */
  .brand-section {
    max-width: 20rem;
  }

  .logo-wrapper {
    margin-bottom: 1.5rem;
  }

  .description {
    font-size: 0.875rem;
    color: #666666;
    line-height: 1.625;
    margin: 0;
  }

  /* Links Section */
  .links-section {
    font-size: 0.875rem;
  }

  .links-title {
    font-weight: bold;
    color: #2c2c2c;
    margin: 0 0 1rem 0;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.75rem;
  }

  .links-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .links-list a {
    color: #666666;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .links-list a:hover {
    color: #d68c45;
  }
</style>
