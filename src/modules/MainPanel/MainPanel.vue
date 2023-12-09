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
  box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.05)
  border-radius: 24px 24px 0 0

  &__button
    width: 100%
</style>