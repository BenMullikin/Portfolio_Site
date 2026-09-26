<script lang="ts">
  let { title, summary } = $props();
</script>

<article class="card">
  <h2>{title}</h2>
  <p>{summary}</p>
</article>

<style>
  .card {
    border: 1px solid #333;
    padding: 1rem;
    border-radius: 4px;
  }

  h2 {
    color: #ff3e00;
  }
</style>
