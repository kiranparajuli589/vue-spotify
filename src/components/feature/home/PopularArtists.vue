<template>
  <GridSection
    class-name="popular-artists"
    title="Popular Artists"
  >
    <template #articles>
      <ArtistCard v-for="i in size" :key="i" />
    </template>
    <div class="gradient" />
  </GridSection>
</template>
<script setup>
import GridSection from "@/components/core/home/GridSection.vue";
import useHomeSectionReactiveGridSize from "@/composables/useHomeSectionReactiveGridSize.js";
import ArtistCard from "@/components/core/ArtistCard.vue";

const {size} = useHomeSectionReactiveGridSize()
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
