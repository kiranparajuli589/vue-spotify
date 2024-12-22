<template>
  <GridSection
    :class-name="className"
    :title="title"
    :no-show-all="noShowAll"
    :no-header="noHeader"
  >
    <template #articles>
      <AlbumCard v-for="i in computedSize" :key="i" />
    </template>
  </GridSection>
</template>
<script setup>
import GridSection from "@/components/core/home/GridSection.vue";
import useHomeSectionReactiveGridSize from "@/composables/useHomeSectionReactiveGridSize.js";
import AlbumCard from "@/components/core/AlbumCard.vue";

const props = defineProps({
  title: {
    type: String,
    default: "Popular Albums & Singles"
  },
  noShowAll: {
    type: Boolean,
    default: false
  },
  noHeader: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: "popular-albums-and-singles"
  },
  size: {
    type: [Number, null],
    default: null
  },
})
const computedSize = useHomeSectionReactiveGridSize({ size: props?.size })
</script>
