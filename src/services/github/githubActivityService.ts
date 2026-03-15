import { githubFallback, type GitHubActivityFallback } from "@/data/github/githubFallback";

export const getGitHubActivity = async (): Promise<GitHubActivityFallback> => {
  try {
    return {
      ...githubFallback,
      lastFetchedAt: new Date().toISOString(),
      fetchStatus: "fallback"
    };
  } catch {
    return {
      ...githubFallback,
      fetchStatus: "error",
      lastFetchedAt: new Date().toISOString()
    };
  }
};
