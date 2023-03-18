import { ref, inject } from 'vue'
import { defineStore } from 'pinia'

export type EventType = {
  id: string
  name: string
  createdAt: string
}

export const useEventStore = defineStore('event', () => {
  const axios: any = inject('axios')
  const events = ref<Array<EventType>>([])
  const isLoadingEvents = ref(false)

  async function fetchEvents() {
    isLoadingEvents.value = true
    const response = await axios.get(`/event`).catch((err: Error) => {
      console.error(err)
    })
    isLoadingEvents.value = false
    if (!response.data) return
    events.value = response.data
    return events.value
  }

  return { events, fetchEvents, isLoadingEvents }
})
