import { defineStore } from 'pinia'

export type ResultFilters = {
  age: [number, number]
  category: 'pro' | 'amateur' | 'kids' | 'all';
  gender: 'Male' | 'Female' | 'all';
};

export type ResultType = {
  "name": string,
  "age": number,
  "gender": string,
  "category": 'pro' | 'amateur' | 'kids',
  "state": string,
  "score": number,
  "candidateId": string
}

export const useResultStore = defineStore('result', () => {
  const result = ref<Array<ResultType>>([])
  const isLoadingResults = ref(false)

  async function fetchResult (eventId: string, filters?: ResultFilters) {
    const response = await useApi<Array<ResultType>>(`/event/${eventId}/result`, {
      params: { category: filters?.category, gender: filters?.gender, minAge: filters?.age[0], maxAge: filters?.age[1] }
    }).catch((err: Error) => {
      console.error('@@error fetching results', err)
    })
    if(!response?.data.value) return
    result.value = response.data.value
  }
  return { fetchResult, result, isLoadingResults }
})
