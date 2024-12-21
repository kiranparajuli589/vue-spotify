<template>
  <GridSection
    className="popular-artists"
    title="Popular Artists"
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
            class="main elevation-8"
          />
          <PlayBtn />
        </div>
        <div class="px-2 pb-2">
          <h3>{{faker.person.fullName()}}</h3>
          <p>Artist</p>
        </div>
      </article>
    </template>
    <div class="gradient" />
  </GridSection>
</template>
<script setup>
import GridSection from "@/components/core/home/GridSection.vue";
import useHomeSectionReactiveGridSize from "@/composables/useHomeSectionReactiveGridSize.js";
import {getRandomLoremFlickerImage} from "@/helpers/util.js";
import {faker} from "@faker-js/faker";
import PlayBtn from "@/components/core/home/PlayBtn.vue";

const {size} = useHomeSectionReactiveGridSize()
</script>
<style lang="scss">
section.popular-artists {
  article {
    padding: .3rem .5rem;
    img.main {
      border-radius: 50% !important;
      aspect-ratio: 1;
      margin-bottom: .5rem;
    }
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
