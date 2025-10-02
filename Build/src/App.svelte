<script>
  import RepoList from "./RepoList.svelte";
  import { Search, Shuffle, Github, Key, Filter } from "lucide-svelte";
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  let query = "";
  let token = "";
  let repos = [];
  let error = "";
  let loading = false;
  let searched = false;
  let totalCount = 0;
  let currentPage = 1;
  let perPage = 30;
  let sortBy = "stars"; // stars, forks, updated
  let language = "";
  let showFilters = false;
  let searchHistory = [];
  let debounceTimer;

  // Load saved token and history from localStorage
  onMount(() => {
    const savedToken = localStorage.getItem('github_token');
    const savedHistory = localStorage.getItem('search_history');
    if (savedToken) token = savedToken;
    if (savedHistory) searchHistory = JSON.parse(savedHistory);
  });

  // Save token to localStorage
  $: if (token) {
    localStorage.setItem('github_token', token);
  }

  // Ensure repos is always an array
  $: safeRepos = Array.isArray(repos) ? repos : [];
  $: hasMore = totalCount > currentPage * perPage;

  // Save search to history
  function saveToHistory(searchQuery) {
    if (!searchQuery.trim()) return;
    searchHistory = [searchQuery, ...searchHistory.filter(q => q !== searchQuery)].slice(0, 5);
    localStorage.setItem('search_history', JSON.stringify(searchHistory));
  }

  async function searchRepos(page = 1) {
    if (!query.trim()) return;
    
    searched = true;
    loading = true;
    error = "";
    if (page === 1) repos = [];
    currentPage = page;

    const headers = token ? { Authorization: `token ${token}` } : {};
    
    // Build query with filters
    let searchQuery = query;
    if (language) searchQuery += ` language:${language}`;

    try {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(searchQuery)}&sort=${sortBy}&order=desc&per_page=${perPage}&page=${page}`,
        { headers }
      );

      // Handle rate limiting
      if (res.status === 403) {
        const resetTime = res.headers.get('X-RateLimit-Reset');
        const resetDate = resetTime ? new Date(resetTime * 1000) : null;
        const timeUntilReset = resetDate ? Math.ceil((resetDate - new Date()) / 60000) : '?';
        throw new Error(`Rate limit exceeded. Try again in ${timeUntilReset} minutes or add a token.`);
      }

      if (!res.ok) {
        if (res.status === 401) throw new Error('Invalid token. Please check your GitHub token.');
        if (res.status === 422) throw new Error('Invalid search query. Please refine your search.');
        throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      totalCount = data.total_count || 0;
      const newRepos = Array.isArray(data.items) ? data.items : [];
      
      if (page === 1) {
        repos = newRepos;
        saveToHistory(query);
      } else {
        repos = [...repos, ...newRepos];
      }
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  }

  function loadMore() {
    searchRepos(currentPage + 1);
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      searchRepos(1);
    }
  }

  async function randomRepo() {
    if (!query.trim()) return;
    searched = true;
    loading = true;
    error = "";
    repos = [];

    const headers = token ? { Authorization: `token ${token}` } : {};
    const randomPage = Math.floor(Math.random() * 10) + 1;

    try {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=${sortBy}&order=desc&per_page=1&page=${randomPage}`,
        { headers }
      );

      if (res.status === 403) {
        throw new Error('Rate limit exceeded. Try adding a token.');
      }
      if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
      
      const data = await res.json();
      repos = Array.isArray(data.items) && data.items.length ? [data.items[0]] : [];
      saveToHistory(query);
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  }

  function selectFromHistory(historyQuery) {
    query = historyQuery;
    searchRepos(1);
  }

  function clearHistory() {
    searchHistory = [];
    localStorage.removeItem('search_history');
  }
</script>

<div
  class="container curvo-inner"
  role="main"
  aria-label="GitHub Repository Search Application"
>
  <header>
    <h1>
      <Github class="title-icon" size={32} aria-hidden="true" />
      There's A GitHub Repo For That™
    </h1>
    <p class="subtitle">Find that one weirdly specific thing you need!</p>
  </header>

  <div class="search-section" role="search">
    <div class="input-group">
      <div class="input-with-icon">
        <Search class="input-icon" size={20} aria-hidden="true" />
        <input
          class="curvo-middle-right"
          placeholder="Search GitHub repos..."
          bind:value={query}
          on:keydown={handleKeyPress}
          aria-label="Search query"
          aria-describedby="search-help"
          autocomplete="off"
        />
      </div>
      <div class="input-with-icon">
        <Key class="input-icon" size={20} aria-hidden="true" />
        <input
          class="curvo-middle-left"
          placeholder="Optional token"
          type="password"
          bind:value={token}
          aria-label="GitHub personal access token"
          autocomplete="off"
        />
      </div>
    </div>

    <!-- Search History -->
    {#if searchHistory.length > 0 && !searched}
      <div class="search-history">
        <small>Recent searches:</small>
        <div class="history-tags">
          {#each searchHistory as historyItem}
            <button 
              class="history-tag" 
              on:click={() => selectFromHistory(historyItem)}
              type="button"
            >
              {historyItem}
            </button>
          {/each}
          <button class="history-clear" on:click={clearHistory} type="button" aria-label="Clear history">
            Clear
          </button>
        </div>
      </div>
    {/if}

    <!-- Filters -->
    <div class="filters-section">
      <button 
        class="filter-toggle" 
        on:click={() => showFilters = !showFilters}
        type="button"
        aria-expanded={showFilters}
      >
        <Filter size={16} />
        {showFilters ? 'Hide' : 'Show'} Filters
      </button>
      
      {#if showFilters}
        <div class="filters" transition:slide>
          <div class="filter-group">
            <label for="sort-select">Sort by:</label>
            <select id="sort-select" bind:value={sortBy}>
              <option value="stars">Stars</option>
              <option value="forks">Forks</option>
              <option value="updated">Recently Updated</option>
            </select>
          </div>
          <div class="filter-group">
            <label for="language-input">Language:</label>
            <input 
              id="language-input"
              type="text" 
              bind:value={language} 
              placeholder="e.g., JavaScript"
            />
          </div>
        </div>
      {/if}
    </div>    <div class="token-helper" id="search-help">
      <small>
        Need a token for higher rate limits?
        <a
          href="https://github.com/settings/tokens/new?scopes=repo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Generate GitHub token (opens in new tab)"
        >
          Generate one here
        </a>
      </small>
    </div>

    <!-- Spacer for fixed buttons -->
    <div style="height: 60px;"></div>

  <!-- Buttons at bottom corners of search-section -->
  <div class="button-group">
      <button
        class="curvo-top-right"
        on:click={() => searchRepos(1)}
        disabled={loading || !query.trim()}
        aria-label="Search repositories"
        type="button"
      >
        <Search size={16} class="button-icon" aria-hidden="true" />
        Search
      </button>
      <button
        class="curvo-top-left"
        on:click={randomRepo}
        disabled={loading || !query.trim()}
        aria-label="Get random repository"
        type="button"
      >
        <Shuffle size={16} class="button-icon" aria-hidden="true" />
        I'm Feeling Lucky
      </button>
    </div>
  </div>

  {#if loading}
    <div class="loading" role="status" aria-live="polite">
      <div class="spinner" aria-hidden="true"></div>
      <p>{currentPage > 1 ? 'Loading more results...' : 'Searching repositories...'}</p>
    </div>
  {/if}
  
  {#if error}
    <div class="error" role="alert" aria-live="assertive">
      <strong>Error:</strong> {error}
    </div>
  {/if}
  
  {#if !loading && !error}
    {#if safeRepos.length > 0}
      <div class="results-info">
        <p>
          Found <strong>{totalCount.toLocaleString()}</strong> repositories
          {#if language}
            in <strong>{language}</strong>
          {/if}
          - Showing {safeRepos.length} of {Math.min(totalCount, 1000)}
        </p>
      </div>
      
      <RepoList repos={safeRepos} />
      
      {#if hasMore && safeRepos.length < 1000}
        <div class="load-more-section">
          <button 
            class="load-more-btn" 
            on:click={loadMore}
            disabled={loading}
            type="button"
          >
            Load More Results
          </button>
        </div>
      {/if}
    {:else if searched}
      <div class="empty-state">
        <p>No repositories found for <strong>"{query}"</strong>.</p>
        <small>Try adjusting your search terms or filters</small>
      </div>
    {/if}
  {/if}
</div>

<style>
  .subtitle {
    text-align: center;
    margin: -1.5rem 0 2rem 0;
    font-size: 1.2rem;
    opacity: 0.9;
    font-weight: 400;
  }

  .search-history {
    margin: 1rem 0;
    text-align: center;
  }

  .history-tags {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 0.5rem;
  }

  .history-tag {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
    background: var(--section-bg);
    border: 1px solid var(--section-border);
    border-radius: 20px;
    color: var(--text-primary);
    cursor: pointer;
    transition: all 0.2s;
  }

  .history-tag:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-1px);
  }

  .history-clear {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
    background: rgba(255, 77, 79, 0.2);
    border: 1px solid rgba(255, 77, 79, 0.4);
    border-radius: 20px;
    color: var(--text-primary);
    cursor: pointer;
  }

  .filters-section {
    margin: 1.5rem 0 1rem 0;
  }

  .filter-toggle {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    background: var(--section-bg);
    border: 1px solid var(--section-border);
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0 auto;
    color: var(--text-primary);
  }

  .filters {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .filter-group {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .filter-group label {
    font-size: 0.85rem;
    opacity: 0.9;
    color: var(--text-secondary);
  }

  .filter-group select,
  .filter-group input {
    padding: 0.5rem;
    font-size: 0.9rem;
    border-radius: 8px;
    border: 1px solid var(--input-border);
    background: var(--input-bg);
    color: var(--card-text);
    min-width: 150px;
  }

  .results-info {
    text-align: center;
    margin: 2rem 0 1rem 0;
    font-size: 1rem;
    opacity: 0.9;
    color: var(--text-primary);
  }

  .results-info strong {
    color: var(--accent-color);
    font-weight: 600;
  }

  .load-more-section {
    text-align: center;
    margin: 2rem 0;
  }

  .load-more-btn {
    padding: 0.8rem 2rem;
    font-size: 1rem;
    background: var(--section-bg);
    border: 2px solid var(--section-border);
    color: var(--text-primary);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .load-more-btn:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }

  .empty-state {
    text-align: center;
    margin: 3rem 0;
    padding: 2rem;
    background: var(--section-bg);
    border-radius: 16px;
    color: var(--text-primary);
  }

  .empty-state p {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .empty-state small {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    .subtitle {
      font-size: 1rem;
      margin: -1rem 0 1.5rem 0;
    }

    .filters {
      flex-direction: column;
      align-items: stretch;
    }

    .filter-group select,
    .filter-group input {
      width: 100%;
    }
  }
</style>
