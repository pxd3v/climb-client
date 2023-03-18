<script setup lang="ts">
import ResultsFilters from '@/components/Results/ResultsFilters/ResultsFilters.vue'
import ResultsTable from '@/components/Results/ResultsTable/ResultsTable.vue'
</script>

<template>
  <main class="flex flex-col h-[80%]">
    <ResultsFilters />
    <ResultsTable class="mt-4 overflow-scroll"/>
  </main>
</template>