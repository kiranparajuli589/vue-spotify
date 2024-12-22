<template>
  <section class="search-results-songs">
    <DataGrid
      :columns="SongsTableCols"
      :rows="data"
      :is-loading="isLoading"
      :loading-row-count="12"
      min-width="1000px"
    />
  </section>
</template>
<script setup>
import {ref, onMounted} from "vue";
import {faker} from "@faker-js/faker";
import DataGrid from "@/components/designComponents/DataGrid.vue";
import SongsTableCols from "@/constants/songsTableCols.js";

const data = ref([])
const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loadData()
  }, 2000)
})

const loadData = () => {
  data.value = []
  for (let i = 0; i < 50; i++) {
    data.value.push({
      thumbnail: faker.image.urlPicsumPhotos({width: 60, height: 60, blur: 0}),
      title: faker.company.name(),
      artist: faker.person.fullName(),
      album: faker.company.name(),
      duration: `${faker.number.int(25)}:${faker.number.int(59)}`,
      isAddedToPlaylist: i === 0
    })
  }
  isLoading.value = false
}

// watch for .app_main scroll event
onMounted(() => {
  const appMain = document.querySelector(".app_main")
  const gridHeader = document.querySelector(".grid__header")
  appMain.addEventListener("scroll", () => {
    if (appMain.scrollTop > 48) {
      gridHeader.classList.add("scrolled")
    } else {
      gridHeader.classList.remove("scrolled")
    }
  })
})

</script>
<style lang="scss">

.search-results-songs {
  padding-inline: 0 !important;
  .grid__root {
    .grid__loading_cell {
      height: 48px !important;
    }
  }
  .grid__header {
    position: sticky;
    top: 64px;
    z-index: 2;

    &.scrolled {
      background: rgba(23, 23, 23, 0.8);
      backdrop-filter: blur(10px);
      padding-top: 8px;
    }
  }
}
</style>
<route lang="yml">
{ meta: { layout: "search" } }
</route>
