<template>
  <CardWithContextMenu
    :menu-items="ArtistCardContextMenu"
    :to="`/artist/${artist.id}`"
  >
    <div class="position-relative">
      <img
        :src="artist.image"
        alt="artist"
        class="main elevation-8"
      >
      <PlayBtn />
    </div>
    <div class="px-2 pb-2">
      <h3>
        {{ artist.title }}
      </h3>
      <p v-if="profile">
        Profile
      </p>
      <p v-else>
        {{ artist.subtitle }}
      </p>
    </div>
  </CardWithContextMenu>
</template>
<script setup>
import { faker } from "@faker-js/faker";
import PlayBtn from "@/components/core/home/PlayBtn.vue";
import CardWithContextMenu from "@/components/designComponents/CardWithContextMenu.vue";
import {ArtistCardContextMenu} from "@/constants/contextMenuItems.js";
import {getAvatarUrl} from "@/helpers/util.js";

defineProps({
  profile: {
    type: Boolean,
    default: false
  },
  artist: {
    type: Object,
    default: () => ({
      id: faker.number.bigInt(),
      image: getAvatarUrl(),
      title: faker.person.fullName(),
      subtitle: "Artist",
    })
  }
})
</script>

<style lang="scss" scoped>
article {
  padding: .3rem .5rem;

  img.main {
    border-radius: 50% !important;
    width: 100% !important;
  }
}
</style>
