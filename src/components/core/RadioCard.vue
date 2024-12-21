<template>
  <CardWithContextMenu
    :menu-items="menuItems"
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
  </CardWithContextMenu>
</template>
<script setup lang="ts">
import {faker} from "@faker-js/faker";
import PlayBtn from "@/components/core/home/PlayBtn.vue";
import { getRandomLoremFlickerImage } from "@/helpers/util";
import CardWithContextMenu from "@/components/designComponents/CardWithContextMenu.vue";

defineProps({
  menuItems: {
    type: Array,
    default: () => [],
  },
})
</script>
