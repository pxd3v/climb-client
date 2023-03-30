import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

export type User = {
  email: string
  isAdmin: boolean
  id: number
  Referee: Array<{ id: number; eventId: number; userId: number }>
}
export type Credentials = { email: string; password: string }

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const route = useRoute()
  const user = ref<User | null>(null)
  const token = useCookie('dyno_session')

  async function signIn(credentials: Credentials) {
    const response = await useRequest<{ access_token: string }>('/auth/login', {
      method: 'POST',
      body: {
        ...credentials
      }
      })
      .catch((err: Error) => {
        console.error('@@error signing in', err)
      })
    if(!response) return
    const accessToken = response.access_token
    if (!accessToken) return
    token.value = accessToken
  }

  function signOut() {
    token.value = ''
    user.value = null
  }

  const isAuthenticated = computed(() => !!token.value)

  watch(token, async (newToken) => {
    if (!newToken) return router.push({ name: 'login' })
    fetchUser()
  }, { immediate: true })

  async function fetchUser() {
    const response = await useCustomFetch<User>('/user').catch((err: Error) => {
      console.error('@@error fetching user', err)
    })

    if(response && 'error' in response && response.error.value?.status === 401) {
      return signOut()
    }

    if (!response?.data.value?.id) return
    user.value = { ...response.data.value }
    if (route.name !== 'login') return
    router.push({ name: 'results' })
  }

  return { user, signIn, signOut, isAuthenticated }
})
