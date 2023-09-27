<template>
  <div class="product-card">
    <Image :src="product.image" class="product-card__image" />

    <div class="product-card__info">
      <div class="product-card__title">{{ product.title }}</div>

      <div class="product-card__price">{{ product.price }} р.</div>

      <Button is-primary class="product-card__button" @click="onAddClick">Добавить</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from '@/ui/Image.vue'
import Button from '@/ui/Button.vue'

import { useWebAppHapticFeedback } from 'vue-tg'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const haptic = useWebAppHapticFeedback()

const emit = defineEmits(['addToBag'])

function onAddClick() {
  haptic.impactOccurred('heavy')

  emit('addToBag', props.product)
}
</script>

<style scoped lang="sass">
.product-card
  display: flex
  flex-direction: column
  align-items: center
  background-color: #f6f5f4
  border-radius: 16px
  padding: 12px
  width: 100%

  &__image
    width: 100%
    border-radius: 12px 12px 8px 8px
    //background-color: white

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

  &__button
    margin-top: 16px
    width: 100%
</style>