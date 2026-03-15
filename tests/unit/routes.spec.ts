import { describe, expect, it } from "vitest";
import router from "@/router";

describe("routes", () => {
  it("registers bilingual home routes", () => {
    const paths = router.getRoutes().map((route) => route.path);
    expect(paths).toContain("/");
    expect(paths).toContain("/en");
  });
});
