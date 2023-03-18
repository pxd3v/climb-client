import { inject } from 'vue'
import { defineStore } from 'pinia'

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

  async function createOrUpdateEntry(payload: CreateOrUpdateEntry): Promise<Entry> {
    const response = await axios.put(`/entry`, payload).catch((err: Error) => {
      console.error(err)
    })
    return response.data
  }

  return { createOrUpdateEntry }
})
