<template>
  <div class="product-list">
    <ProductCard
      v-for="product in products"
      :product="product"
      @addToBag="addToBag"
    />
  </div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'

import { useBagStore } from '@/stores'

const bagStore = useBagStore()

defineProps({
  products: {
    type: Array,
    required: true,
  }
})

function addToBag(product) {
  bagStore.addItem(product)
}
</script>

<style scoped lang="sass">
.product-list
  display: grid
  grid-gap: 12px
  grid-template-columns: 1fr 1fr
  width: 100%
</style>