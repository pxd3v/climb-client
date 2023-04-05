import { defineStore } from 'pinia'

export type EventType = {
  id: string
  name: string
  createdAt: string
  ended: boolean
  maxBouldersForScore: number
}

const events = ref<Array<EventType>>([])
const isLoadingEvents = ref(false)
const currentEventId = ref<string | undefined>()
const currentEvent = computed(() => events.value.find(event => `${event.id}` === currentEventId.value))

export const useEventStore = defineStore('event', () => {
  async function fetchEvents({ active } = { active: false }) {
    isLoadingEvents.value = true
    const response = await useApi<Array<EventType>>(`/event?${active ? 'active=true' : ''}`).catch((err: Error) => {
      console.error('@@error fetching events', err)
    })
    isLoadingEvents.value = false
    if (!response?.data.value) return
    events.value = response.data.value
    return events.value
  }

  async function fetchEvent(eventId: string) {
    const response = await useApi<EventType>(`/event/${eventId}`).catch((err: Error) => {
      console.error('@@error fetching specific event', err)
    })
    if (!response?.data.value) return
    const fetchedEvent = response?.data.value
    const index = events.value.findIndex(event => event.id === fetchedEvent.id)
    events.value = [...events.value.slice(0, index), fetchedEvent, ...events.value.slice(index + 1)]
    return fetchEvent
  }

  function setCurrentEvent(eventId: string) {
    currentEventId.value = eventId
  }
  

  return { fetchEvents, setCurrentEvent, events, isLoadingEvents, currentEventId, currentEvent, fetchEvent }
})
