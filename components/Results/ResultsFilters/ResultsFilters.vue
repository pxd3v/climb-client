<template>
  <div class="flex flex-col gap-3">
    <NText tag="h1" class="text-6xl" v-if="shouldShowHeader">{{ category }} {{ gender }} {{  age }}</NText>
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
import { NButton, NText } from 'naive-ui'
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
    gender: 'Male',
    age: [14, 17],
  },
  {
    category: 'amateur',
    gender: 'Male',
    age: [18, 29],
  },
  {
    category: 'amateur',
    gender: 'Male',
    age: [30, 34],
  },
  {
    category: 'amateur',
    gender: 'Male',
    age: [35, 39],
  },
  {
    category: 'amateur',
    gender: 'Male',
    age: [40, 49],
  },
  {
    category: 'amateur',
    gender: 'Male',
    age: [50, 100],
  },
  {
    category: 'amateur',
    gender: 'Female',
    age: [0, 100],
  },
  {
    category: 'amateur',
    gender: 'Female',
    age: [14, 17],
  },
  {
    category: 'amateur',
    gender: 'Female',
    age: [18, 29],
  },
  {
    category: 'amateur',
    gender: 'Female',
    age: [30, 34],
  },
  {
    category: 'amateur',
    gender: 'Female',
    age: [35, 39],
  },
  {
    category: 'amateur',
    gender: 'Female',
    age: [40, 100],
  },
  {
    category: 'kids',
    gender: 'Female',
    age: [10, 11],
  },
  {
    category: 'kids',
    gender: 'Female',
    age: [12, 13],
  },
  {
    category: 'kids',
    gender: 'Male',
    age: [10, 11],
  },
  {
    category: 'kids',
    gender: 'Male',
    age: [12, 13],
  },
]

const a = {
  'pro': 'Profissional',
  'amateur': 'Amador',
  'kids': 'Kids',
  'all': 'Geral'
}

const b = {
  'Female': 'Feminino',
  'Male': 'Masculino',
  'all': 'Todos'
}

const category = computed(() => a[filters.value.category])
const gender = computed(() => b[filters.value.gender])
const age = computed(() => {
  if(filters.value.age[0] === 0 && filters.value.age[1] === 100) {
    return 'Geral'
  }
  
  if(filters.value.age[1] === 100) {
    return `${filters.value.age[0]} +`
  }

  return `de ${filters.value.age[0]} a ${filters.value.age[1]} anos`
})

const device = useDevice()
const resultStore = useResultStore()
const eventStore = useEventStore()
const filters = ref<ResultFilters>({...defaultFilters})
const isDivisionFiltersOn = ref(false)
const currentDivisionIndex = ref(0)
const divisionIntervalId = ref<null | number>(null)
const shouldShowHeader = computed(() => device.isDesktop && isDivisionFiltersOn.value)
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
  }, 60000)
})

onBeforeUnmount(() => {
  deleteScoreRefresh()
})
</script>
