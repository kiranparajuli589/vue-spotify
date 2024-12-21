import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    appNav: {
      isCollapsed: false,
    }
  }),
  actions: {
    toggleAppNav() {
      this.appNav.isCollapsed = !this.appNav.isCollapsed
    }
  }
})
