<template>
  <div class="song-title">
    <img
      :src="rowData.thumbnail"
      alt="music"
    >
    <div>
      <h4>{{rowData.title}}</h4>
      <p>{{rowData.artist}}</p>
    </div>
  </div>
</template>
<script setup>
defineProps({
  rowData: Object,
  rowIndex: Number
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
</style>
