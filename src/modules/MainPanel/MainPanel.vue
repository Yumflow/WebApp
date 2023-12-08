<template>
  <div class="main-panel">
    <Button
      class="main-panel__button"
      @click="onButtonClick"
    >Перейти в корзину</Button>
  </div>
</template>

<script setup>
import Button from '@/ui/Button.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function onButtonClick() {
  router.push('/bag')
}
</script>

<style scoped lang="sass">
.main-panel
  position: fixed
  bottom: 0
  left: 0
  width: 100%
  padding: 10px
  background-color: var(--color-background-primary)

  &__button
    width: 100%
</style>