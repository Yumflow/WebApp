<template>
  <div class="loader" :class="{ '--hidden': isHidden }">
    <div class="loader__body">
      <Image src="./images/yumflow.svg" class="loader__logo" />
    </div>
  </div>
</template>

<script setup>
import Image from '@/ui/Image.vue'
import { useLayoutStore } from '@/stores'
import { computed, ref, watch } from 'vue'

const layoutStore = useLayoutStore()

const isHidden = ref(false)
const isLoading = computed(() => layoutStore?.isAppLoading)

watch(isLoading, (is) => {
  isHidden.value = !is;
})
</script>

<style scoped lang="sass">
.loader
  position: fixed
  top: 0
  left: 0
  height: 100%
  width: 100%
  background-color: var(--tg-theme-bg-color)
  z-index: 100
  display: flex
  justify-content: center
  align-items: center
  transition: opacity 1s ease
  overflow: hidden

  &.--hidden
    opacity: 0
    pointer-events: none

  &__logo
    height: 48px
    color: grey
</style>