import { inject } from 'vue'
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
}


export const useEntryStore = defineStore('entry', () => {
  const notification = useNotification()

  async function createOrUpdateEntry(body: CreateOrUpdateEntry): Promise<Entry | undefined> {
    try {
      const response = await useRequest<Entry | undefined>(`/entry`, {
        method: 'POST',
        body
      })
      return response
    } catch(err) {
        const error = err as AxiosError<{ statusCode: 400, message: string }>
        notification.error({
        content: error.response?.data.message,
        duration: 2000,
        keepAliveOnHover: true
      })
    }
  }

  return { createOrUpdateEntry }
})
