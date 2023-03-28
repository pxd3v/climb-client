<template>
  <NText tag="label" class="w-full">
    Evento
    <ClientOnly>
      <NSelect
      :loading="eventStore.isLoadingEvents"
      :options="options"
      :value="modelValue"
      @update:value="onUpdateValue"
      :show-checkmark="false"
      />
    </ClientOnly>
  </NText>
</template>

<script setup lang="ts">
import { NSelect, NText } from 'naive-ui'

type EventSelectProps = {
  modelValue?: string
  onlyActive?: boolean
}

type EventSelectEmits = {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<EventSelectProps>()
const emit = defineEmits<EventSelectEmits>()

const eventStore = useEventStore()
const options = computed(() =>
  eventStore.events.map((event) => ({ label: event.name, value: `${event.id}` }))
)

function onUpdateValue(value: string) {
  emit('update:modelValue', value)
}

onMounted(async () => {
  const events = await eventStore.fetchEvents({ active: props.onlyActive })
  if (!events?.[0]) return
  emit('update:modelValue', `${events[0].id}`)
})
</script>
