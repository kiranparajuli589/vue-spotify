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

      <section
        ref="stickyHeader"
        class="artist--actions"
      >
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
            :columns="SongsMiniTableCols"
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

    <ArtistAbout
      :fake-artist="fakeArtist"
    />
  </section>
</template>
<script setup>
import {ref, watch} from "vue";
import {useRouter} from "vue-router";
import {faker} from "@faker-js/faker";
import PlayBtn from "@/components/core/home/PlayBtn.vue";
import DataGrid from "@/components/designComponents/DataGrid.vue";
import GridSection from "@/components/core/home/GridSection.vue";
import useHomeSectionReactiveGridSize from "@/composables/useHomeSectionReactiveGridSize.js";
import AlbumCard from "@/components/core/AlbumCard.vue";
import ArtistCard from "@/components/core/ArtistCard.vue";
import AlbumHeader from "@/components/feature/album/AlbumHeader.vue";
import ArtistAbout from "@/components/feature/artist/ArticleAbout.vue";
import useStickyHeader from "@/composables/useStickyHeader.js";
import {SongsMiniTableCols} from "@/constants/songsTableCols.js";
import useStickyGridHeader from "@/composables/useStickyGridHeader.js";

const router = useRouter()
const artistId = ref(router.currentRoute.value.params.id)

const generateFakeArtist = () => ({
  id: artistId,
  isVerified: faker.datatype.boolean(),
  name: faker.person.fullName(),
  image: faker.image.urlPicsumPhotos({blur: 0}),
  monthlyListeners: faker.number.int({min: 100000, max: 1000000}),
  popularSongs: Array.from({length: faker.number.int({min: 5, max: 15})}, () => ({
    title: faker.lorem.words(3),
    duration: faker.number.int({min: 100, max: 100000}),
    year: faker.date.past().getFullYear(),
    thumbnail: faker.image.urlPicsumPhotos({width: 300, height: 300}),
    views: faker.number.int({min: 100000, max: 1000000}),
  })),
  ranking: faker.number.int({min: 1, max: 100}),
})

const generateDiscographyTabs = () => Array.from({length: 4}, () => ({
  title: faker.lorem.words({min: 1, max: 3}),
}))


const showMore = ref(false)
const fakeArtist = ref(generateFakeArtist())
const discographyTabs = ref(generateDiscographyTabs())

const {
  stickyHeader,
  albumSectionBg,
  headerSectionBg
} = useStickyHeader(fakeArtist.value.image)
useStickyGridHeader()


const computedSize = useHomeSectionReactiveGridSize()

watch(() => router.currentRoute.value.params.id, () => {
  artistId.value = router.currentRoute.value.params.id
  fakeArtist.value = generateFakeArtist()
  discographyTabs.value = generateDiscographyTabs()

  const appMain = document.querySelector(".app_main")
  appMain.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})
</script>
