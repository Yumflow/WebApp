<template>
  <div
    class="slider"
    :class="{ '--sticky': isSticky }"
    :style="{ 'background-color': backgroundColor }"
  >
    <div class="slider__inner scrollbar-hidden">
      <div
        v-for="category in categories"
        class="slider__tab"
        :class="{ '--active': category.id === currentCategoryId }"
        :id="`tab-${category.id}`"
        @click="onCategoryClick(category)"
      >{{ category.title }}</div>
    </div>
  </div>
</template>

<script setup>
import { useWebAppTheme } from 'vue-tg'
import { computed, ref, watch } from 'vue'
import { scrollToElementById, scrollToElementInHorizontalById } from '@/helpers/scroll'

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },

  currentCategoryId: {
    type: String,
    required: true,
  },
})

const isScrolling = ref(false)
const isSticky = ref(false)

watch(() => props.currentCategoryId, scrollToCategoryTab)

const theme = useWebAppTheme()
const backgroundColor = computed(() => theme.headerColor)

function onCategoryClick(category) {
  isScrolling.value = true
  setTimeout(() => isScrolling.value = false, 1200)

  scrollToElementInHorizontalById(`tab-${category.id}`, 'instant')
  scrollToElementById(`category-${category.id}`)
}

function scrollToCategoryTab(categoryId) {
  if (isScrolling.value) {
    return
  }

  scrollToElementInHorizontalById(`tab-${categoryId}`)
}
</script>

<style scoped lang="sass">
.slider
  position: sticky
  top: 0
  background-color: var(--color-background-primary)
  width: 100%
  scrollbar-width: none
  z-index: 1

  &.--sticky
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12)

  &__inner
    display: flex
    justify-content: flex-start
    gap: 12px
    padding: 12px 0
    overflow-x: scroll

  &__tab
    background-color: var(--color-background-secondary)
    font-size: 18px
    padding: 8px 12px
    border-radius: 12px
    cursor: pointer
    transition: opacity 0.3s ease
    user-select: none
    white-space: nowrap

    &:hover
      opacity: 0.7

    &.--active
      opacity: 0.4
</style>