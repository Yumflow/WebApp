<template>
  <div class="page page-products">
    <Slider />

    <ProductList :products="products" />

    <AppFooter class="page-products__footer" />

    <MainButton v-if="bagStore.products.length" text="Перейти в корзину" @click="onMainClick" />
  </div>
</template>

<script setup lang="ts">
import ProductList from '@/modules/ProductList'
import AppFooter from '@/modules/AppFooter'
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
    id: 101,
  },

  {
    title: 'Кранчес 3 шт.',
    image: './images/crunches.png',
    price: '1.89',
    category: 'crunches',
    id: 102
  },

  {
    title: 'Кранчес 6 шт.',
    image: './images/crunches.png',
    price: '3.89',
    category: 'crunches',
    id: 103
  },

  {
    title: 'Крылья 6 шт.',
    image: './images/chicken.png',
    price: '5.79',
    category: 'nuggets',
    id: 104
  },

  {
    title: 'Крылья 9 шт.',
    image: './images/chicken.png',
    price: '8.79',
    category: 'nuggets',
    id: 105
  },

  {
    title: 'Крылья 12 шт.',
    image: './images/chicken.png',
    price: '12.79',
    category: 'nuggets',
    id: 106
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

  &__footer
    margin-top: 12px
</style>