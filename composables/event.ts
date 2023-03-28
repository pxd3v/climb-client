import { ref, inject } from 'vue'
import { defineStore } from 'pinia'

export type EventType = {
  id: string
  name: string
  createdAt: string
}

export const useEventStore = defineStore('event', () => {
  const events = ref<Array<EventType>>([])
  const isLoadingEvents = ref(false)

  async function fetchEvents({ active = false }) {
    isLoadingEvents.value = true
    const response = await useCustomFetch<Array<EventType>>(`/event?${active ? 'active=true' : ''}`).catch((err: Error) => {
      console.error(err)
    })
    isLoadingEvents.value = false
    if (!response?.data.value) return
    events.value = response.data.value
    return events.value
  }

  return { events, fetchEvents, isLoadingEvents }
})
