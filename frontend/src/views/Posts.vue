<script lang="ts" setup>
  import req from '@/utils/request'
  import { nextTick, onMounted, onUnmounted, reactive, watch } from 'vue'
  import type { PostList } from '@/types'
  import { useRoute, useRouter, type RouteRecordName } from 'vue-router'
  import { parseDateTime } from 'markdown-to-txt'
  import { Plus, Calendar, TakeawayBox } from '@element-plus/icons-vue'
  import { useUserStore } from '@/stores/UserStore'
  import { usePostStore } from '@/stores/PostStore'

  const userStore = useUserStore()
  const route = useRoute()
  const router = useRouter()
  const postStore = usePostStore()

  const data = reactive({
    posts: [] as Array<PostList>,
    totalCount: 0,
    currentPage: 1,
    totalPages: 1,
    pageSize: 10,
    pageNumber: 1,
    isLoading: true,
  })

  const fetchData = async () => {
    if (route.name != 'posts') return
    postStore.store.category = route.query.category ? route.query.category as string : ''
    postStore.store.tags = route.query.tag ? [route.query.tag as string] : []
    data.isLoading = true
    if (route.query.page && route.query.page != '1') {
      data.pageNumber = parseInt(route.query.page.toString())
    }
    let response = await req.request({
      url: 'posts',
      method: 'get',
      params: {
        tag: route.query.tag,
        category: route.query.category,
        keyword: route.query.keyword,
        pageSize: data.pageSize,
        pageNumber: route.query.page ?? 1
      }
    })
    if (response.status == 200) {
      data.posts = response.data
      let a = JSON.parse(response.headers['x-pagination'] as string)
      data.totalCount = a.totalCount
      data.currentPage = a.currentPage
      data.totalPages = a.totalPages
      data.isLoading = false
      nextTick(() => { handleScroll() })
    }
  }

  const changePage = () => {
    if (!route.query.page && data.pageNumber == 1) return
    router.replace({ name: route.name as RouteRecordName | undefined, query: { ...route.query, page: data.pageNumber } })
  }

  watch(() => route.query, fetchData)

  const handleScroll = () => {
    // const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    const pageBottom = window.innerHeight// + scrollTop
    document.querySelectorAll('.post.visible').forEach(function (e) {
      let element = e as HTMLElement
      if (element.getBoundingClientRect().top >= pageBottom) {
        element.classList.remove('visible')
        for (let i = 0; i < element.classList.length; i++) {
          let className = element.classList[i]
          if (className.startsWith('delay-'))
            element.classList.remove(className)
        }
        element.classList.add('hidden')
      }
    })
    let i = 0
    document.querySelectorAll('.post.hidden').forEach(function (e) {
      let element = e as HTMLElement
      if (element.getBoundingClientRect().top < pageBottom) {
        element.classList.remove('hidden')
        element.classList.add('visible')
        element.classList.add('delay-' + i)
        i++
      }
    })
  }

  let timer : number|null = null
  const wrapScroll = () => {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(handleScroll, 20)
  }

  watch(() => userStore.info.user, () => {
    nextTick(() => {
      handleScroll()
    })
  })

  let key = 1

  onMounted(() => {
      fetchData()
      window.addEventListener("scroll", wrapScroll, false)
      window.addEventListener("resize", handleScroll, false)
  })

  onUnmounted(() => {
      window.removeEventListener("scroll", wrapScroll, false)
      window.removeEventListener("resize", handleScroll, false)
  })
</script>

<template>
  <div v-loading="data.isLoading" class="wrapper">
    <div class="post-title">
      <h2 v-if="route.query.tag" class="color-success fw-600"> Tag: {{ route.query.tag }}</h2>
      <h2 v-else-if="route.query.category" class="color-primary fw-600"> Category: {{ route.query.category }}</h2>
      <h2 v-else-if="route.query.keyword" class="color-warning fw-600"> Search: {{ route.query.keyword }}</h2>
      <h2 v-else><span>Blog Posts</span></h2>
      <RouterLink v-if="userStore.info.role == 'Admin'" :to="{ name: 'createPost' }"><el-button type="primary"
                                                                                                   plain :icon="Plus">创建文章</el-button></RouterLink>
    </div>
    <div class="posts">
      <div v-for="post in data.posts" class="post hidden" :key="key++">
        <RouterLink class="post-link" :to="{name: 'postDetail', params: { id: post.id } }">{{ post.title }}</RouterLink>
        <br />
        <div class="post-meta">
          <span class="create-time"><el-icon><Calendar /></el-icon> {{ parseDateTime(post.publishedAt, true) }}</span>
          <router-link class="category" :to="{ name: 'post', query: { category: post.category } }"><el-icon><TakeawayBox /></el-icon> {{ post.category }}</router-link>
        </div>
        <p class="content">{{ markdownToTxt(post.content) }}</p>
      </div>
      <el-pagination style="margin-top:10px;" layout="total, prev, pager, next" :total="data.totalCount"
                                              v-model:currentPage="data.pageNumber" @update:current-page="changePage" />
    </div>
  </div>
</template>
