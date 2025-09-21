
<!-- svelte-ignore export_let_unused -->
<script>
  import { Star, Code, ExternalLink } from "lucide-svelte";
  
  export let repo = {};
  export let position = "inner"; // "top-left", "top-right", "bottom-left", "bottom-right", "inner"

  $: repoName = repo?.full_name || "Unnamed Repo";
  $: repoUrl = repo?.html_url || "#";
  $: repoDescription = repo?.description || "No description";
  $: starCount = repo?.stargazers_count ?? 0;
  $: language = repo?.language || "N/A";
</script>

<div class="card">
  <a href={repoUrl} target="_blank">
    <ExternalLink class="external-link-icon" size={16} />
    {repoName}
  </a>
  <p>{repoDescription}</p>
  <div class="meta">
    <span class="meta-item">
      <Star class="meta-icon" size={14} />
      {starCount}
    </span>
    <span class="meta-item">
      <Code class="meta-icon" size={14} />
      {language}
    </span>
  </div>
</div>

<style>
  .card {
    background: rgba(255,255,255,0.95);
    border: 2px solid rgba(255,255,255,0.7);
    padding: 1.25rem 1.5rem;
    margin: 1rem 0.5rem;
    color: #1e3a8a;
    transition: border-color 0.2s, background 0.2s;
    position: relative;
    overflow: hidden;
    border-radius: 18px;
  }
  .card:hover {
    border-color: #00bfff;
    background: #fff;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    color: #003648;
    font-size: 1.1rem;
    transition: color 0.2s;
    display: flex;
    align-items: center;
  }
  a:hover {
    text-decoration: underline;
    color: #1e3a8a;
  }
  p {
    margin: 0.5rem 0 0.75rem 0;
    font-size: 1rem;
    color: #1e3a8a;
    opacity: 0.85;
  }
  .meta {
    font-size: 0.95rem;
    color: #005f7f;
    font-weight: 500;
    letter-spacing: 0.01em;
  }
</style>
