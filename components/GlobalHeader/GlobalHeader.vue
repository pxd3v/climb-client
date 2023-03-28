<script setup lang="ts">
import { NButton, NSwitch, NPageHeader } from 'naive-ui'
import { RouterLink } from 'vue-router'
const userStore = useUserStore()
const isAuthenticated = computed(() => userStore.isAuthenticated)
const theme = useThemeStore()
</script>

<template>
  <NPageHeader>
    <template #avatar>
      <Icon name="carbon:result" :color="theme.theme.common.primaryColor" class="w-6 h-6" />
    </template>
    <template #title>
      <RouterLink to="/"> Climb Festival </RouterLink>
    </template>
    <template #extra>
      <div class="flex gap-3 items-center">
        <NButton v-if="isAuthenticated" @click="userStore.signOut">Sign out</NButton>
        <NSwitch :value="theme.isDarkTheme" @update:value="theme.onChangeTheme" class="ml-auto">
          <template #icon>
            <Icon name="carbon:asleep-filled" v-if="theme.isDarkTheme" />
            <Icon name="carbon:sun" v-else />
          </template>
        </NSwitch>
      </div>
    </template>
    <div class="flex gap-3" v-if="isAuthenticated">
      <RouterLink to="/" v-slot="{ navigate, isActive }">
        <NButton @click="navigate" :secondary="!isActive">Dashboard</NButton>
      </RouterLink>
      <RouterLink to="/results" v-slot="{ navigate, isActive }">
        <NButton @click="navigate" :secondary="!isActive">Resultados</NButton>
      </RouterLink>
      <RouterLink to="/entries" v-slot="{ navigate, isActive }">
        <NButton @click="navigate" :secondary="!isActive">Registrar tentativas</NButton>
      </RouterLink>
    </div>
  </NPageHeader>
</template>
