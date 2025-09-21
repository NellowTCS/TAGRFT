<script>
  import RepoCard from "./RepoCard.svelte";
  export let repos = [];
</script>

{#if repos && repos.length > 0}
  <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
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
  <p style="text-align:center;">No results yet.</p>
{/if}
