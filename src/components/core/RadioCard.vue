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
      <p>{{ faker.lorem.words(6) }}</p>
    </div>
  </article>
</template>
<script setup lang="ts">
import {faker} from "@faker-js/faker";
import PlayBtn from "@/components/core/home/PlayBtn.vue";
import { getRandomLoremFlickerImage } from "@/helpers/util";
</script>
