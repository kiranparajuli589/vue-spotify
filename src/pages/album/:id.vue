<template>
  <section class="album">
    <header
      class="album--header ease-transition"
      :style="{
        background: actionSectionBg
      }"
    >
      <CustomImage
        class="album--banner"
        :src="album.image"
        :alt="album.title"
      />
      <div class="album--info">
        <VSpacer />
        <h4>Album</h4>
        <h1>{{album.title}}</h1>
        <p>
          <img :src="album.artistImage" alt="Artist Image">
          <span class="album--artist">{{album.artist}}</span>
          <span>.</span>
          <span>{{album.year}}</span>
          <span>.</span>
          <span>{{album.songs.length}} songs,</span>
          <span>{{formattedDuration}}</span>
        </p>
      </div>
    </header>
    <section
      class="album--actions ease-transition"
      :style="{
        background: albumSectionBg
      }"
    >
      <PlayBtn
        class-name="album--play"
      />

      <button
        class="icon-btn"
      >
        <VImg
          src="@/assets/icons/contextMenu/add_circle.svg"
          alt="Add to playlist"
          height="32"
          width="32"
        />
      </button>

      <button
        class="icon-btn"
      >
        <VImg
          src="@/assets/icons/svgs/more_horz.svg"
          alt="Add to playlist"
          height="32"
          width="32"
          class="rotate-90"
        />
      </button>
      <VSpacer />
      <v-menu>
        <template #activator="{ props }">
          <button
            class="change-view-btn"
            v-bind="props"
          >
            <span>List</span>
            <VImg
              src="@/assets/icons/svgs/list.svg"
              alt="List"
              height="24"
              width="24"
            />
          </button>
        </template>
        <VList
          :color="Theme.colors.play"
          density="compact"
        >
          <VListSubheader>
            View as
          </VListSubheader>
          <VListItem
            v-for="(item, index) in viewOptions"
            :key="index"
            :value="item.value"
            :active="store.albumDetailViewAs === item.value"
            @click="store.toggleAlbumDetailView"
          >
            <template #prepend>
              <template v-if="store.albumDetailViewAs === item.value">
                <VImg
                  :src="item.activeIcon"
                  :alt="item.iconAlt"
                  height="24"
                  width="24"
                  class="mr-2"
                />
              </template>
              <template v-else>
                <VImg
                  :src="item.icon"
                  :alt="item.iconAlt"
                  height="24"
                  width="24"
                  class="mr-2"
                />
              </template>
              <VListItemTitle class="text-sm">
                {{ item.title }}
              </VListItemTitle>
            </template>
          </VListItem>
        </VList>
      </v-menu>
    </section>
    <section class="album--songs">
      <DataGrid
        :rows="album.songs"
        :columns="AlbumSongsTableCols"
        :compact="store.albumDetailViewAs === AlbumDetailView.Compact"
      />
    </section>
    <section class="album--copyright">
      <p>{{formattedDate}}</p>

      <p>{{ copyrightText }}</p>
    </section>

    <section>
      <GridSection
        :title="`More by ${album.artist}`"
        show-all-text="See discography"
      >
        <template #articles>
          <AlbumCard
            v-for="(recommendation, index) in album.recommendations.slice(0, size)"
            :key="index"
            :album="recommendation"
          />
        </template>
      </GridSection>
    </section>
  </section>
</template>
<script setup>
import {computed, onMounted, ref, watch} from "vue";
import {faker} from "@faker-js/faker";
import PlayBtn from "@/components/core/home/PlayBtn.vue";
import {AlbumDetailView, useAppStore} from "@/stores/app.js";
import Theme from "../../../theme.js";
import DataGrid from "@/components/designComponents/DataGrid.vue";
import {AlbumSongsTableCols} from "@/constants/songsTableCols.js";
import GridSection from "@/components/core/home/GridSection.vue";
import AlbumCard from "@/components/core/AlbumCard.vue";
import useHomeSectionReactiveGridSize from "@/composables/useHomeSectionReactiveGridSize.js";
import {useRouter} from "vue-router";
import useGradientFromImage from "@/composables/useGradientFromImage.js";
import CustomImage from "@/components/designComponents/CustomImage.vue";

const store = useAppStore();
const size = useHomeSectionReactiveGridSize()

const createSong = () => ({
  title: faker.lorem.words(3),
  artist: faker.person.fullName(),
  duration: faker.number.int({
    min: 100,
    max: 100000,
  }),
  year: faker.date.past().getFullYear(),
  recommendations: [

  ]
})
const getRecommendation = () => ({
  image: faker.image.urlPicsumPhotos(),
  title: faker.lorem.words({
    min: 1, max: 3
  }),
  subtitle: faker.date.past().getFullYear(),
})

const getAlbum = () => ({
  image: faker.image.urlPicsumPhotos({blur: 0}),
  title: faker.lorem.words({
    min: 1, max: 3
  }),
  artist: faker.person.fullName(),
  artistImage: faker.image.urlLoremFlickr(),
  year: faker.date.past().getFullYear(),
  duration: faker.number.int({
    min: 100,
    max: 100000,
  }),
  songs: Array.from({length: faker.number.int({min: 5, max: 15})}, createSong),
  recommendations: Array.from({length: faker.number.int({min: 5, max: 15})}, getRecommendation)
})

const router = useRouter()
const album = ref(getAlbum())

const {
  albumSectionBg,
  actionSectionBg
} = useGradientFromImage(album.value.image)

watch(() => router.currentRoute.value.params.id, () => {
  album.value = getAlbum()
  const appMain = document.querySelector(".app_main")
  appMain.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

onMounted(() => {
  const appMain = document.querySelector(".app_main")
  appMain.scrollTo({
    top: 0,
    behavior: "smooth"
  })
  appMain.addEventListener("scroll", () => {
    const gridHeader = document.querySelector(".grid__header")
    if (appMain.scrollTop > 100) {
      gridHeader.classList.add("scrolled")
    } else {
      gridHeader.classList.remove("scrolled")
    }
  })
})

const formattedDuration = computed(
  () => {
    const minutes = Math.floor(album.value.duration / 60);
    const seconds = album.value.duration % 60;
    return `${minutes} min ${seconds} sec`;
  }
)

const viewOptions = [
  {
    title: "Compact",

    icon: new URL("@/assets/icons/svgs/menu.svg", import.meta.url).href,
    activeIcon: new URL("@/assets/icons/svgs/menu_green.svg", import.meta.url).href,

    iconAlt: "Compact",
    value: AlbumDetailView.Compact
  },
  {
    title: "List",

    icon: new URL("@/assets/icons/svgs/list.svg", import.meta.url).href,
    activeIcon: new URL("@/assets/icons/svgs/list_green.svg", import.meta.url).href,

    iconAlt: "List",
    value: AlbumDetailView.List
  },
]

const formattedDate =
  new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

const copyrightText = `© ${new Date().getFullYear()} ${faker.company.name()}`
</script>
