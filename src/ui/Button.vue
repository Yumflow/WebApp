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
  isPrimary: {
    type: Boolean,
    default: false
  },

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
    '--primary': props.isPrimary,
    '--secondary': props.isSecondary,
    '--square': props.isSquare,
  }
})
</script>

<style scoped lang="sass">
.button
  cursor: pointer
  padding: 0 12px
  font-size: 16px
  white-space: nowrap
  font-weight: 500
  height: 36px
  border-radius: 8px
  border: 1px solid transparent
  transition: background-color 0.3s ease, opacity 0.3s ease
  background-color: transparent
  color: white

  &.--primary
    font-weight: 800
    text-transform: uppercase
    background-color: #f8a917
    font-size: 14px

    &:hover
      background-color: var(--background-primary-light)

  &.--secondary
    background-color: transparent
    border: 1px solid var(--background-stroke)
    font-weight: 500

    &:hover
      background-color: var(--background-stroke)

  &.--square
    padding: 6px

    svg,
    img
      max-height: 24px
      max-width: 24px
      width: 24px
      height: 24px

</style>