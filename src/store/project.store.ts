import { create } from "zustand";

import { Project } from "@/types";

interface DetailStore {
  project?: Project;
  setProject: (project: Project | undefined) => void;
}

export const useDetailStore = create<DetailStore>((set) => ({
  project: undefined,
  setProject: (project) => set({ project }),
}));
