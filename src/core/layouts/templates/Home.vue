<script lang="ts" setup>
const app = ref()
const showConfigPanel = ref(false)

function toggleConfigPanel() {
  showConfigPanel.value = !showConfigPanel.value
}
</script>

<template>
  <div ref="app" class="h-screen flex animate-fade-in overflow-hidden">
    <Sidebar />
    <ConfigPanel v-model:show="showConfigPanel" />
    <div>
      <Header :id="app" @toggle-config-panel="toggleConfigPanel" />

      <main>
        <div overflow="hidden y-auto" mt-10 flex-1 p-6 pl-4 pr-3>
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
