<template>
  <NDataTable 
    :columns="columns"
    :data="data"
    :pagination="false"
    :bordered="false"
    :loading="resultStore.isLoadingResults"
    v-model:expanded-row-keys="expandedKeys"
    striped
    table-layout="fixed"
  />
</template>

<script setup lang="ts">
import { NDataTable } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { ResultType } from '~~/composables/result';
import ResultsTableCandidateRow from './ResultsTableCandidateRow.vue'

type ResultsTableProps = {
  eventId: string;
}

const resultStore = useResultStore();
const { isMobile } = useDevice();

const props = defineEmits<ResultsTableProps>()
const data = ref<Array<ResultType>>(parseResult(resultStore.result))
const expandedKeys = ref<Array<string>>([])

// @ts-ignore
const columns = computed<DataTableColumns<ResultType>>(() => {
  const mobileKeys = ['name', 'age', 'score', 'expand']
  const desktopKeys = ['name', 'state', 'age', 'gender', 'category', 'score', 'expand']  
  const keysToUse = isMobile ? mobileKeys : desktopKeys
  return [
    {
      type: 'expand',
      renderExpand: (rowData: ResultType) => {
        if(!props.eventId) throw new Error('Cant fetch candidate entries without event id')
        return h(ResultsTableCandidateRow, {
          eventId: props.eventId,
          candidateId: rowData.candidateId
        })
      },
      key: 'expand'
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
      title: 'Pontuacao',
      key: 'score'
    },
  ].filter(column => keysToUse.includes(column.key))
})

function parseResult (result: Array<ResultType>) {
  return result.map(result => ({ 
    ...result, 
    gender: result.gender === 'Male' ? 'M' : 'F', 
    category: result.category === 'pro' ? 'P' : 'A',
    key: result.candidateId,
  }))
}

watch(() => resultStore.result, (newResult) => {
  data.value = parseResult(newResult)
  expandedKeys.value = []
})
</script>
