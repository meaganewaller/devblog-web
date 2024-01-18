import { vi } from "vitest";
import actualCreate from "zustand";

const create = vi.fn((createState) => {
  const store = actualCreate(createState);
  return store;
});

export default create;
