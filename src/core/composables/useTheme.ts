import { colors } from '../../../theme'

export function useTheme() {
  const isClient = typeof window !== 'undefined'
  const el = isClient ? document.documentElement : undefined

  const defaultKey = Object.keys(colors)[0] as keyof typeof colors
  const themeKey = useLocalStorage<keyof typeof colors>('theme-color-key', defaultKey)

  const setTheme = (key: keyof typeof colors) => {
    themeKey.value = key
    const palette = colors[key]

    Object.entries(palette).forEach(([shade, color]) => {
      el?.style.setProperty(`--color-primary-${shade}`, color)
    })
  }

  if (!el?.style.getPropertyValue('--color-primary-500')) {
    setTheme(themeKey.value)
  }

  return { setTheme, themeKey }
}
