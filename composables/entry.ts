import { defineStore } from 'pinia'
import { useNotification } from 'naive-ui'
import type { AxiosError } from 'axios'

export type CreateOrUpdateEntry = {
  sent: boolean
  boulderNumber: number
  candidateNumber: number
  eventId: number
  refereeId: number
}

export type Boulder = {
  id: number
  number: number
  eventId: number
  flashScore: number
  score: number
  sector: string
  color: string
}

export type Entry = {
  id: number
  createdAt: string
  updatedAt: string
  candidateId: number
  refereeId: number
  boulderId: number
  eventId: number
  tries: number
  sent: boolean
  boulder: Boulder
  candidate: { number: number }
}


export const useEntryStore = defineStore('entry', () => {
  const notification = useNotification()
  async function createOrUpdateEntry(body: CreateOrUpdateEntry): Promise<Entry | undefined> {
    try {
      const response = await useRequest<Entry | undefined>(`/entry`, {
        method: 'PUT',
        body
      })
      return response
    } catch(err) {
      const error = err as AxiosError<{ statusCode: 400, message: string }>
      notification.error({
        content: error.data.message,
        duration: 5000,
        keepAliveOnHover: true
      })
    }
  }

  function listEntries({ eventId, candidateId }: { eventId?: string, candidateId?: string }) {
    const isLoadingList = ref(true)
    const request = async () => {
      const result = await useApi<Array<Entry>>(`/entry?eventId=${eventId}&candidateId=${candidateId}`).catch((err: Error) => {
        console.error('@@error fetching entries', err)
      })
      isLoadingList.value = false
      if(!result) throw new Error('Error fetching entries')
      return result
    }

    return { request, isLoadingList } 
  }

  return { createOrUpdateEntry, listEntries }
})
