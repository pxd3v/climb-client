<template>
  <GlobalHeader />
  <div class="mt-4 flex-1">
    <slot />
  </div>
</template>
<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader/GlobalHeader.vue'
</script>