import { defineStore } from 'pinia'

const useBagStore = defineStore('bag', () => {
  return {
    items: [],

    addItem(item: object) {
      // @ts-ignore
      this.items.push(item)
    }
  }
})

export default useBagStore