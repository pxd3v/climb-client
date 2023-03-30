<template>
  <main class="flex flex-col h-[80%] gap-3">
    <ResultsFilters v-if="eventStore.currentEventId" :event-id="eventStore.currentEventId" />
    <ResultsTable class="overflow-scroll" />
  </main>
</template>

<script setup lang="ts">
import ResultsFilters from '@/components/Results/ResultsFilters/ResultsFilters.vue'
import ResultsTable from '@/components/Results/ResultsTable/ResultsTable.vue'

useHead({
  title: 'Dyno - Resultados',
})
const eventStore = useEventStore()
</script>
