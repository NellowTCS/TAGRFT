# TAGRFT - There's A GitHub Repo For That™

A search engine for finding that one weirdly specific GitHub repository you need!

## Features

- **Advanced Search** - Search millions of GitHub repositories with precision
- **Random Discovery** - "I'm Feeling Lucky" button for serendipitous (aka ) finds
- **Smart Filters** - Sort by stars, forks, or recent updates; filter by language
- **Search History** - Quick access to your recent searches
- **Infinite Scroll** - Load more results seamlessly
- **Beautiful UI** - Modern design with curvomorphic styling
- **Performance** - Fast, responsive, and optimized
- **Accessible** - WCAG compliant with ARIA labels and keyboard navigation
- **Mobile-Friendly** - Fully responsive design
- **Local Storage** - Saves your token and search history

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Navigate to the Build directory
cd Build

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## GitHub Token (Optional)

While not required, using a GitHub Personal Access Token increases your rate limit from 60 to 5,000 requests per hour.

1. Go to [GitHub Token Settings](https://github.com/settings/tokens/new?scopes=repo)
2. Generate a new token with `repo` scope
3. Paste it into the "Optional token" field
4. Your token is stored securely in localStorage

## Dependencies

- **Svelte 5** - Reactive UI framework
- **Vite** - Fast build tool
- **Lucide Icons** - Beautiful icon set
- **GitHub API** - Repository data source

## Usage

1. Enter your search query (e.g., "machine learning", "react components")
2. Optionally add filters (sort by stars/forks, filter by language)
3. Click "Search" or press Enter
4. Browse results with detailed information
5. Click "Load More" to see additional results
6. Use "I'm Feeling Lucky" for a random result

## Features in Detail

### Search History
Your last 5 searches are automatically saved and displayed for quick access.

### Filters
- **Sort by**: Stars, Forks, or Recently Updated
- **Language**: Filter repositories by programming language

### Rate Limiting
The app intelligently handles GitHub API rate limits and provides helpful error messages.

### Pagination
Results are loaded 30 at a time with a "Load More" button for seamless browsing.

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Give a ⭐️ if you like this project!

---