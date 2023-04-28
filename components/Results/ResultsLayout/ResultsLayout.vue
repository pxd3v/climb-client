<template>
  <div class="flex flex-col flex-1 gap-3" v-if="eventStore.currentEvent">
    <ResultsFilters :event-id="props.eventId"/>
    <ResultsTable class="overflow-scroll" :event-id="props.eventId" />
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

watch(() => eventStore.currentEvent, () => {
  if(eventStore.currentEvent) return
  eventStore.fetchEvent(props.eventId).then(() => {
    eventStore.setCurrentEvent(props.eventId)
  })
}, { immediate: true, deep: true })

watch(() => props.eventId, async () => {
  if(!props.eventId) return
  resultStore.fetchResult(props.eventId)
}, { immediate: true })
</script>
