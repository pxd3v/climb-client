<template>
  <NText tag="label" class="w-full">
    Evento
    <NSelect
      :loading="eventStore.isLoadingEvents"
      :options="options"
      :value="modelValue"
      @update:value="onUpdateValue"
      :show-checkmark="false"
    />
  </NText>
</template>

<script setup lang="ts">
import { useEventStore } from '@/stores/event'
import { NSelect, NText } from 'naive-ui'
import { computed, onMounted } from 'vue'

type EventSelectProps = {
  modelValue?: string
}

type EventSelectEmits = {
  (e: 'update:modelValue', value: string): void
}

defineProps<EventSelectProps>()
const emit = defineEmits<EventSelectEmits>()

const eventStore = useEventStore()
const options = computed(() =>
  eventStore.events.map((event) => ({ label: event.name, value: `${event.id}` }))
)

function onUpdateValue(value: string) {
  emit('update:modelValue', value)
}

onMounted(async () => {
  const events = await eventStore.fetchEvents()
  if (!events?.[0]) return
  emit('update:modelValue', `${events[0].id}`)
})
</script>
