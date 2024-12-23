<template>
  <CardWithContextMenu
    :menu-items="menuItems"
  >
    <div class="position-relative">
      <CustomImage
        :src="radio.image"
        alt="artist"
        class="main"
      />
      <PlayBtn />
    </div>
    <div class="px-2 pb-2">
      <p>{{ radio.subtitle }}</p>
    </div>
  </CardWithContextMenu>
</template>
<script setup lang="ts">
import {faker} from "@faker-js/faker";
import PlayBtn from "@/components/core/home/PlayBtn.vue";
import CardWithContextMenu from "@/components/designComponents/CardWithContextMenu.vue";
import CustomImage from "@/components/designComponents/CustomImage.vue";

defineProps({
  menuItems: {
    type: Array,
    default: () => [],
  },
})

const radio = {
  image: faker.image.urlPicsumPhotos({width: 200, height: 200, blur: 0}),
  subtitle: faker.lorem.words(6),
}
</script>
