import { defineStore } from 'pinia'

export const AlbumDetailView = {
  List: "LIST",
  Compact: "COMPACT"
}

export const useAppStore = defineStore('app', {
  state: () => ({
    isAppNavCollapsed: false,
    albumDetailViewAs: AlbumDetailView.List
  }),
  actions: {
    toggleAppNav() {
      this.isAppNavCollapsed = !this.isAppNavCollapsed
    },
    toggleAlbumDetailView() {
      this.albumDetailViewAs = this.albumDetailViewAs === AlbumDetailView.List
        ? AlbumDetailView.Compact
        : AlbumDetailView.List
    }
  }
})
