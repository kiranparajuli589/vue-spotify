<template>
  <article
    @contextmenu.prevent="openMenu"
    @click="menu = false"
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

    <v-menu
      v-model="menu"
      :style="{ top: `${menuPosition.y}px`, left: `${menuPosition.x}px` }"
      class="custom-menu elevation-8"
    >
      <VCard
        id="artist-menu"
        style="width: 200px"
      >
        <VList>
          <VListItem
            v-for="item in menuItems"
            :key="item.title"
            @click="menu = false"
            :style="{
              borderTop: item.bottom ? '1px solid rgba(255,255,255,0.2)' : 'none'
            }"
          >
            <template #prepend>
              <VImg
                v-if="item.icon"
                :src="item.icon"
                width="24"
                height="24"
              />
            </template>
            <VListItemTitle class="ml-2">{{ item.title }}</VListItemTitle>

            <template #append v-if="item.endIcon">
              <VImg
                :src="item.endIcon"
                width="24"
                height="24"
              />
            </template>
          </VListItem>
        </VList>
      </VCard>
    </v-menu>
  </article>
</template>

<script setup>
import {ref} from "vue";
import {faker} from "@faker-js/faker";
import PlayBtn from "@/components/core/home/PlayBtn.vue";
import {getRandomLoremFlickerImage} from "@/helpers/util";

const menu = ref(false);
const menuPosition = ref({x: 0, y: 0});

const openMenu = (event) => {
  menu.value = true;
  menuPosition.value = {x: event.clientX, y: event.clientY};
};
const menuItems = [
  {
    title: "Follow",
    icon: new URL('@/assets/icons/contextMenu/follow.svg', import.meta.url).href
  },
  {
    title: "Don't play this artist",
    icon: new URL('@/assets/icons/contextMenu/block.svg', import.meta.url).href
  },
  {
    title: "Go to artist radio",
    icon: new URL('@/assets/icons/contextMenu/radio.svg', import.meta.url).href
  },
  {
    title: "Report",
    icon: new URL('@/assets/icons/contextMenu/report.svg', import.meta.url).href,
    endIcon: new URL('@/assets/icons/contextMenu/open_in_new.svg', import.meta.url).href
  },
  {
    title: "Share",
    icon: new URL('@/assets/icons/contextMenu/share.svg', import.meta.url).href,
    endIcon: new URL('@/assets/icons/contextMenu/arrow_right.svg', import.meta.url).href,
    children: [
      {
        title: "Copy link to artist",
        icon: new URL('@/assets/icons/contextMenu/copy.svg', import.meta.url).href
      },
      {
        title: "Embed artist",
        icon: new URL('@/assets/icons/contextMenu/embed.svg', import.meta.url).href
      }
    ]
  },
  {
    title: "Open in Desktop app",
    icon: "/logo.png",
    bottom: true
  },
]
</script>

<style lang="scss" scoped>
article {
  position: relative;
  padding: .3rem .5rem;

  img.main {
    border-radius: 50% !important;
    aspect-ratio: 1;
    margin-bottom: .5rem;
  }
}

.custom-menu {
  position: fixed;
  z-index: 1000;
}
</style>
