<template>
  <main class="flex h-full">
    <ResultsLayout v-if="eventId" :event-id="eventId" />
  </main>
</template>

<script setup lang="ts">
import { NText } from 'naive-ui'
useHead({
  title: 'Dyno - Resultados',
})

const route = useRoute()
const eventId = computed(() => route.params['eventId'] as string) 
</script>
