<template>
  <main class="h-full max-h-full overflow-scroll">
    <ClientOnly>
      <NDataTable
        :columns="columns"
        :data="data"
        :pagination="false"
        :loading="listEntries.isLoadingList.value"
        striped
        virtual-scroll
        :max-height="600"
      />
    </ClientOnly>
  </main>
</template>

<script setup lang="ts">
import { DataTableColumns, NDataTable } from 'naive-ui'

type RowData = {
  candidate: number
  boulder: number
  sent: string
}

useHead({
  title: 'Dyno - Entradas',
})

definePageMeta({
  layout: "authenticated",
});

const eventStore = useEventStore()
const entryStore = useEntryStore()
const data = ref<Array<RowData>>([])

const listEntries = computed(() => entryStore.listEntries({ eventId: eventStore.currentEventId }))

const columns = computed<DataTableColumns<RowData>>(() => {
  return [
    {
      title: 'Candidate',
      key: 'candidate'
    },
    {
      title: 'Boulder',
      key: 'boulder',
    },
    {
      title: 'Top',
      key: 'sent',
    },
  ]
})

watch(() => eventStore.currentEventId, async () => {
  if(!eventStore.currentEventId) return
  const entriesResponse = await listEntries.value.request()
  if(entriesResponse.data.value == null) { return }
  data.value = entriesResponse.data.value.map((entry, index) => {
    return {
      candidate: entry.candidate.number,
      boulder: entry.boulder.number,
      sent: entry.sent ? '✅' : '❌',
    }
  })
}, { immediate: true })
</script>
