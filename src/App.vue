<template>
  <main class="main">
    <RouterView />

    <MadeBy class="main__footer" />
  </main>
</template>

<script setup>
import MadeBy from '@/ui/MadeBy.vue'

import { onMounted, ref } from 'vue'
import { useWebAppViewport, useWebApp } from 'vue-tg'
import { useRoute } from 'vue-router'

const data = ref(null)

const route = useRoute()

const viewport = useWebAppViewport()

onMounted(() => {
  viewport.expand()

  data.value = route.query.shop
  console.log(route)
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