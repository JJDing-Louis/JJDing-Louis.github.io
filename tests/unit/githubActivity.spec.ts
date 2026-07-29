import { describe, expect, it } from "vitest";
import { getGitHubActivity } from "@/services/github/githubActivityService";

describe("github activity service", () => {
  it("returns fallback-safe payload", async () => {
    const result = await getGitHubActivity();
    expect(["fallback", "error", "success"]).toContain(result.fetchStatus);
    expect(result.contributionGraphUrl.length).toBeGreaterThan(0);
  });
});
