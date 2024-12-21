<template>
  <article>
    <div class="position-relative">
      <img
        :src="getRandomLoremFlickerImage()"
        alt="artist"
        class="main"
      >
      <PlayBtn />
    </div>
    <div class="px-2 pb-2">
      <h3 class="text-capitalize">
        {{ faker.lorem.words(2) }}
      </h3>
      <p>Artist</p>
    </div>
  </article>
</template>
<script setup lang="ts">
import {faker} from "@faker-js/faker";
import PlayBtn from "@/components/core/home/PlayBtn.vue";
import { getRandomLoremFlickerImage } from "@/helpers/util";
</script>
<style scoped lang="sass">
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
