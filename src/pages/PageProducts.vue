<template>
  <div v-if="categories.length" class="page page-products">
    <Slider :categories="categories" />

    <ProductList :products="products" :categories="categories" />

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
import { onMounted, ref } from 'vue'
import { useBagStore } from '@/stores'
import { getCategories, getProducts } from '@/services/menu'

const router = useRouter()
const bagStore = useBagStore()

const products = ref([])
const categories = ref([])

onMounted(async () => {
  products.value = await getProducts()
  categories.value = await getCategories()
})

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