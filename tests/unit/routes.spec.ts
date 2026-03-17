import { describe, expect, it } from "vitest";
import router from "@/router";

describe("routes", () => {
  it("registers bilingual home and about routes", () => {
    const paths = router.getRoutes().map((route) => route.path);
    expect(paths).toContain("/");
    expect(paths).toContain("/en");
    expect(paths).toContain("/about");
    expect(paths).toContain("/en/about");
  });
});
