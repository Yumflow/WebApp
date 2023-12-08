<template>
  <div class="page page-bag">
    <div v-if="isBagEmpty" class="page-bag__nothing">
      <Lottie :animation-data="lotties.notFound" class="page-bag__nothing-image" />
      <div class="page-bag__nothing-text">Пока что корзина пуста</div>
    </div>

    <div v-else class="page-bag__body">
      <div class="heading-1">Корзина</div>

      <ProductTable :products="bagStore.products" />
    </div>

    <BackButton @click="onBackClick" />
    <MainButton v-if="!isBagEmpty" @click="onConfirmClick" :text="`Оформить заказ на ${bagStore.totalPrice} руб.`" />
  </div>
</template>

<script setup>
import ProductTable from '@/modules/ProductTable'
import { BackButton, MainButton, useWebAppPopup } from 'vue-tg'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useBagStore } from '@/stores'
import lotties from '@/assets/lotties'

const router = useRouter()
const bagStore = useBagStore()
const popup = useWebAppPopup()

const isBagEmpty = computed(() => !bagStore.products.length)

function onBackClick() {
  router.back()
}

function onConfirmClick() {
  popup.showAlert('OK!')
}
</script>

<style scoped lang="sass">
.page-bag
  display: flex
  flex-direction: column
  padding-top: 12px

  &__nothing
    display: flex
    flex-direction: column
    align-items: center
    max-width: 40%
    margin: 28px auto

    &-text
      text-align: center
      color: var(--color-text-hint)
      margin-top: 24px
      font-size: 16px
</style>

