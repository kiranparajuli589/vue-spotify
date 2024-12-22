<template>
  <div class="song-title">
    <img
      v-if="rowData.thumbnail"
      :src="rowData.thumbnail"
      alt="music"
    >
    <div>
      <h4 class="text-uppercase">
        <a href="#">
          {{ rowData.title }}
        </a>
      </h4>
      <p v-if="!compact">{{ rowData.artist }}</p>
    </div>
  </div>
</template>
<script setup>
defineProps({
  rowData: {
    type: Object,
    required: true
  },
  rowIndex: {
    type: Number,
    required: true
  },
  compact: {
    type: Boolean,
    default: false
  }
})
</script>
<style lang="sass" scoped>
.song-title
  display: flex
  align-items: center
  gap: 1rem
  img
    width: 60px
    height: 60px
    border-radius: 8px
    object-fit: cover
  h4
    font-weight: 500
    color: var(--text-primary)
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
  p
    font-size: .875rem
    color: rgb(var(--v-theme-secondary))
</style>
