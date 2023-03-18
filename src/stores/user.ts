import { ref, computed, watch, inject, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router';

export type User = { email: string , password: string }
export type Credentials = { email: string , password: string }

export const useUserStore = defineStore('user', () => {
  const axios: any = inject('axios')
  const router = useRouter()
  const route = useRoute()
  const user = ref<User | null>(null)
  const token = ref<string>('')

  async function signIn (credentials: Credentials) {
    const response = await axios.post('/auth/login', { 
      ...credentials
    }).catch((err: Error) => {
      console.error(err)
    })
    const accessToken = response?.data?.access_token
    if(!accessToken) return
    token.value = accessToken
  }

  function signOut () {
    token.value = ''
    user.value = null
  }

  const isAuthenticated = computed(() => !!token.value)

  watch(token, async (newToken) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
    localStorage.setItem('session_climb', newToken)
    if(!newToken) return router.push({ name: 'Login' })
    fetchUser()
  })

  onMounted(() => {
    const currentSessionToken = localStorage.getItem('session_climb')
    if(!currentSessionToken) return router.push({ name: 'Login' })
    token.value = currentSessionToken
  })

  async function fetchUser () {
    const response = await axios.get('/user').catch((err: Error) => {
      console.error(err)
    })
    if(!response.data.id) return
    user.value = { ...response.data }
    if(route.name !== 'Login') return
    router.push({ name: 'Dashboard' })
  }

  return { user, signIn, signOut, isAuthenticated }
})
