import { defineStore } from 'pinia'
import { darkTheme, lightTheme } from 'naive-ui'

export const useThemeStore = defineStore('theme', () => {
  const isDarkTheme = ref(true)
  const theme = computed(() => isDarkTheme.value ? darkTheme : lightTheme)
  const onChangeTheme = (value: boolean) => {
    isDarkTheme.value = value
  }
  return { isDarkTheme, theme, onChangeTheme }
})
