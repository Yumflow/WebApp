<template>
  <div class="slider" :style="{ 'background-color': backgroundColor }">
    <div class="slider__inner scrollbar-hidden">
      <div
        v-for="category in categories"
        class="slider__tab"
        @click="onCategoryClick(category)"
      >{{ category.title }}</div>
    </div>
  </div>
</template>

<script setup>
import { useWebAppTheme } from 'vue-tg'
import { computed, onMounted } from 'vue'

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  }
})

const theme = useWebAppTheme()
const backgroundColor = computed(() => theme.headerColor)

function onCategoryClick(category) {
  document.querySelector(`#${category.id}`).scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped lang="sass">
.slider
  position: sticky
  top: 0
  background-color: var(--tg-theme-bg-color)
  width: 100%
  scrollbar-width: none
  z-index: 1

  &__inner
    display: flex
    justify-content: flex-start
    gap: 12px
    padding: 12px 0
    overflow-x: scroll

  &__tab
    background-color: #f6f5f4
    color: black
    font-size: 18px
    padding: 8px 12px
    border-radius: 12px
    cursor: pointer
    transition: opacity 0.3s ease
    user-select: none
    white-space: nowrap

    &:hover
      opacity: 0.7
</style>