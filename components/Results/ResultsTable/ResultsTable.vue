<template>
  <NDataTable 
    :columns="columns"
    :data="data"
    :pagination="false"
    :bordered="false"
    :loading="resultStore.isLoadingResults"
    v-model:expanded-row-keys="expandedKeys"
    striped
  />
</template>

<script setup lang="ts">
import { NDataTable } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { ResultType } from '~~/composables/result';
import ResultsTableCandidateRow from './ResultsTableCandidateRow.vue'

type ColumnData = {
  category: 'Pro.' | 'Ama.' | 'Kids'
  position: number
  key: string
  gender: 'M' | 'F'
  name: string
  age: number
  state: string
  score: number
  candidateId: string
}
const resultStore = useResultStore();
const eventStore = useEventStore()
const device = useDevice();

const data = ref<Array<ColumnData>>(parseResult(resultStore.result))
const expandedKeys = ref<Array<string>>([])

// @ts-ignore
const columns = computed<DataTableColumns<ResultType>>(() => {
  const desktopKeys = ['state', 'gender', 'category', 'age']  
  const defaultKeys = ['name', 'score', 'expand', 'position']
  const keysToUse = device.isMobile ? defaultKeys : [ ...defaultKeys, ...desktopKeys]
  return [
    {
      type: 'position',
      key: 'position',
      width: 50,
    },
    {
      title: 'Atleta',
      key: 'name'
    },
    {
      title: 'Estado',
      key: 'state'
    },
    {
      title: 'Idade',
      key: 'age'
    },
    {
      title: 'Genero',
      key: 'gender'
    },
    {
      title: 'Categoria',
      key: 'category'
    },
    {
      title: 'Resultado',
      key: 'score',
      width: 100
    },
    {
      type: 'expand',
      renderExpand: (rowData: ResultType) => {
        if(!eventStore.currentEventId) throw new Error('Cant fetch candidate entries without event id')
        return h(ResultsTableCandidateRow, {
          eventId: eventStore.currentEventId,
          candidateId: rowData.candidateId
        })
      },
      key: 'expand'
    },
  ].filter(column => keysToUse.includes(column.key))
})

function parseResult (result: Array<ResultType>): Array<ColumnData> {
  const categoryLabel = {
    pro: 'Pro.' as const,
    amateur: 'Ama.' as const,
    kids: 'Kids' as const
  }
  
  return result.map((result, index) => ({ 
    ...result, 
    gender: result.gender === 'Male' ? 'M' : 'F', 
    category: categoryLabel[result.category],
    key: result.candidateId,
    position: index + 1
  }))
}

watch(() => resultStore.result, (newResult) => {
  data.value = parseResult(newResult)
  expandedKeys.value = []
})
</script>
