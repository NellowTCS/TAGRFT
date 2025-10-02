
<!-- svelte-ignore export_let_unused -->
<script>
  import { Star, Code, ExternalLink, GitFork, Eye } from "lucide-svelte";
  
  export let repo = {};
  export let position = "inner"; // "top-left", "top-right", "bottom-left", "bottom-right", "inner"

  $: repoName = repo?.full_name || "Unnamed Repo";
  $: repoUrl = repo?.html_url || "#";
  $: repoDescription = repo?.description || "No description";
  $: starCount = repo?.stargazers_count ?? 0;
  $: forkCount = repo?.forks_count ?? 0;
  $: watchersCount = repo?.watchers_count ?? 0;
  $: language = repo?.language || "N/A";
  $: updatedAt = repo?.updated_at ? new Date(repo.updated_at).toLocaleDateString() : "Unknown";
  
  function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  }
</script>

<article class="card">
  <a href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label="View {repoName} on GitHub">
    <ExternalLink class="external-link-icon" size={16} aria-hidden="true" />
    {repoName}
  </a>
  <p class="description">{repoDescription}</p>
  <div class="meta">
    <span class="meta-item" title="{starCount} stars">
      <Star class="meta-icon" size={14} aria-hidden="true" />
      <span aria-label="{starCount} stars">{formatNumber(starCount)}</span>
    </span>
    <span class="meta-item" title="{forkCount} forks">
      <GitFork class="meta-icon" size={14} aria-hidden="true" />
      <span aria-label="{forkCount} forks">{formatNumber(forkCount)}</span>
    </span>
    <span class="meta-item" title="Language: {language}">
      <Code class="meta-icon" size={14} aria-hidden="true" />
      <span>{language}</span>
    </span>
  </div>
  <div class="footer">
    <small>Updated: {updatedAt}</small>
  </div>
</article>

<style>
  .card {
    background: var(--card-bg);
    border: 2px solid var(--card-border);
    padding: 1.25rem 1.5rem;
    margin: 1rem 0.5rem;
    color: var(--card-text);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    border-radius: 18px;
    min-width: 300px;
    max-width: 450px;
    flex: 1 1 300px;
  }
  
  .card:hover {
    border-color: var(--accent-color);
    background: var(--input-bg);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 191, 255, 0.2);
  }
  
  a {
    text-decoration: none;
    font-weight: bold;
    color: var(--card-text);
    font-size: 1.1rem;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }
  
  a:hover {
    color: var(--accent-color);
  }
  
  a:focus {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
    border-radius: 4px;
  }
  
  .description {
    margin: 0 0 1rem 0;
    font-size: 0.95rem;
    color: var(--card-text);
    opacity: 0.85;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-clamp: 3;
    overflow: hidden;
  }
  
  .meta {
    display: flex;
    gap: 1.25rem;
    font-size: 0.9rem;
    color: var(--card-text);
    font-weight: 500;
    letter-spacing: 0.01em;
    flex-wrap: wrap;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--input-border);
    opacity: 0.8;
  }
  
  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  
  .card :global(.meta-icon) {
    opacity: 0.7;
  }
  
  .card :global(.external-link-icon) {
    opacity: 0.6;
    transition: opacity 0.2s;
    flex-shrink: 0;
  }
  
  a:hover :global(.external-link-icon) {
    opacity: 1;
  }
  
  .footer {
    margin-top: 0.75rem;
    font-size: 0.8rem;
    color: var(--card-text);
    opacity: 0.6;
  }
  
  @media (max-width: 768px) {
    .card {
      min-width: 100%;
      margin: 0.75rem 0;
    }
    
    .meta {
      gap: 0.75rem;
    }
  }
</style>
