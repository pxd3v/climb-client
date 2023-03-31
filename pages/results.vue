<template>
  <main class="h-[80%] flex">
    <ResultsLayout v-if="eventStore.currentEventId" :event-id="eventStore.currentEventId"/>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Dyno - Resultados',
})

definePageMeta({
  layout: "authenticated",
}); 

const eventStore = useEventStore()
</script>
