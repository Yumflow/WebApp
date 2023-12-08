<template>
  <div class="made-by">
    <Image src="./images/yumflow-with-title.svg" class="made-by__logo" />

<!--    <div class="made-by__text">-->
<!--      Powered by-->
<!--      <a href="#" target="_blank" class="made-by__link" @click="onLinkClick">Yumflow</a>-->
<!--    </div>-->

    <div class="made-by__animation">
      <Vue3Lottie :animation-data="YummyLottie" />
    </div>
  </div>
</template>

<script setup>
import { useWebAppNavigation } from 'vue-tg'
import { Vue3Lottie } from 'vue3-lottie'

import YummyLottie from '@/assets/lotties/yummy.json'
import Image from '@/ui/Image.vue'

const navigation = useWebAppNavigation()

function onLinkClick(e) {
  e.preventDefault()
  navigation.openLink('https://t.me/yumflow')
}
</script>

<style scoped lang="sass">
.made-by
  display: flex
  align-items: center
  justify-content: space-between
  padding: 24px 12px
  width: 100%

  &__logo
    color: var(--color-text-hint)
    height: 40px
    cursor: pointer
    transition: color 0.3s ease

    &:hover
      color: #E9B824

  &__text
    color: var(--color-text-hint)

  &__link
    color: inherit

  &__animation
    height: 56px
    width: 56px
</style>