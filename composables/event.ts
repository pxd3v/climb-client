import { defineStore } from 'pinia'

export type EventType = {
  id: string
  name: string
  createdAt: string
}

const events = ref<Array<EventType>>([])
const isLoadingEvents = ref(false)
const currentEventId = ref<string | undefined>()

export const useEventStore = defineStore('event', () => {
  async function fetchEvents({ active } = { active: false }) {
    isLoadingEvents.value = true
    const response = await useCustomFetch<Array<EventType>>(`/event?${active ? 'active=true' : ''}`).catch((err: Error) => {
      console.error('@@error fetching events', err)
    })
    isLoadingEvents.value = false
    if (!response?.data.value) return
    events.value = response.data.value
    return events.value
  }

  function setCurrentEvent(eventId: string) {
    currentEventId.value = eventId
  }
  

  return { fetchEvents, setCurrentEvent, events, isLoadingEvents, currentEventId }
})
