<template>
  <div class="page page-products">
    <Slider />

    <ProductList :products="products" />

    <MainButton v-if="bagStore.items.length" text="Перейти в корзину" @click="onMainClick" />
  </div>
</template>

<script setup lang="ts">
import ProductList from '@/modules/ProductList/ProductList.vue'
import Slider from '@/ui/Slider.vue'

import { MainButton } from 'vue-tg'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useBagStore } from '@/stores'

const router = useRouter()
const bagStore = useBagStore()

const products = ref([
  {
    title: 'Наггетсы',
    image: './images/nuggets.png',
    price: '0.79',
    category: 'nuggets',
  },

  {
    title: 'Крылья 6 шт.',
    image: './images/chicken.png',
    price: '5.79',
    category: 'nuggets',
  },

  {
    title: 'Крылья 9 шт.',
    image: './images/chicken.png',
    price: '8.79',
    category: 'nuggets',
  },

  {
    title: 'Крылья 12 шт.',
    image: './images/chicken.png',
    price: '12.79',
    category: 'nuggets',
  },
])

function onMainClick() {
  router.push('/bag')
}
</script>

<style lang="sass">
.page-products
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
</style>