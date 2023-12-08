<template>
  <div class="footer">
    <Image
      src="./images/yumflow-with-title.svg"
      class="footer__logo"
      @click="onLinkClick"
    />
  </div>
</template>

<script setup>
import Image from '@/ui/Image.vue'
import { useWebAppNavigation } from 'vue-tg'

const navigation = useWebAppNavigation()

function onLinkClick(e) {
  e.preventDefault()
  navigation.openTelegramLink('https://t.me/yumflow')
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
    color: var(--color-text-hint)
    height: 36px
    cursor: pointer
    transition: color 0.3s ease
    user-select: none

    &:hover
      color: var(--color-background-accent)
</style>