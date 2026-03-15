import { describe, expect, it } from "vitest";
import { legacyRedirects } from "@/data/redirects/legacyRedirects";

describe("redirect mappings", () => {
  it("contains at least one legacy redirect", () => {
    expect(legacyRedirects.length).toBeGreaterThan(0);
  });
});
