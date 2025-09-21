<script>
  import RepoList from "./RepoList.svelte";
  import { Search, Shuffle, Github, Key } from "lucide-svelte";

  let query = "";
  let token = "";
  let repos = [];
  let error = "";
  let loading = false;

  // Ensure repos is always an array
  $: safeRepos = Array.isArray(repos) ? repos : [];

  async function searchRepos() {
    if (!query.trim()) return;
    loading = true;
    error = "";
    repos = [];

    const headers = token ? { Authorization: `token ${token}` } : {};

    try {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc`,
        { headers }
      );

      if (!res.ok) throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);

      const data = await res.json();
      repos = Array.isArray(data.items) ? data.items : [];
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  }

  async function randomRepo() {
    if (!query.trim()) return;
    loading = true;
    error = "";
    repos = [];

    const headers = token ? { Authorization: `token ${token}` } : {};
    const randomPage = Math.floor(Math.random() * 10) + 1;

    try {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=1&page=${randomPage}`,
        { headers }
      );

      if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
      const data = await res.json();
      repos = (Array.isArray(data.items) && data.items.length) ? [data.items[0]] : [];
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  }

  function handleKey(e) {
    if (e.key === "Enter") searchRepos();
  }
</script>


<div class="container curvo-inner" style="box-shadow: 0 8px 32px rgba(30,58,138,0.18);">
  <h1>
    <Github class="title-icon" size={32} />
    There's A GitHub Repo For That™
  </h1>

  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; margin-bottom: 1rem;">
    <div class="input-with-icon">
      <Search class="input-icon" size={20} />
      <input class="curvo-top-left" placeholder="Search GitHub repos..." bind:value={query} on:keypress={handleKey} />
    </div>
    <div class="input-with-icon">
      <Key class="input-icon" size={20} />
      <input class="curvo-bottom-right" placeholder="Optional token" type="password" bind:value={token} />
    </div>
  </div>

    <div class="token-helper">
      <small>
        Need a token? 
        <a href="https://github.com/settings/tokens/new?scopes=repo" target="_blank">
          Generate one here
        </a>
      </small>
    </div>

    <div class="button-group">
      <button class="curvo-bottom-left" on:click={searchRepos}>Search</button>
      <button class="curvo-bottom-right" on:click={randomRepo}>Random Repo</button>
    </div>

  {#if loading} 
    <div class="loading">
      <div class="spinner"></div>
      <p>Searching repositories...</p>
    </div>
  {/if}
  {#if error} <p class="error">{error}</p> {/if}

  <RepoList repos={safeRepos} />
</div>
