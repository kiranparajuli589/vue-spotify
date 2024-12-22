<template>
  <CardWithContextMenu
    :menu-items="AlbumCardContextMenu"
    :to="`/album/${faker.word.sample({length: 12})}`"
  >
    <div class="position-relative">
      <img
        :src="album.image"
        alt="artist"
        class="main"
      >
      <PlayBtn />
    </div>
    <div class="px-2 pb-2">
      <h3 class="text-capitalize">
        {{ album.title }}
      </h3>
      <p>{{ album.subtitle }}</p>
    </div>
  </CardWithContextMenu>
</template>
<script setup lang="ts">
import {faker} from "@faker-js/faker";
import PlayBtn from "@/components/core/home/PlayBtn.vue";
import CardWithContextMenu from "@/components/designComponents/CardWithContextMenu.vue";
import {AlbumCardContextMenu} from "@/constants/contextMenuItems.js";

defineProps({
  album: {
    type: Object,
    default: () => ({
      image: faker.image.urlPicsumPhotos({width: 200, height: 200, blur: 0}),
      title: faker.lorem.words(2),
      subtitle: faker.lorem.words(2),
    })
  }
})
</script>
<style scoped lang="sass">
article
  padding: .3rem .5rem
  img.main
    border-radius: 8px

</style>
