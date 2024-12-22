<template>
  <PopularAlbumsAndSingles
    :no-header="true"
    :size="50"
  />
</template>
<script setup>

import PopularAlbumsAndSingles from "@/components/feature/home/PopularAlbumsAndSingles.vue";
</script>
<route>
{ meta: { layout: "search" } }
</route>

