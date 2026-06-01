import { ref, watch } from 'vue'

export function useDarkMode() {
  const isDark = ref(localStorage.getItem('theme') === 'dark')

  watch(isDark, (value) => {
      document.documentElement.classList.toggle('dark', value)
      localStorage.setItem('theme', value ? 'dark' : 'light')
    },
    {
      immediate: true,
    },
  )
  return {
    isDark,
  }
}
