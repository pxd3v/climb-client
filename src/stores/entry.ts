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
  const axios: any = inject('axios')
  const notification = useNotification()

  async function createOrUpdateEntry(payload: CreateOrUpdateEntry): Promise<Entry | undefined> {
    try {
      const response = await axios.put(`/entry`, payload)
      return response.data
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
