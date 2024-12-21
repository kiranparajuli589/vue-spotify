<template>
  <GridSection
    class-name="popular-radio"
    :title="title"
  >
    <template #articles>
      <RadioCard v-for="i in size" :key="i" />
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
  }
})

const {size} = useHomeSectionReactiveGridSize()
</script>
