<template>
  <CardWithContextMenu
    :menu-items="AlbumCardContextMenu"
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
      <h3 class="text-capitalize">
        {{ faker.lorem.words(2) }}
      </h3>
      <p>Artist</p>
    </div>
  </CardWithContextMenu>
</template>
<script setup lang="ts">
import {faker} from "@faker-js/faker";
import PlayBtn from "@/components/core/home/PlayBtn.vue";
import { getRandomLoremFlickerImage } from "@/helpers/util";
import CardWithContextMenu from "@/components/designComponents/CardWithContextMenu.vue";
import {AlbumCardContextMenu} from "@/constants/contextMenuItems.js";
</script>
<style scoped lang="sass">
article
  padding: .3rem .5rem
  img.main
    border-radius: 8px

</style>
