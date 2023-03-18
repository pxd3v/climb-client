<script setup lang="ts">
import { NDataTable } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { computed, watch } from 'vue';
import { useResultStore, type ResultType } from '@/stores/result';
import { useWindowSize } from '@vueuse/core'

const resultStore = useResultStore();
const data = computed<Array<ResultType>>(() => 
  resultStore.result.map(result => ({ 
    ...result, 
    gender: result.gender === 'Male' ? 'M' : 'F', 
    category: result.category === 'pro' ? 'P' : 'A'
  })))
const windowSize = useWindowSize()

const columns = computed<DataTableColumns<ResultType>>(() => {
  const mobileKeys = ['name', 'age', 'score']
  const desktopKeys = ['name', 'state', 'age', 'gender', 'category', 'score']  
  const keysToUse = windowSize.width.value > 720 ? desktopKeys : mobileKeys
  return [
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
</script>

<template>
  <NDataTable 
    :columns="columns"
    :data="data"
    :pagination="false"
    :bordered="false"
    :loading="resultStore.isLoadingResults"
    striped
    table-layout="fixed"
  />
</template>