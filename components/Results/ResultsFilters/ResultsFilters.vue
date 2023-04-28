<template>
  <div class="flex flex-col gap-3">
    <div class="flex gap-3 items-end justify-center">
      <ResultsAgeFilter v-model="filters.age" />
    </div>
    <div class="flex gap-3 items-end">
      <ResultsCategoryFilter v-model="filters.category" />
      <ResultsGenderFilter v-model="filters.gender" />
      <NButton @click="reloadFilters">
        <Icon name="carbon:renew" />
      </NButton>
      <NButton @click="resetFilters">
        <Icon name="carbon:reset" />
      </NButton>
      <NButton @click="toggleDivisionFilters">
        <Icon name="carbon:pause" v-if="isDivisionFiltersOn"/>
        <Icon name="carbon:play" v-else/>
      </NButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'
import ResultsCategoryFilter from './ResultsCategoryFilter.vue'
import ResultsGenderFilter from './ResultsGenderFilter.vue'
import ResultsAgeFilter from './ResultsAgeFilter.vue'
import debounce from 'lodash/debounce'
import { ResultFilters } from '~~/composables/result'

const defaultFilters: ResultFilters = {
  category: 'all',
  gender: 'all',
  age: [0, 100]
}

const divisionFilters: Array<ResultFilters> = [
  {
    category: 'pro',
    gender: 'Male',
    age: [0, 100],
  },
  {
    category: 'pro',
    gender: 'Female',
    age: [0, 100],
  },
  {
    category: 'amateur',
    gender: 'Male',
    age: [0, 100],
  },
  {
    category: 'amateur',
    gender: 'Female',
    age: [0, 100],
  },
  {
    category: 'kids',
    gender: 'all',
    age: [0, 100],
  },
  {...defaultFilters}
]

const resultStore = useResultStore()
const eventStore = useEventStore()
const filters = ref<ResultFilters>({...defaultFilters})
const isDivisionFiltersOn = ref(false)
const currentDivisionIndex = ref(0)
const divisionIntervalId = ref<null | number>(null)

const fetchFilteredResult = debounce((eventId: string, filters: ResultFilters) => {
  resultStore.fetchResult(eventId, filters)
}, 300)

watch(
  () => ({ eventId: eventStore.currentEventId, filters }),
  (newValue) => {
    if(!newValue.eventId) return
    fetchFilteredResult(newValue.eventId, newValue.filters.value)
  },
  { deep: true }
)

function reloadFilters() {
  isDivisionFiltersOn.value = false
  if(eventStore.currentEventId) {
    fetchFilteredResult(eventStore.currentEventId, filters.value)
  }
}

function resetFilters() {
  isDivisionFiltersOn.value = false
  filters.value = {...defaultFilters}
}

function toggleDivisionFilters() {
  isDivisionFiltersOn.value = !isDivisionFiltersOn.value
}

function deleteScoreRefresh() {
  if(divisionIntervalId.value) {
    clearInterval(divisionIntervalId.value)
  }
}

watch(isDivisionFiltersOn, (newValue) => {
  if(!newValue) {
    return deleteScoreRefresh()
  }

  divisionIntervalId.value = setInterval(() => {
    if(currentDivisionIndex.value >= divisionFilters.length) {
      currentDivisionIndex.value = 0
    }

    filters.value = {...divisionFilters[currentDivisionIndex.value]}
    currentDivisionIndex.value++
  }, 60000 * 5)
})

onBeforeUnmount(() => {
  deleteScoreRefresh()
})
</script>
