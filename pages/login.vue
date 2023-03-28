<script setup lang="ts">
import { NButton, NCard, NInput, NText } from 'naive-ui'
import { useRouter } from 'vue-router';

useHead({
  title: 'Dyno - Login',
})

const router = useRouter()
const userStore = useUserStore()
const email = ref('')
const password = ref('')
function onLogin () {
  userStore.signIn({ email: email.value, password: password.value })
}
onMounted(() => {
  if(!userStore.user?.email) return
  router.push({ name: 'index' })
})
</script>

<template>
  <main class="flex items-center justify-center">
    <NCard size="medium" class="max-w-[500px]" embedded title="Login" content-style="display: flex; flex-direction: column; gap: 16px;">
      <NText tag="label" >
        Email
        <NInput v-model:value="email" class="mt-1" placeholder="Digite seu email"/>
      </NText>
      <NText tag="label">
        Password
        <NInput v-model:value="password" class="mt-1" type="password" placeholder="Digite sua senha"/>
      </NText>
      <NButton @click="onLogin">
        Login
      </NButton>
    </NCard>
  </main>
</template>
