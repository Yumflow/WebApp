<template>
  <div class="product-list">
    <div
      v-for="category in categories"
      class="product-list__category category"
      :id="category.id"
    >
      <div :id="`category-${category.id}`" class="product-list__category-id"></div>

      <div class="product-list__category-title">{{ category.title }}</div>

      <div class="product-list__category-body">
        <ProductCard
          v-for="product in products.filter(p => category.id === p.category)"
          :product="product"
          @addToBag="addToBag"
          @removeFromBag="removeFromBag"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { useBagStore } from '@/stores'
import type { IProduct } from '@/types/product'

defineProps({
  products: {
    type: Array,
    required: true,
  },

  categories: {
    type: Array,
    required: true,
  },
})

const bagStore = useBagStore()

function addToBag(product: IProduct) {
  bagStore.add(product)
}

function removeFromBag(product: IProduct) {
  bagStore.remove(product)
}
</script>

<style scoped lang="sass">
.product-list
  width: 100%
  display: flex
  flex-direction: column
  gap: 48px

  &__category
    position: relative
    width: 100%

    &-id
      opacity: 0
      visibility: hidden
      pointer-events: none
      position: absolute
      top: -74px
      height: 1px

    &-title
      font-size: 28px
      font-weight: 700
      margin-bottom: 16px
      padding-left: 12px

    &-body
      display: grid
      grid-gap: 12px
      grid-template-columns: 1fr 1fr
      width: 100%
</style>