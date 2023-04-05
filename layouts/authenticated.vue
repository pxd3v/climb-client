<template>
  <GlobalHeader />
  <div class="mt-3 flex-1 max-h-full overflow-hidden">
    <slot />
  </div>
</template>
<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader/GlobalHeader.vue'
</script>