<template>
  <div class="slider" :style="{ 'background-color': backgroundColor }">
    <div class="slider__inner scrollbar-hidden">
      <div class="slider__tab">Наггетсы</div>
      <div class="slider__tab">Курочка</div>
      <div class="slider__tab">Картошка</div>
      <div class="slider__tab">Роллы</div>
      <div class="slider__tab">Салаты</div>
      <div class="slider__tab">Напитки</div>
      <div class="slider__tab">Соусы</div>
    </div>
  </div>
</template>

<script setup>
import { useWebAppTheme } from 'vue-tg'
import { computed, onMounted } from 'vue'

const theme = useWebAppTheme()

const backgroundColor = computed(() => theme.headerColor)

onMounted(() => theme.setHeaderColor('#ffffff'))
</script>

<style scoped lang="sass">
.slider
  position: sticky
  top: 0
  background-color: white
  width: 100%
  scrollbar-width: none

  &__inner
    display: flex
    justify-content: flex-start
    gap: 12px
    padding: 12px 0
    overflow-x: scroll

  &__tab
    background-color: #f6f5f4
    color: black
    font-size: 18px
    padding: 8px 12px
    border-radius: 12px
    cursor: pointer
    transition: opacity 0.3s ease
    user-select: none

    &:hover
      opacity: 0.7
</style>