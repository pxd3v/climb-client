import { ref, inject } from 'vue'
import { defineStore } from 'pinia'

export type ResultFilters = {
  age: [number, number]
  category: 'pro' | 'amateur' | 'all';
  gender: 'Male' | 'Female' | 'all';
};

export type ResultType = {
  "name": string,
  "age": number,
  "gender": string,
  "category": string,
  "state": string,
  "score": number
}

export const useResultStore = defineStore('result', () => {
  const axios: any = inject('axios')
  const result = ref<Array<ResultType>>([])
  const isLoadingResults = ref(false)


  async function fetchResult (eventId: string, filters: ResultFilters) {
    isLoadingResults.value = true
    const response = await axios.get(`/${eventId}/result`, {
      params: { category: filters.category, gender: filters.gender, minAge: filters.age[0], maxAge: filters.age[1] }
    }).catch((err: Error) => {
      console.error(err)
    })
    isLoadingResults.value = false
    if(!response.data) return
    result.value = response.data
  }
  return { fetchResult, result, isLoadingResults }
})
