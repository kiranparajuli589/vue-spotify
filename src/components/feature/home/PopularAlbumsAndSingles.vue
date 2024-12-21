<template>
  <GridSection
    class-name="popular-albums-and-singles"
    title="Popular Albums & Singles"

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
          />
          <PlayBtn />
        </div>
        <div class="px-2 pb-2">
          <h3 class="text-capitalize">
            {{faker.lorem.words(2)}}
          </h3>
          <p>Artist</p>
        </div>
      </article>
    </template>
  </GridSection>
</template>
<script setup>
import GridSection from "@/components/core/home/GridSection.vue";
import {getRandomLoremFlickerImage} from "@/helpers/util.js";
import {faker} from "@faker-js/faker";
import useHomeSectionReactiveGridSize from "@/composables/useHomeSectionReactiveGridSize.js";
import PlayBtn from "@/components/core/home/PlayBtn.vue";

const {size} = useHomeSectionReactiveGridSize()
</script>
<style lang="sass" scoped>
section.popular-albums-and-singles
  article
    padding: .3rem .5rem
    img.main
      border-radius: 8px
      margin-bottom: .5rem
      aspect-ratio: 1
    h3
      color: white
      font-size: 18px
      text-align: start
    p
      color: white
      font-size: 14px
      text-align: start

</style>
