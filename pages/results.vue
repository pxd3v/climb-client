<script setup lang="ts">
import ResultsFilters from '@/components/Results/ResultsFilters/ResultsFilters.vue'
import ResultsTable from '@/components/Results/ResultsTable/ResultsTable.vue'
import EventSelect from '@/components/EventSelect/EventSelect.vue'

useHead({
  title: 'Dyno - Resultados',
})

const currentEventId = ref<string | undefined>()
</script>

<template>
  <main class="flex flex-col h-[80%] gap-3">
    <EventSelect v-model="currentEventId" />
    <ResultsFilters v-if="currentEventId" :event-id="currentEventId" />
    <ResultsTable class="overflow-scroll" />
  </main>
</template>
