<template>
  <div>
    <ClientOnly>
      <NSelect
      :loading="eventStore.isLoadingEvents"
      :options="options"
      :value="modelValue"
      @update:value="onUpdateValue"
      :show-checkmark="false"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { NSelect } from 'naive-ui'

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
eventStore.fetchEvents({ active: props.onlyActive }).then(() => {
  if (!eventStore.events?.[0]) return
  const firstEnabledEvent = eventStore.events.find((event) => !event.ended)
  emit('update:modelValue', `${firstEnabledEvent ? firstEnabledEvent.id : eventStore.events[0].id}`)
})

const options = computed(() =>
  eventStore.events.map((event) => ({ label: event.name, value: `${event.id}` }))
)

function onUpdateValue(value: string) {
  emit('update:modelValue', value)
}
</script>
