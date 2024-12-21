<template>
  <GridSection
    class-name="popular-albums-and-singles"
    title="Popular Albums & Singles"
  >
    <template #articles>
      <AlbumCard v-for="i in size" :key="i" />
    </template>
  </GridSection>
</template>
<script setup>
import GridSection from "@/components/core/home/GridSection.vue";
import useHomeSectionReactiveGridSize from "@/composables/useHomeSectionReactiveGridSize.js";
import AlbumCard from "@/components/core/AlbumCard.vue";

const {size} = useHomeSectionReactiveGridSize()
</script>
