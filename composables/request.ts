export const useRequest = async <T>(url: string, config: { method: 'POST' | 'PUT' | 'DELETE', body: Record<string, any> }) => {
  const envVars = useRuntimeConfig();
  const data = await $fetch<T>(url, {
    method: config.method,
    body: config.body,
    baseURL: envVars.public.apiURL
  }) as T

  return data
}