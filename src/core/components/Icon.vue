<script lang="ts" setup>
defineProps<{
  icon: string
}>()
</script>

<template>
  <div :class="icon" cursor-pointer transition-all duration-200 hover="scale-110 text-op70" text="gray2 xl" />
</template>
