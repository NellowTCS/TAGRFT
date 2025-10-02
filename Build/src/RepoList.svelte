<script>
  import RepoCard from "./RepoCard.svelte";
  export let repos = [];
</script>

{#if repos && repos.length > 0}
  <div class="repo-grid">
    {#each repos as repo, index (repo?.id || index)}
      <RepoCard 
        {repo}
        position={
          index === 0 ? "top-left" :
          index === repos.length - 1 ? "bottom-right" :
          "inner"
        }
      />
    {/each}
  </div>
{:else}
  <div class="no-results">
    <p>No results yet.</p>
  </div>
{/if}

<style>
  .repo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  .no-results {
    text-align: center;
    padding: 3rem;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    .repo-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
      padding: 0.5rem;
    }
  }
</style>
