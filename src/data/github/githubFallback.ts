export interface GitHubRepository {
  name: string;
  url: string;
  description: string;
  updatedAt: string;
}

export interface GitHubActivityFallback {
  username: string;
  repositories: GitHubRepository[];
  contributionGraphUrl: string;
  lastFetchedAt: string;
  fetchStatus: "success" | "fallback" | "error";
  fallbackMessage: string | null;
}

export const githubFallback: GitHubActivityFallback = {
  username: "JJDing-Louis",
  repositories: [],
  contributionGraphUrl: "https://ghchart.rshah.org/JJDing-Louis",
  lastFetchedAt: "",
  fetchStatus: "fallback",
  fallbackMessage: "GitHub 資料暫時無法取得，請稍後再試。"
};
