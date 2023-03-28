export const useCustomFetch = async <T>(url: string, params = {}) => {

  const token = useCookie('dyno_session')
  const config = useRuntimeConfig()

  const opts = {
    key: url,
    baseURL: config.public.apiURL,

    // @ts-ignore
    async onRequest({ options }) {

      options.headers = options.headers || {}

      if (token.value) {
        options.headers['Authorization'] = `Bearer ${token.value}`
      }
    },
    // @ts-ignore
    async onRequestError({ error }) {
      console.log(error.message)
    },
    // @ts-ignore
    async onResponseError({ response }) {
      console.log(response._data.message)
    },

    ...params

  }
  const result = await useFetch<T>(url, opts)
  return result
}