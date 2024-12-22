<template>
  <GridSection
    :class-name="className"
    :title="title"
    :no-show-all="noShowAll"
    :no-header="noHeader"
  >
    <template #articles>
      <ArtistCard
        v-for="i in computedSize"
        :key="i"
        :profile="profile"
      />
    </template>
    <div v-if="showGradient" class="gradient" />
  </GridSection>
</template>
<script setup>
import {computed, defineProps} from "vue";
import GridSection from "@/components/core/home/GridSection.vue";
import useHomeSectionReactiveGridSize from "@/composables/useHomeSectionReactiveGridSize.js";
import ArtistCard from "@/components/core/ArtistCard.vue";

const {size: gridSize} = useHomeSectionReactiveGridSize()
const computedSize = computed(() => props.size ?? gridSize)

const props = defineProps({
  title: {
    type: String,
    default: "Popular Artists"
  },
  noShowAll: {
    type: Boolean,
    default: true
  },
  noHeader: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: "popular-artists"
  },
  size: {
    type: [Number, null],
    default: null
  },
  profile: {
    type: Boolean,
    default: false,
  },
  showGradient: {
    type: Boolean,
    default: true
  }
})
</script>
<style lang="scss">
.popular-artists {
  img {
    border-radius: 50% !important;
  }
  .gradient {
    height: 256px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: rgb(18 18 18) linear-gradient(rgb(31 31 31), #121212);
    z-index: 1;
  }
}
</style>
