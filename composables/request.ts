export const useRequest = async <T>(url: string, config: { method: 'POST' | 'PUT' | 'DELETE', body: Record<string, any> }) => {
  const envVars = useRuntimeConfig();
  const token = useCookie('dyno_session')
  const data = await $fetch<T>(url, {
    method: config.method,
    body: config.body,
    baseURL: envVars.public.apiURL,
    headers: {
      'Authorization': `Bearer ${token.value}`
    }
  }) as T

  return data
}