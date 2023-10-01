import { defineStore } from 'pinia'
import { BigNumber } from '@/helpers/number'
import type { IBagState, IProduct } from '@/types/product'

const useBagStore = defineStore('bag', {
  state: (): IBagState => ({
    products: [],
  }),

  getters: {
    totalPrice(state) {
      let totalPrice = new BigNumber(0)

      for (let { product, count } of state.products) {
        const productTotalPrice = new BigNumber(count).multipliedBy(product.price).toString()
        totalPrice = totalPrice.plus(productTotalPrice)
      }

      return totalPrice.toString()
    }
  },

  actions: {
    add(product: IProduct) {
      const productIndex = this.products.findIndex(p => p.product.id === product.id)

      if (productIndex >= 0) {
        this.products[productIndex].count += 1
      } else {
        this.products.push({ product, count: 1 })
      }
    },

    remove(product: IProduct) {
      const productIndex = this.products.findIndex(p => p.product.id === product.id)

      this.products[productIndex].count -= 1

      if (this.products[productIndex].count === 0) {
        this.products.splice(productIndex, 1)
      }
    }
  }
})

export default useBagStore