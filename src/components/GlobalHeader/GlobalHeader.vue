<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';
import { useUserStore } from '@/stores/user';
import { NButton, NSwitch, NPageHeader } from 'naive-ui'
import { computed } from 'vue';

const userStore = useUserStore()
const isAuthenticated = computed(() => userStore.isAuthenticated)
const theme = useThemeStore()
</script>

<template>
  <NPageHeader title="Climb Festival">
    <template #avatar>
      <CarbonResult :color="theme.theme.common.primaryColor" class="w-6 h-6"/>
    </template>
    <template #extra>
      <div class="flex gap-3 items-center">
        <NButton v-if="isAuthenticated" @click="userStore.signOut">Sign out</NButton>
        <NSwitch :value="theme.isDarkTheme" @update:value="theme.onChangeTheme" class="ml-auto">
          <template #icon>
            <CarbonAsleepFilled v-if="theme.isDarkTheme"/>
            <CarbonSun v-else/>
          </template>
        </NSwitch>
      </div>
    </template>
  </NPageHeader>
</template>