<template>
  <PopularArtists
    :no-header="true"
    :size="50"
    :profile="true"
    :show-gradient="false"
  />
</template>
<script setup>
import PopularArtists from "@/components/feature/home/PopularArtists.vue";
</script>
<route>
{ meta: { layout: "search" } }
</route>
