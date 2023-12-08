<template>
  <button class="button" :class="buttonClasses">
    <Image v-if="props.icon" :src="props.icon" class="button__icon"></Image>

    <span class="button__text">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import Image from '@/ui/Image.vue'
import { computed } from 'vue'

const props = defineProps({
  isSecondary: {
    type: Boolean,
    default: false
  },


  isSquare: {
    type: Boolean,
    default: false,
  },

  icon: {
    type: String,
  },
})

const buttonClasses = computed(() => {
  return {
    '--secondary': props.isSecondary,
    '--square': props.isSquare,
  }
})
</script>

<style scoped lang="sass">
.button
  cursor: pointer
  padding: 8px 12px
  white-space: nowrap
  border-radius: 8px
  border: 1px solid transparent
  transition: background-color 0.3s ease, opacity 0.3s ease
  color: white
  font-weight: 800
  text-transform: uppercase
  background-color: var(--color-background-accent)
  font-size: 14px
  display: flex
  align-items: center
  justify-content: center
  height: 36px
  user-select: none

  &:hover
    background-color: transparentize(#f8a917, 0.3)

  &.--square
    padding: 6px

    svg,
    img
      max-height: 24px
      max-width: 24px
      width: 24px
      height: 24px

</style>