<template>
  <section class="artist">
    <AlbumHeader
      :fake-artist="fakeArtist"
      :header-section-bg="headerSectionBg"
    />
    <section
      class="artist--content"
    >
      <div
        class="gradient ease-transition"
        :style="{
          background: albumSectionBg
        }"
      />


      <section class="artist--actions">
        <PlayBtn
          class-name="artist--play"
        />

        <button
          class="outline-btn"
        >
          Follow
        </button>

        <button
          class="icon-btn"
        >
          <VImg
            src="@/assets/icons/svgs/more_horz.svg"
            alt="Add to playlist"
            height="32"
            width="32"
            class="rotate-90 rounded-circle"
          />
        </button>
      </section>

      <section>
        <h2>
          Popular
        </h2>
        <section class="px-0">
          <DataGrid
            :rows="showMore ? fakeArtist.popularSongs : fakeArtist.popularSongs.slice(0, 5)"
            :columns="[
              {
                field: 'sn',
                headerName: 'SN',
                grid: 'minmax(50px, 60px)',
                className: 'mr-2',
                component: SnWithPlayBtn,
                align: 'center'
              },
              {
                field: 'title', headerName: 'Title',
                width: 200,
                component: SongTitle,
                grid: 4,
              },
              {field: 'year', headerName: 'Year', width: 100},
              {field: 'views', headerName: 'Views', width: 100},
              {field: 'duration', headerName: 'Duration', width: 100},
            ]"
            :classes="{
              root: 'overflow-x-auto',
            }"
          />

          <button
            v-if="fakeArtist.popularSongs.length > 5"
            @click="showMore = !showMore"
          >
            {{ showMore ? 'Show Less' : 'Show More' }}
          </button>
        </section>
      </section>

      <section class="artist--discography">
        <header class="d-flex justify-space-between mb-2">
          <h2>
            Discography
          </h2>
          <a href="#">
            Show all
          </a>
        </header>
        <VChipGroup class="mb-4">
          <VChip
            v-for="tab in discographyTabs"
            :key="tab.title"
            class="text-capitalize"
          >
            {{ tab.title }}
          </VChip>
        </VChipGroup>

        <GridSection
          no-header
          class-name="px-0"
        >
          <template #articles>
            <AlbumCard
              v-for="i in computedSize"
              :key="i"
            />
          </template>
        </GridSection>
      </section>

      <GridSection
        :title="`Featuring ${fakeArtist.name.split(' ')[0]}`"
      >
        <template #articles>
          <AlbumCard
            v-for="i in computedSize"
            :key="i"
          />
        </template>
      </GridSection>

      <GridSection
        title="Fans also like"
      >
        <template #articles>
          <ArtistCard
            v-for="i in computedSize"
            :key="i"
          />
        </template>
      </GridSection>

      <GridSection
        title="Appears On"
      >
        <template #articles>
          <AlbumCard
            v-for="i in computedSize"
            :key="i"
          />
        </template>
      </GridSection>

      <GridSection
        title="Artist Playlist"
      >
        <template #articles>
          <AlbumCard
            v-for="i in computedSize"
            :key="i"
          />
        </template>
      </GridSection>

      <GridSection
        title="Discovered on"
      >
        <template #articles>
          <AlbumCard
            v-for="i in computedSize"
            :key="i"
          />
        </template>
      </GridSection>
    </section>

    <section class="artist--about">
      <h2>About</h2>
      <v-card>
        <div class="info">
          <img
            :src="fakeArtist.image"
            alt="Profile Picture"
            class="elevation-8"
          >
          <p>
            {{ formatNumberWithComma(fakeArtist.monthlyListeners) }} monthly listeners.
          </p>
        </div>
        <v-avatar class="artist--ranking">
          <span class="heading">#{{ fakeArtist.ranking }}</span>
          <span class="text-xs">in the world</span>
        </v-avatar>
      </v-card>
    </section>
  </section>
</template>
<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router";
import {faker} from "@faker-js/faker";
import useGradientFromImage from "@/composables/useGradientFromImage.js";
import PlayBtn from "@/components/core/home/PlayBtn.vue";
import {formatNumberWithComma} from "@/helpers/util.js";
import DataGrid from "@/components/designComponents/DataGrid.vue";
import GridSection from "@/components/core/home/GridSection.vue";
import useHomeSectionReactiveGridSize from "@/composables/useHomeSectionReactiveGridSize.js";
import AlbumCard from "@/components/core/AlbumCard.vue";
import ArtistCard from "@/components/core/ArtistCard.vue";
import SnWithPlayBtn from "@/components/feature/search/songs/SnWithPlayBtn.vue";
import SongTitle from "@/components/feature/search/songs/SongTitle.vue";
import AlbumHeader from "@/components/feature/album/AlbumHeader.vue";

const { params: { id: artistId } = {} } = useRoute()

const fakeArtist = {
  id: artistId,
  isVerified: faker.datatype.boolean(),
  name: faker.person.fullName(),
  image: faker.image.urlPicsumPhotos(),
  // image: faker.image.urlPicsumPhotos({width: 1366, height: 768}),
  monthlyListeners: faker.number.int({min: 100000, max: 1000000}),
  popularSongs: Array.from({length: faker.number.int({min: 5, max: 15})}, () => ({
    title: faker.lorem.words(3),
    duration: faker.number.int({min: 100, max: 100000}),
    year: faker.date.past().getFullYear(),
    thumbnail: faker.image.urlPicsumPhotos({width: 300, height: 300}),
    views: faker.number.int({min: 100000, max: 1000000}),
  })),
  ranking: faker.number.int({min: 1, max: 100}),
}

const discographyTabs = Array.from({length: 4}, () => ({
  title: faker.lorem.words({min: 1, max: 3}),
}))

const showMore = ref(false)
const {
  headerSectionBg,
  albumSectionBg
} = useGradientFromImage(fakeArtist.image)

const computedSize = useHomeSectionReactiveGridSize()
</script>
