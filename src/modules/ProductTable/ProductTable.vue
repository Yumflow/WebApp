<template>
  <div class="product-table">
    <div v-for="({ product, count }) in products" class="product-table__product">
      <div class="product-table__product-header">
        <div class="product-table__product-image">
          <Image :src="product.image" />
        </div>

        <div class="product-table__product-info">
          <div class="product-table__product-title">{{ product.title }}</div>
          <div class="product-table__product-description">Вкуснейшая курочка на диком западе!</div>
        </div>
      </div>

      <div class="product-table__product-bottom">
        <div class="product-table__product-price">{{ product.price }} руб.</div>

        <div class="product-table__controls">
          <div class="product-table__controls-button" @click="onRemoveClick(product)">-</div>
          <div class="product-table__controls-value">{{ count }}</div>
          <div class="product-table__controls-button" @click="onAddClick(product)">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Image from '@/ui/Image.vue'
import { useBagStore } from '@/stores'

defineProps({
  products: {
    type: Array,
    required: true,
  },
})

const bagStore = useBagStore()

function onAddClick(product) {
  bagStore.add(product)
}

function onRemoveClick(product) {
  bagStore.remove(product)
}
</script>

<style scoped lang="sass">
.product-table
  display: flex
  flex-direction: column
  gap: 24px

  &__product
    display: flex
    flex-direction: column

    &-header
      display: flex
      gap: 12px

    &-bottom
      display: flex
      align-items: center
      justify-content: space-between
      border-top: 1px solid rgba(0, 0, 0, 0.05)
      padding-top: 12px
      margin-top: 12px

    &-image
      width: 82px

      img
        width: inherit
        height: auto

    &-title
      font-size: 20px
      font-weight: 600

    &-description
      color: gray

    &-price
      font-weight: 600
      font-size: 18px

  &__controls
    font-size: 18px
    display: flex
    justify-content: space-between
    align-items: center
    padding: 4px 12px
    gap: 16px
    background-color: lavender
    border-radius: 8px
    width: 100px
    user-select: none

    &-button
      position: relative
      bottom: 1px
      font-size: 22px
      line-height: 19px
      cursor: pointer

    &-value
      font-weight: 500

</style>