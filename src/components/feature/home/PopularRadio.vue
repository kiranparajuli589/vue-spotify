<template>
  <GridSection
    class-name="popular-radio"
    :title="title"
  >
    <template #articles>
      <article
        v-for="n in size"
        :key="n"
      >
        <div class="position-relative">
          <img
            :src="getRandomLoremFlickerImage()"
            alt="artist"
            class="main"
          >
          <PlayBtn />
        </div>
        <div class="px-2 pb-2">
          <p>{{ faker.lorem.words(6) }}</p>
        </div>
      </article>
    </template>
  </GridSection>
</template>
<script setup>
import GridSection from "@/components/core/home/GridSection.vue";
import PlayBtn from "@/components/core/home/PlayBtn.vue";
import {getRandomLoremFlickerImage} from "@/helpers/util.js";
import {faker} from "@faker-js/faker";
import useHomeSectionReactiveGridSize from "@/composables/useHomeSectionReactiveGridSize.js";

defineProps({
  title: {
    type: String,
    default: 'Popular Radio'
  }
})

const {size} = useHomeSectionReactiveGridSize()
</script>
