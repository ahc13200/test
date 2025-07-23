<script lang="ts" setup>
const { id } = defineProps<{
  id: any
}>()

const emit = defineEmits(['toggleConfigPanel'])

const { toggle } = useFullscreen(id)
</script>

<template>
  <nav w="6.9/8" fixed z-99 ml-auto from-primary-600 to-primary-800 bg-gradient-to-br p2 px-5 shadow-md>
    <div flex items-center justify-end text="gray2 xl" gap10>
      <div ietems-center flex gap5>
        <Icon icon="i-solar:full-screen-square-linear" @click="toggle" />
        <Icon icon=" i-solar:settings-outline" @click="emit('toggleConfigPanel')" />
      </div>
      <Button>
        <div i-solar:login-2-outline text-xs />
        <span>Log out</span>
      </Button>
    </div>
  </nav>
</template>
