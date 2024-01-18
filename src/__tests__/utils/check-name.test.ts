import { describe, expect, it } from "vitest";

import { checkName } from "../../utils/check-name";

describe("checkName", () => {
  it("returns true when name is valid", () => {
    expect(checkName("John Doe")).toBe(true);
  });

  it("returns false when name is empty", () => {
    expect(checkName("")).toBe(false);
  });
});
