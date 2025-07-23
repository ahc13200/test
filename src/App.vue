<script setup lang="ts">
import { colors } from '../theme'

useHead({
  title: 'Test',
})

const { themeKey } = useTheme()
const color = computed(() => colors[themeKey.value][500])
</script>

<template>
  <a-config-provider :theme="{ token: { colorPrimary: color } }">
    <div>
      <Home />
    </div>
  </a-config-provider>
</template>
