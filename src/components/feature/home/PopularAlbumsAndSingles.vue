<template>
  <GridSection
    :class-name="className"
    :title="title"
    :no-show-all="noShowAll"
    :no-header="noHeader"
  >
    <template #articles>
      <AlbumCard v-for="i in iterSize" :key="i" />
    </template>
  </GridSection>
</template>
<script setup>
import { defineProps, computed } from 'vue'
import GridSection from "@/components/core/home/GridSection.vue";
import useHomeSectionReactiveGridSize from "@/composables/useHomeSectionReactiveGridSize.js";
import AlbumCard from "@/components/core/AlbumCard.vue";

const {size} = useHomeSectionReactiveGridSize()


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
  cardSize: {
    type: [Number, null],
    default: null
  }
})

const iterSize = computed(() => props.cardSize
  ? props.cardSize
  : size.value
)
</script>
