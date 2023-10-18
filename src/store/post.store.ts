import { create } from "zustand"
import { Post } from "@/types"

interface DetailStore {
  post?: Post
  setPost: (post: Post | undefined) => void
}

export const useDetailStore =  create<DetailStore>((set) => ({
  post: undefined,
  setPost: (post) => set({ post }),
}))
