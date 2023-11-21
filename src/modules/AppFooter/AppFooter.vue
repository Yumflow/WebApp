<template>
  <div class="footer">
    <Image src="./images/yumflow-with-title.svg" class="footer__logo" />

    <!--    <div class="footer__text">-->
    <!--      Powered by-->
    <!--      <a href="#" target="_blank" class="footer__link" @click="onLinkClick">Yumflow</a>-->
    <!--    </div>-->

<!--    <div class="footer__animation">-->
<!--      <Vue3Lottie :animation-data="YummyLottie" />-->
<!--    </div>-->
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
.footer
  display: flex
  align-items: center
  justify-content: center
  padding: 24px 0
  width: 100%

  &__logo
    color: grey
    height: 36px
    cursor: pointer
    transition: color 0.3s ease
    user-select: none

    &:hover
      color: #FFB000

  &__text
    color: grey

  &__link
    color: inherit

  &__animation
    height: 56px
    width: 56px
</style>