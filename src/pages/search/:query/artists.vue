<template>
  <PopularArtists
    :no-header="true"
    :size="50"
    :show-gradient="false"
  />
</template>
<script setup>
import PopularArtists from "@/components/feature/home/PopularArtists.vue";
</script>
<route>
{ meta: { layout: "search" } }
</route>
