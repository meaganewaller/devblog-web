import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', () => {
    const store = reactive({ category: '', tags: [] as Array<string> })
    return { store }
})
