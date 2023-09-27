<template>
  <div class="page page-bag">
    <div v-if="bagStore.items.length" class="page-bag__body">
      <div class="heading-1">Ваша корзина</div>

      <ProductTable :products="bagStore.items" />
    </div>

    <div v-else class="page-bag__nothing">
      <Lottie :animation-data="lotties.notFound" class="page-bag__nothing-image" />
      <div class="page-bag__nothing-text">Пока что корзина пуста</div>
    </div>

    <BackButton @click="onBackClick" />
    <MainButton @click="onConfirmClick" text="Оформить заказ" />
  </div>
</template>

<script setup>
import ProductTable from '@/modules/ProductTable'

import { BackButton, MainButton, useWebAppPopup } from 'vue-tg'
import { useRouter } from 'vue-router'
import lotties from '@/assets/lotties'
import { useBagStore } from '@/stores'

const router = useRouter()
const bagStore = useBagStore()
const popup = useWebAppPopup()

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
  //justify-content: center

  &__nothing
    display: flex
    flex-direction: column
    align-items: center
    max-width: 40%
    margin: 28px auto

    &-text
      text-align: center
      color: grey
      margin-top: 24px
      font-size: 16px
</style>

