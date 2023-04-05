<template>
  <NDataTable 
    :columns="columns"
    :data="data"
    :pagination="false"
    :loading="apiCall.isLoadingList.value"
    :row-class-name="rowClassName"
    striped
  />
</template>

<script setup lang="ts">
import { DataTableColumns, NDataTable } from 'naive-ui'

type ResultsTableCandidateRowProps = {
  candidateId: string;
  eventId: string;
}

type RowData = {
  boulder: number
  tries: number
  flash: number
  retried: number
  sent: boolean
}

const props = defineProps<ResultsTableCandidateRowProps>()
const entryStore = useEntryStore();
const eventStore = useEventStore();
const apiCall = entryStore.listEntries({ candidateId: props.candidateId, eventId: props.eventId})
const response = await apiCall.request()
const data = ref<Array<RowData>>([])

const columns = computed<DataTableColumns<RowData>>(() => {
  return [
    {
      title: 'Boulder',
      key: 'boulder',
    },
    {
      title: 'Trabalhado',
      key: 'retried',
      className: 'retried'
    },
    {
      title: 'Flash',
      key: 'flash',
      className: 'flash'
    },
    {
      title: 'Top',
      key: 'sentLabel',
    },
  ]
})

const scoredEntries = computed(() => {
  const scoredEntries: Array<{ boulderNumber: number, score: number }> = []
  const minorScore = { index: 0, score: Infinity }
  data.value.forEach(entry => {
    if(!entry.sent) return
    const score = entry.tries > 1 ? entry.retried : entry.flash
    if(scoredEntries.length < (eventStore.currentEvent?.maxBouldersForScore ?? Infinity)) {
      scoredEntries.push({ 
        boulderNumber: entry.boulder, 
        score
      })
      if(minorScore.score > score) {
        minorScore.index = scoredEntries.length - 1
        minorScore.score = score
      }
    } else {
      if(minorScore.score < score) {
        scoredEntries[minorScore.index] = {
          boulderNumber: entry.boulder,
          score
        }
      }
    }
  })
  return scoredEntries
})

function rowClassName(row: RowData) {
  let classes = ''
  
  const scored = !!scoredEntries.value.find(entry => entry.boulderNumber === row.boulder)

  if(row.tries === 1 && row.sent && scored) {
    classes = classes.concat(' flash-sent')
  }
  if(row.tries !== 1 && row.sent && scored) {
    classes = classes.concat(' not-flash retried-sent')
  }
  if(!row.sent) {
    classes = classes.concat(' not-sent')
  }

  return classes
}

watch(() => response.data, (newData) => {
  if(!newData.value) return
  data.value = newData.value.map((entry, index) => {
    return {
      boulder: entry.boulder.number,
      tries: entry.tries,
      flash: entry.boulder.flashScore,
      retried: entry.boulder.score,
      sent: entry.sent,
      sentLabel: entry.sent ? '✅' : '❌',
    }
  })
}, { deep: true, immediate: true })
</script>

<style>
.flash-sent .flash,
.retried-sent .retried {
  color: #16a34a !important;
  font-weight: 600;
}

.not-flash .flash,
.not-sent .flash {
  text-decoration: line-through;
  color: #dc2626 !important;
}

.flash-sent .retried {
  text-decoration: line-through;
  color: #dc2626 !important;
}


</style>