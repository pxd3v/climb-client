<template>
  <div class="flex gap-3">
    <ResultsCategoryFilter v-model="filters.category" />
    <ResultsGenderFilter v-model="filters.gender" />
    <ResultsAgeFilter v-model="filters.age" />
  </div>
</template>

<script setup lang="ts">
import ResultsCategoryFilter from './ResultsCategoryFilter.vue'
import ResultsGenderFilter from './ResultsGenderFilter.vue'
import ResultsAgeFilter from './ResultsAgeFilter.vue'
import debounce from 'lodash/debounce'
import { ResultFilters } from '~~/composables/result'

const resultStore = useResultStore()
const eventStore = useEventStore()
const filters = ref<ResultFilters>({
  category: 'all',
  gender: 'all',
  age: [0, 100]
})

const intervalId = ref<null | number>(null)
const fetchFilteredResult = debounce((eventId: string, filters: ResultFilters) => {
  resultStore.fetchResult(eventId, filters)
}, 300)

watch(
  () => ({ eventId: eventStore.currentEventId, filters }),
  (newValue) => {
    if(!newValue.eventId) return
    fetchFilteredResult(newValue.eventId, newValue.filters.value)
    createScoreRefresh()
  },
  { deep: true }
)

function deleteScoreRefresh() {
  if(intervalId.value) {
    clearInterval(intervalId.value)
  }
}

function createScoreRefresh() {
  deleteScoreRefresh()

  intervalId.value = setInterval(function () {
    if(!eventStore.currentEventId) return
    fetchFilteredResult(eventStore.currentEventId, filters.value)
  }, 60000 * 5);
}

onMounted(() => {
  createScoreRefresh()
})

onBeforeUnmount(() => {
  deleteScoreRefresh()
})
</script>
