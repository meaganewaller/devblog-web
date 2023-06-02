<template>
  <div class="max-w-md m-auto py-10">
    <section v-if="errored">
      <p class="text-red">Error loading posts</p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>
      <div
        v-else
        v-for="post in posts"
        class="post"
      >
        {{ post.title }}
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import axios from 'axios'

  interface Post {
    title: string;
  }

  export default defineComponent({
    name: 'BlogPost',
    data() {
      return {
        loading: true,
        errored: false,
        posts: [] as Post[],
        fetchingPosts: false,
      }
    },
    methods: {
      fetchPosts() {
        this.loading = true
        axios
          .get<Post[]>('https://localhost:5000/api/v1/posts')
          .then((response) => {
            this.errored = false
            this.posts = response.data
          }))
          .catch((error) => {
            this.errored = true
          })
          .finally(() => {
            this.loading = false
          })
      },
      loadMorePosts() {
        this.fetchingPosts = true
        axios
          .get<Post[]>('https://localhost:5000/api/v1/posts')
          .then((response) => {
            this.errored = false
            this.posts.push(...(response.data)
          }))
          .catch((error) => {
            this.errored = true
          })
          .finally(function() {
            this.fetchingPosts = false
          })
      }
    },

    mounted() {
      this.fetchPosts()
    }
  })
</script>
