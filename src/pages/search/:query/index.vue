<template>
  <div class="search-page">
    <section class="top">
      <div class="top-result">
        <h1>
          Top Result
        </h1>
        <CardWithContextMenu
          :menu-items="PopularRadioContextMenu"
        >
          <img
            :src="getRandomLoremFlickerImage()"
            alt="Random Image"
            class="top-result--image"
          >
          <h2>
            <a href="#">
              {{ faker.company.name() }}
            </a>
          </h2>
          <p>
            <span>Song</span>&nbsp;
            <span>.</span>&nbsp;
            <a href="#">{{ faker.person.fullName() }}</a>
          </p>
          <PlayBtn />
        </CardWithContextMenu>
      </div>
      <div class="song-results">
        <h2>Songs</h2>
        <ul>
          <li
            v-for="i in 4"
            :key="i"
          >
            <img
              :src="getRandomLoremFlickerImage()"
              alt="Random Image"
            >
            <div class="info">
              <h3>
                <a href="#">
                  {{ faker.company.name() }}
                </a>
              </h3>
              <p>
                <a href="#">{{ faker.person.fullName() }}</a>
              </p>
            </div>
            <div class="actions">
              <img
                src="@/assets/icons/contextMenu/add_circle.svg"
                alt="Add Icon"
              >
              <div>
                {{ faker.number.int(25) }}:{{ faker.number.int(59) }}
              </div>
              <img
                src="@/assets/icons/svgs/more_horz.svg"
                alt="More Icon"
              >
            </div>
          </li>
        </ul>
      </div>
    </section>

    <PopularAlbumsAndSingles
      title="Featuring"
      :no-show-all="true"
      class-name="featuring"
      :card-size="2"
    />

    <PopularArtists
      :no-show-all="true"
      class-name="artists"
    />

    <PopularAlbumsAndSingles
      title="Albums"
      :no-show-all="true"
      class-name="albums"
    />
  </div>
</template>
<script setup>
import {getRandomLoremFlickerImage} from "@/helpers/util.js";
import {faker} from "@faker-js/faker";
import CardWithContextMenu from "@/components/designComponents/CardWithContextMenu.vue";
import {PopularRadioContextMenu} from "@/constants/contextMenuItems.js";
import PlayBtn from "@/components/core/home/PlayBtn.vue";
import PopularAlbumsAndSingles from "@/components/feature/home/PopularAlbumsAndSingles.vue";
import PopularArtists from "@/components/feature/home/PopularArtists.vue";
</script>
<style lang="scss">
.featuring, .albums, .artists {
  margin-top: 3rem;
  header h3 a {
    font-size: 24px !important;
    font-weight: 500 !important;
    margin-bottom: 1rem;
  }
}
</style>
<route>
{ meta: { layout: "search" } }
</route>
