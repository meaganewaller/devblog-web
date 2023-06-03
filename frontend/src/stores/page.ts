import { defineStore } from 'pinia'

export const usePageStore = defineStore({
  id: "page",
  state: () => ({
    title: "welcome",
    appTitle: "meagan waller | a blog about software development",
    pageTitle: "meagan waller | a blog about software development",
    postsTitle: "posts",
  }),
  actions: {},
  getter: {},
})
