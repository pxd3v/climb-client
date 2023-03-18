<script setup lang="ts">
import { RouterView } from 'vue-router'
import { NConfigProvider, NNotificationProvider } from 'naive-ui'
import GlobalHeader from './components/GlobalHeader/GlobalHeader.vue'
import { useThemeStore } from './stores/theme'

const theme = useThemeStore()
</script>

<template>
  <NConfigProvider :theme="theme.theme" class="h-full w-full">
    <NNotificationProvider>
      <div
        class="rounded-none w-full flex flex-col h-full overflow-hidden p-3"
        :style="`background: ${theme.theme.common.baseColor}`"
      >
        <GlobalHeader />
        <RouterView class="mt-4 flex-1" />
      </div>
    </NNotificationProvider>
  </NConfigProvider>
</template>
