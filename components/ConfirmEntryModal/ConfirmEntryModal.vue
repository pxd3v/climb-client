<template>
  <NModal :show="show" @update:show="emit('update:show', $event)" preset="dialog">
    <template #header>
      <NText tag="h1">Confirmar os dados</NText>
    </template>
    <div class="flex flex gap-5 items-center justify-center p-5">
        <NStatistic label="Candidate">{{  data.candidate }}</NStatistic>
        <NStatistic label="Boulder">{{  data.boulder }}</NStatistic>
      <NTag :type="sentProps.type" class="mt-4">{{ sentProps.label }}</NTag>
    </div>
      <template #action>
      <NButton @click="emit('action')">Confirmar</NButton>
    </template>
  </NModal>
</template>

<script setup lang="ts">
import { NModal, NText, NTag, NStatistic, NButton } from 'naive-ui'

type EventSelectProps = {
  show: boolean;
  data: {
    candidate: number;
    boulder: number;
    sent: boolean;
  }
}

type EventSelectEmits = {
  (e: 'update:show', value: boolean): void
  (e: 'action'): void
}

const props = defineProps<EventSelectProps>()
const emit = defineEmits<EventSelectEmits>()

const sentProps = computed(() => ({
  label: props.data.sent ? 'Top' : 'Tentativa',
  type: props.data.sent ? 'success' as const : 'error' as const
}))
</script>
