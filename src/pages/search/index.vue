<template>
  <section>
    <div
      v-if="!mdAndUp"
      class="mt-6 px-4"
    >
      <SearchForm />
    </div>
    <header>
      <h1>
        Browse all
      </h1>
    </header>
    <div class="genres">
      <article
        v-for="genre in genres"
        :key="genre.title"
        class="genre"
        :style="{backgroundColor: genre.color}"
      >
        <h2>
          {{ genre.title }}
        </h2>
        <img
          :src="getRandomLoremFlickerImage()"
          :alt="genre.title"
        >
      </article>
    </div>
  </section>
</template>
<script setup>
import {getRandomLoremFlickerImage} from "@/helpers/util.js";
import useResponsive from "@/composables/useResponsive.js";
import SearchForm from "@/components/core/layout/SearchForm.vue";

const {mdAndUp} = useResponsive()

const genres = [
  {title: "Music", color: "rgb(220, 20, 140)"},
  {title: "Podcasts", color: "rgb(0, 100, 80)"},
  {title: "Life Events", color: "rgb(9,40,193)"},
  {title: "2024 in Music", color: "rgb(255, 0, 0)"},
  {title: "2024 in Podcasts", color: "rgb(0, 255, 0)"},
  {title: "Made For You", color: "rgb(169,169,4)"},
  {title: "New Releases", color: "rgb(7,193,193)"},
  {title: "Pop", color: "rgb(255, 0, 255)"},
  {title: "Hip-Hop", color: "rgb(255,116,116)"},
  {title: "Rock", color: "rgb(128, 128, 128)"},
  {title: "Latin", color: "rgb(123,123,123)"},
  {title: "Podcast Charts", color: "rgb(128, 0, 0)"},
  {title: "Educational", color: "rgb(0, 128, 0)"},
  {title: "Documentary", color: "rgb(0, 0, 128)"},
  {title: "Comedy", color: "rgb(128, 0, 128)"},
  {title: "Charts", color: "rgb(0, 128, 128)"},
  {title: "Dance/Electronic", color: "rgb(128, 128, 0)"},
  {title: "Mood", color: "rgb(128, 128, 128)"},
  {title: "Indie", color: "rgb(146,107,107)"},
  {title: "Workout", color: "rgb(128, 0, 0)"},
  {title: "Discover", color: "rgb(0, 128, 0)"},
  {title: "Country", color: "rgb(0, 0, 128)"},
  {title: "R&B", color: "rgb(128, 0, 128)"},
  {title: "K-Pop", color: "rgb(0, 128, 128)"},
  {title: "Chill", color: "rgb(128, 128, 0)"},
  {title: "Sleep", color: "rgb(128, 128, 128)"},
  {title: "Party", color: "rgb(192, 192, 192)"},
  {title: "At Home", color: "rgb(128, 0, 0)"},
  {title: "Focus", color: "rgb(0, 128, 0)"},
  {title: "Decades", color: "rgb(0, 0, 128)"},
  {title: "Jazz", color: "rgb(128, 0, 128)"},
  {title: "Blues", color: "rgb(0, 128, 128)"},
  {title: "Soul", color: "rgb(128, 128, 0)"},
  {title: "Classical", color: "rgb(128, 128, 128)"}
]
</script>
<style lang="sass" scoped>
section
  header
    h1
      font-size: 24px
      font-weight: 600
    margin-block: 2rem 2rem
    padding-inline: 1rem
.genres
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))
  gap: 1.5rem
  padding-inline: 1rem
article
  position: relative
  overflow: hidden
  border-radius: 12px
  height: 160px
  transition: transform 0.3s ease-in-out
  &:hover
    cursor: pointer
    transform: scale(1.05)
  h2
    font-size: 1.5rem
    font-weight: 600
    padding: 1rem
  img
    height: 140px
    width: 140px
    object-fit: cover
    border-radius: 4px
    position: absolute
    bottom: -2.5rem
    right: -2.5rem
    transform: rotate(10deg)
</style>
