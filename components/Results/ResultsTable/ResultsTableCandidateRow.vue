<template>
  <NDataTable 
    :columns="columns"
    :data="data"
    :pagination="false"
    :loading="apiCall.isLoadingList.value"
    :row-class-name="rowClassName"
    striped
    table-layout="fixed"
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
  top: number
  sent: boolean
}

const props = defineProps<ResultsTableCandidateRowProps>()
const entryStore = useEntryStore();
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
      title: 'Tentativa',
      key: 'tries',
    },
    {
      title: 'Top',
      key: 'top',
      className: 'top'
    },
    {
      title: 'Flash',
      key: 'flash',
      className: 'flash'
    },
  ]
})

function rowClassName(row: RowData) {
  if(row.tries === 1 && row.sent) return 'flash-sent'
  if(row.tries !== 1 && row.sent) return 'not-flash top-sent'
  return 'not-sent'
}
watch(() => response.data, (newData) => {
  if(!newData.value) return
  data.value = newData.value.map((entry) => {
    return {
      boulder: entry.boulder.number,
      tries: entry.tries,
      flash: entry.boulder.flashScore,
      top: entry.boulder.score,
      sent: entry.sent
    }
  })
}, { deep: true, immediate: true })
</script>

<style>
.flash-sent .flash,
.top-sent .top {
  color: #16a34a !important;
  font-weight: 600;
}

.not-flash .flash,
.not-sent .flash {
  text-decoration: line-through;
  color: #dc2626 !important;
}

.flash-sent .top {
  text-decoration: line-through;
  color: #dc2626 !important;
}


</style>