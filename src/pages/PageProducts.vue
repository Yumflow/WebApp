<template>
  <div v-if="categories.length" class="page page-products">
    <Slider
      :categories="categories"
      :current-category-id="currentCategoryId"
      class="page-products__header"
    />

    <ProductList
      :products="products"
      :categories="categories"
      class="page-products__list"
    />

    <AppFooter class="page-products__footer" />

<!--    <MainButton-->
<!--      v-if="bagStore.products.length"-->
<!--      text="Перейти в корзину"-->
<!--      @click="onMainClick"-->
<!--    />-->

    <MainPanel v-if="bagStore.products.length" class="page-products__panel" />
  </div>
</template>

<script setup lang="ts">
import ProductList from '@/modules/ProductList'
import AppFooter from '@/modules/AppFooter'
import Slider from '@/ui/Slider.vue'
import { MainButton } from 'vue-tg'
import { useRouter } from 'vue-router'
import { onMounted, onUnmounted, Ref, ref } from 'vue'
import { useBagStore } from '@/stores'
import { getCategories, getProducts } from '@/services/menu'
import MainPanel from '@/modules/MainPanel/MainPanel.vue'

const router = useRouter()
const bagStore = useBagStore()

const products = ref([])
const categories = ref([])
const currentCategoryId = ref('')

onMounted(async () => {
  products.value = await getProducts()
  categories.value = await getCategories()
  currentCategoryId.value = categories.value[0].id

  window.addEventListener('scroll', getCurrentCategory)
})

onUnmounted(() => window.removeEventListener('scroll', getCurrentCategory))

function onMainClick() {
  router.push('/bag')
}

function getCurrentCategory() {
  const elements = document.elementsFromPoint(window.innerWidth / 3, window.innerHeight / 2.5)
  const categoryElement = elements.find(e => e.classList.contains('category'))

  if (categoryElement && categoryElement.id) {
    currentCategoryId.value = categoryElement.id
  }
}
</script>

<style lang="sass">
.page-products
  display: flex
  flex-direction: column
  align-items: center
  width: 100%

  &__list
    margin-top: 12px

  &__footer
    margin-top: 12px
</style>