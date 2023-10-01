<template>
  <main class="main">
    <RouterView />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { useWebAppViewport } from 'vue-tg'

const viewport = useWebAppViewport()

onMounted(() => {
  viewport.expand()

  // disable double tap zoom
  document.addEventListener(
    'dblclick',
    event => event.preventDefault(),
    { passive: false }
  )
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