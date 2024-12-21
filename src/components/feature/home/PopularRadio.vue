<template>
  <GridSection
    class-name="popular-radio"
    :title="title"
  >
    <template #articles>
      <RadioCard
        v-for="i in size"
        :key="i"
        :menu-items="menuItems"
      />
    </template>
  </GridSection>
</template>
<script setup>
import GridSection from "@/components/core/home/GridSection.vue";
import useHomeSectionReactiveGridSize from "@/composables/useHomeSectionReactiveGridSize.js";
import RadioCard from "@/components/core/RadioCard.vue";

defineProps({
  title: {
    type: String,
    default: 'Popular Radio'
  },
  menuItems: {
    type: Array,
    default: () => [],
  },
})

const {size} = useHomeSectionReactiveGridSize()
</script>
