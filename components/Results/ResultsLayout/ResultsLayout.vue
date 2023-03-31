<template>
  <div class="flex flex-col flex-1 gap-3">
    <ResultsFilters :event-id="eventId" />
    <ResultsTable class="overflow-scroll" />
  </div>
</template>

<script setup lang="ts">
import ResultsFilters from '@/components/Results/ResultsFilters/ResultsFilters.vue'
import ResultsTable from '@/components/Results/ResultsTable/ResultsTable.vue'


type ResultsLayoutProps = {
  eventId: string;
}

const props = defineProps<ResultsLayoutProps>()
const resultStore = useResultStore()

resultStore.fetchResult(props.eventId)
</script>
