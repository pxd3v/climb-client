<template>
  <div class="flex flex-col flex-1 gap-3">
    <ResultsFilters v-if="eventStore.currentEvent" />
    <ResultsTable class="overflow-scroll" v-if="eventStore.currentEvent" />
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
const eventStore = useEventStore()

if(!eventStore.currentEvent) {
  eventStore.fetchEvent(props.eventId).then(() => {
    eventStore.setCurrentEvent(props.eventId)
  })
}

resultStore.fetchResult(props.eventId)
</script>
