<template>
  <CardWithContextMenu
    :menu-items="ArtistCardContextMenu"
  >
    <div class="position-relative">
      <img
        :src="getRandomLoremFlickerImage()"
        alt="artist"
        class="main elevation-8"
      >
      <PlayBtn />
    </div>
    <div class="px-2 pb-2">
      <h3>{{ faker.person.fullName() }}</h3>
      <p>Artist</p>
    </div>
  </CardWithContextMenu>
</template>
<script setup>
import { faker } from "@faker-js/faker";
import PlayBtn from "@/components/core/home/PlayBtn.vue";
import { getRandomLoremFlickerImage } from "@/helpers/util";
import CardWithContextMenu from "@/components/designComponents/CardWithContextMenu.vue";
import {ArtistCardContextMenu} from "@/constants/contextMenuItems.js";
</script>

<style lang="scss" scoped>
article {
  padding: .3rem .5rem;

  img.main {
    border-radius: 50% !important;
  }
}
</style>
