import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { UserInfo, MenuInfo } from '@/types'
import req from '@/utils/request'

export const useUserStore = defineStore('user', () => {
  const welcome = ref('')
  const isShowLoginForm = ref(false)
  const info: UserInfo = reactive({
    user: '',
    email: '',
    role: '',
    avatar: '',
  })
  const menu: Array<MenuInfo> = reactive([
    {
      name: '封面',
      route: '/',
      index: '/',
    },
    {
      name: '文章',
      route: '/posts',
      index: '/posts',
    },
    {
      name: '归档',
      route: '/archived',
      index: '/archived',
    },
    // {
    //   name: 'Chat',
    //   route: '/chat',
    //   index: '/chat',
    // },
  ])
  let timer: number = 0
  const getWelcome = () => {
    let h = new Date().getHours()
    let w = ''
    if (h > 5 && h <= 12) {
      w = '上午好，'
    } else if (h > 12 && h <= 19) {
      w = '下午好，'
    } else if (h > 19 && h <= 23) {
      w = '晚上好，'
    } else {
      w = '夜深了，'
    }
    welcome.value = w
    timer = setTimeout(
      getWelcome, (60 - new Date().getMinutes()) * 60000)
    getStatus()
  }
  getWelcome()
  async function getStatus() {
    try {
      let response = await req.request({
        url: 'auth/status', method: 'get'
      })
      if (response.status == 200) {
        info.user = response.data.user
        info.email = response.data.email
        info.role = response.data.role
        if (info.role === 'Admin') {
        } else if (info.role === 'CommonUser') {
        } else {
        }
      } else {
        info.user = ''
        info.email = ''
        info.role = ''
        info.avatar = ''
      }
    } catch (e) {
      info.user = ''
      info.email = ''
      info.role = ''
      info.avatar = ''
    }
  }
  return { info, menu, welcome, getStatus, isShowLoginForm }
})
