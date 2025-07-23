<script lang="ts" setup>
defineProps<{
  cls?: string
}>()
</script>

<template>
  <div
    :class="cls"
    flex cursor-pointer items-center justify-center gap2 rounded-xl bg-primary-900 px-4 py-1.5
    text-sm transition-all duration-400 hover="bg-primary-800"
  >
    <slot />
  </div>
</template>

<style scoped>

</style>
