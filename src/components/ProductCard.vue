<template>
  <div class="product-card">
    <Image :src="product.image" class="product-card__image" />

    <div class="product-card__info">
      <div class="product-card__title">{{ product.title }}</div>

      <div class="product-card__price">{{ product.price }} р.</div>

      <div class="product-card__buttons">
        <div v-if="countInBag > 0" class="product-card__controls">
          <Button class="product-card__controls-button" @click="onRemoveClick">-</Button>
          <div class="product-card__controls-value">{{ countInBag }}</div>
          <Button class="product-card__controls-button" @click="onAddClick">+</Button>
        </div>

        <Button v-else class="product-card__button" @click="onAddClick">Выбрать</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from '@/ui/Image.vue'
import Button from '@/ui/Button.vue'
import { useWebAppHapticFeedback } from 'vue-tg'
import { useBagStore } from '@/stores'
import { computed } from 'vue'

const props = defineProps(['product'])
const emit = defineEmits(['addToBag', 'removeFromBag'])
const haptic = useWebAppHapticFeedback()
const bagStore = useBagStore()

const countInBag = computed(() => {
  const productInBag = bagStore.products.find(p => p.product.id === props.product.id)
  return productInBag?.count || 0
})

function onAddClick() {
  haptic.impactOccurred('medium')
  emit('addToBag', props.product)
}

function onRemoveClick() {
  haptic.impactOccurred('medium')
  emit('removeFromBag', props.product)
}
</script>

<style scoped lang="sass">
.product-card
  display: flex
  flex-direction: column
  align-items: center
  //background-color: #f6f5f4
  background-color: var(--color-background-secondary)
  border-radius: 16px
  padding: 12px
  width: 100%

  &__image
    width: 100%
    border-radius: 12px 12px 8px 8px

  &__info
    display: flex
    flex-direction: column
    justify-content: flex-end
    height: 100%
    width: 100%

  &__title
    margin-top: 24px
    font-size: 20px
    font-weight: 600

  &__price
    margin-top: 16px

  &__buttons
    display: flex
    flex-direction: column
    gap: 12px
    margin-top: 16px

  &__button
    width: 100%

  &__controls
    display: flex
    align-items: center
    justify-content: space-between
    width: 100%

    &-button
      width: 36px
      height: 36px
      font-size: 20px
      line-height: 20px

    &-value
      font-weight: 500
      font-size: 20px
</style>