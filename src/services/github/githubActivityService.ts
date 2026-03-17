import { githubFallback, type GitHubActivityFallback } from "@/data/github/githubFallback";

interface GitHubRepositoryResponse {
  name: string;
  html_url: string;
  description: string | null;
  updated_at: string;
  fork: boolean;
}

const username = githubFallback.username;
const repositoryApiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`;

export const getGitHubActivity = async (): Promise<GitHubActivityFallback> => {
  try {
    const response = await fetch(repositoryApiUrl, {
      headers: {
        Accept: "application/vnd.github+json"
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const repositories = (await response.json()) as GitHubRepositoryResponse[];
    const visibleRepositories = repositories
      .filter((repository) => !repository.fork)
      .slice(0, 4)
      .map((repository) => ({
        name: repository.name,
        url: repository.html_url,
        description: repository.description ?? "",
        updatedAt: repository.updated_at
      }));

    return {
      username,
      repositories: visibleRepositories,
      contributionGraphUrl: githubFallback.contributionGraphUrl,
      lastFetchedAt: new Date().toISOString(),
      fetchStatus: "success",
      fallbackMessage: null
    };
  } catch {
    return {
      ...githubFallback,
      fetchStatus: "error",
      lastFetchedAt: new Date().toISOString()
    };
  }
};
