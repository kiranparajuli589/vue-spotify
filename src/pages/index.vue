<template>
  <div class="home-page">
    <PopularArtists />
    <PopularAlbumsAndSingles />
    <PopularRadio
      title="Popular Radio"
      :menu-items="PopularRadioContextMenu"
    />
    <PopularRadio
      title="Featured Charts"
      :menu-items="PopularRadioContextMenu"
    />
    <PopularRadio
      title="Playlist From Our Editors"
      :menu-items="PopularRadioContextMenu"
    />
  </div>
</template>

<script setup>
import PopularArtists from "@/components/feature/home/PopularArtists.vue";
import PopularAlbumsAndSingles from "@/components/feature/home/PopularAlbumsAndSingles.vue";
import PopularRadio from "@/components/feature/home/PopularRadio.vue";
import {PopularRadioContextMenu} from "@/constants/contextMenuItems.js";
</script>
<style lang="scss">
.home-page {
  @media only screen and (max-width: 768px) {
    //.articles {
    //  display: flex;
    //  overflow-x: auto;
    //}
  }
}
</style>
