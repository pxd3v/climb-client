<template>
  <NConfigProvider :theme="theme.theme" class="h-screen w-screen">
    <NNotificationProvider>
      <div
        class="rounded-none w-full flex flex-col h-full overflow-hidden p-3"
        :style="`background: ${theme.theme.common.baseColor}`"
      >
        <GlobalHeader />
        <NuxtPage class="mt-4 flex-1" />
      </div>
    </NNotificationProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { NConfigProvider, NNotificationProvider } from 'naive-ui'
import GlobalHeader from './components/GlobalHeader/GlobalHeader.vue'

const theme = useThemeStore()
</script>

