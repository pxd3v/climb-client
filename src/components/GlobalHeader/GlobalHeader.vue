<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';
import { useUserStore } from '@/stores/user';
import { NButton, NSwitch, NPageHeader } from 'naive-ui'
import { computed, h, ref } from 'vue';
import { RouterLink } from 'vue-router'
const userStore = useUserStore()
const isAuthenticated = computed(() => userStore.isAuthenticated)
const theme = useThemeStore()

const activeKey = ref<string>('dashboard')

</script>

<template>
  <NPageHeader>
    <template #avatar>
      <CarbonResult :color="theme.theme.common.primaryColor" class="w-6 h-6"/>
    </template>
    <template #title>
      <RouterLink :to="{ name: 'Dashboard'}">
        Climb Festival
      </RouterLink>
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
    <div class="flex gap-3">
      <RouterLink :to="{ name: 'Dashboard' }" v-slot="{ navigate, isActive }">
        <NButton @click="navigate" :secondary="!isActive">Dashboard</NButton>
      </RouterLink>
      <RouterLink :to="{ name: 'Results' }" v-slot="{ navigate, isActive }">
        <NButton @click="navigate" :secondary="!isActive">Resultados</NButton>
      </RouterLink>
      <RouterLink :to="{ name: 'Entries' }" v-slot="{ navigate, isActive }">
        <NButton @click="navigate" :secondary="!isActive">Registrar tentativas</NButton>
      </RouterLink>
    </div>
  </NPageHeader>
</template>