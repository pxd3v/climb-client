<template>
  <NConfigProvider :theme="theme.theme" class="h-screen w-screen">
      <NNotificationProvider>
        <div
          class="rounded-none w-full flex flex-col h-full overflow-hidden p-3"
          :style="`background: ${theme.theme.common.baseColor}`"
        >
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </div>
      </NNotificationProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { NConfigProvider, NNotificationProvider, NThemeEditor } from 'naive-ui'
const theme = useThemeStore()
</script>

