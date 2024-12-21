<template>
  <div class="d-flex flex-column ga-4">
    <PopularArtists />
    <PopularAlbumsAndSingles />
    <PopularRadio
      title="Popular Radio"
    />
    <PopularRadio
      title="Featured Charts"
    />
    <PopularRadio
      title="Playlist From Our Editors"
    />
  </div>
</template>

<script setup>
import PopularArtists from "@/components/feature/home/PopularArtists.vue";
import PopularAlbumsAndSingles from "@/components/feature/home/PopularAlbumsAndSingles.vue";
import PopularRadio from "@/components/feature/home/PopularRadio.vue";
</script>
