import { defineStore } from 'pinia'
import { api } from '@/http/api'

export const useBlogStore = defineStore({
  id: "blog",
  state: () => ({
    posts: [],
  }),
  getters: {},
  actions: {
    getPosts() {
      return api
        .get("/posts")
        .then((posts) => (this.posts = posts.data))
    },
  },
})
