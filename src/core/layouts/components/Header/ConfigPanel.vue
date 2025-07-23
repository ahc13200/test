<script lang="ts" setup>
import { useTheme } from '~/core/composables/useTheme'
import { colors } from '../../../../../theme'

const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits<{ (e: 'update:show', value: boolean): void }>()

const { setTheme } = useTheme()

const target = ref()
const showConfigPanel = useVModel(props, 'show', emit)

onClickOutside(target, () => {
  showConfigPanel.value = false
})
</script>

<template>
  <transition name="fade">
    <div v-show="showConfigPanel" fixed inset-0 z-9990 bg="black op40" />
  </transition>

  <transition name="slide">
    <div v-show="showConfigPanel" ref="target" w="1/6" absolute fixed right-0 z-9990 h-screen bg-primary-50 shadow-lg>
      <div ml-auto from-primary-600 to-primary-800 bg-gradient-to-br p2.5 px-5 shadow-md>
        <div flex items-center justify-between>
          <span text="xl gray2">Configurations</span>
          <Icon icon="i-solar:close-circle-linear" @click="showConfigPanel = false" />
        </div>
      </div>

      <!-- Change Theme  -->
      <div flex="~ col" items-center p5>
        <span>Change Theme</span>
        <div grid grid-cols-4 mt-5 gap5>
          <div v-for="(color, key) in colors" :key="key" flex items-center gap2>
            <div
              :style="{ backgroundColor: color[500] }" h-8 w-8 cursor-pointer rounded-full shadow-md transition-all
              duration-300 hover="scale-115 shadow-['var(--color-primary-200)']" @click="setTheme(key)"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
