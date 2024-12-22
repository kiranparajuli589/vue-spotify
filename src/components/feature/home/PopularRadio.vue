<template>
  <GridSection
    class-name="popular-radio"
    :title="title"
  >
    <template #articles>
      <RadioCard
        v-for="i in computedSize"
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

const props = defineProps({
  title: {
    type: String,
    default: 'Popular Radio'
  },
  menuItems: {
    type: Array,
    default: () => [],
  },
  size: {
    type: [Number, null],
    default: null
  },
})

const computedSize = useHomeSectionReactiveGridSize({ size: props?.size })
</script>
