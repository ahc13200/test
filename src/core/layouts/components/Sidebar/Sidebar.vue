<script lang="ts" setup>
import { useSidebarMenu } from '~/core/composables/useMenuSidebar'

const { state, menuItems, handleClick, onOpenChange } = useSidebarMenu()
</script>

<template>
  <div w="1.1/8" relative z-100>
    <div flex items-center justify-center bg-primary-100 p-2>
      <span text="2xl primary-700" font-serif>Test</span>
    </div>
    <div sticky mb-10 h-full flex="~ col" bg-white px-4 pt0 shadow="gray-3 sm">
      <!-- Menu -->
      <div mt-10>
        <span style="letter-spacing: 1px" ml3 uppercase op70>
          MENU
        </span>
        <a-menu
          v-model:selected-keys="state.selectedKeys" mode="inline" :open-keys="state.openKeys" :items="menuItems"
          class="text-md mb-3 mt-3 overflow-hidden overflow-y-hidden font-sans hover:overflow-y-auto border-none! !bg-transparent"
          @click="handleClick" @open-change="onOpenChange"
        />
      </div>

      <!-- GitHub -->
      <div mb-10w-full mb-20 mt-auto px-2>
        <Button cls="!bg-primary-100 hover:scale-95 py-2">
          <div text="primary-500 lg">
            <a href="https://github.com/ahc13200/test" target="_blank" flex items-center gap2>
              <div i-iconoir:github />
              <span>GitHub</span>
            </a>
          </div>
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.ant-menu-light.ant-menu-inline .ant-menu-sub.ant-menu-inline) {
  background-color: transparent !important;
}

:deep(.ant-menu-item),
:deep(.ant-menu-submenu-title) {
  border-radius: 10px !important;
  transition: all 0.3s ease;
}

:deep(.ant-menu-item:hover),
:deep(.ant-menu-submenu-title:hover) {
  border-radius: 10px !important;
}
</style>
