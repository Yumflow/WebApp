<template>
  <main class="main">
    <RouterView />
  </main>

  <AppLoader />
</template>

<script setup>
import AppLoader from '@/modules/AppLoader/AppLoader.vue'
import { onMounted } from 'vue'
import { useWebAppClosingConfirmation, useWebAppViewport } from 'vue-tg'
import { useLayoutStore } from '@/stores'

const viewport = useWebAppViewport()
const closingConfirmation = useWebAppClosingConfirmation()
const layoutStore = useLayoutStore()

onMounted(() => {
  layoutStore.startLoading()

  viewport.expand()
  closingConfirmation.enableClosingConfirmation()

  // disable double tap zoom
  document.addEventListener(
    'dblclick',
    event => event.preventDefault(),
    { passive: false }
  )

  setTimeout(layoutStore.stopLoading, 0)
})
</script>

<style scoped lang="sass">
.main
  width: 100%
  max-width: 630px
  margin: 0 auto
  display: flex
  flex-direction: column
</style>