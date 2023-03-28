<script setup lang="ts">
import { onMounted, ref, watch, onBeforeUnmount } from 'vue'
import ResultsCategoryFilter from './ResultsCategoryFilter.vue'
import ResultsGenderFilter from './ResultsGenderFilter.vue'
import ResultsAgeFilter from './ResultsAgeFilter.vue'
import { debounce } from 'lodash'
import { ResultFilters } from '~~/composables/result'

type ResultsFiltersProps = {
  eventId: string
}

const props = defineProps<ResultsFiltersProps>()
const resultStore = useResultStore()
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
  () => ({ eventId: props.eventId, filters }),
  (newValue) => {
    fetchFilteredResult(newValue.eventId, newValue.filters.value)
    createScoreRefresh()
  },
  { deep: true, immediate: true }
)

function deleteScoreRefresh() {
  if(intervalId.value) {
    clearInterval(intervalId.value)
  }
}

function createScoreRefresh() {
  deleteScoreRefresh()

  intervalId.value = setInterval(function () {
    fetchFilteredResult(props.eventId, filters.value)
  }, 30000);
}

onMounted(() => {
  createScoreRefresh()
})

onBeforeUnmount(() => {
  deleteScoreRefresh()
})
</script>

<template>
  <div class="flex gap-3">
    <ResultsCategoryFilter v-model="filters.category" />
    <ResultsGenderFilter v-model="filters.gender" />
    <ResultsAgeFilter v-model="filters.age" />
  </div>
</template>
