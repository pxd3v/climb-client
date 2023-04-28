<script setup lang="ts">
import { NButton, NSwitch, NPageHeader } from 'naive-ui'
import { RouterLink } from 'vue-router'
const userStore = useUserStore()
const eventStore = useEventStore()
const isAuthenticated = computed(() => userStore.isAuthenticated)
const theme = useThemeStore()
</script>

<template>
  <NPageHeader>
    <template #avatar>
      <Icon name="carbon:result" :color="theme.theme.common.primaryColor" class="w-6 h-6" />
    </template>
    <template #title>
      <RouterLink to="/results">Dyno Projects</RouterLink>
    </template>
    <template #extra>
      <div class="flex gap-3 items-center">
        <NButton v-if="isAuthenticated" @click="userStore.signOut">Sair</NButton>
        <NSwitch :value="theme.isDarkTheme" @update:value="theme.onChangeTheme" class="ml-auto">
          <template #icon>
            <Icon name="carbon:asleep-filled" v-if="theme.isDarkTheme" />
            <Icon name="carbon:sun" v-else />
          </template>
        </NSwitch>
      </div>
    </template>
    <div class="flex flex-col gap-3">
      <EventSelect v-if="userStore.isAuthenticated" v-model="eventStore.currentEventId" class="w-full" />
      <div class="flex gap-3" v-if="isAuthenticated">
        <RouterLink to="/results" v-slot="{ navigate, isActive }">
          <NButton @click="navigate" :secondary="!isActive">Resultados</NButton>
        </RouterLink>
        <RouterLink to="/create-entry" v-slot="{ navigate, isActive }" v-if="!eventStore.currentEvent?.ended">
          <NButton @click="navigate" :secondary="!isActive">Registrar Entrada</NButton>
        </RouterLink>
        <RouterLink to="/entries" v-slot="{ navigate, isActive }">
          <NButton @click="navigate" :secondary="!isActive">Entradas</NButton>
        </RouterLink>
      </div>
    </div>

  </NPageHeader>
</template>
