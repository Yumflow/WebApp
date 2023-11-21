import { defineStore } from 'pinia'
import type { ILayoutStore } from '@/types/layout'

const useLayoutStore = defineStore('layout', {
  state: (): ILayoutStore => ({
    isAppLoading: false,
  }),

  actions: {
    startLoading() {
      this.isAppLoading = true
    },

    stopLoading() {
      this.isAppLoading = false
    }
  }
})

export default useLayoutStore