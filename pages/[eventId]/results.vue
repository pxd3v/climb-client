<template>
  <main class="h-[80%] flex">
    <ResultsLayout v-if="eventId" :event-id="eventId"/>
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
