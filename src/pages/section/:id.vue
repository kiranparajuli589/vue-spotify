<template>
  <section class="section-page">
    <header>
      <h1 class="text-capitalize">{{ store.sectionPageHeading }}</h1>
    </header>

    <div class="section-page--grid">
      <template v-if="isAlbums">
        <template
          v-for="n in resources"
          :key="n"
        >
          <AlbumCard />
        </template>
      </template>

      <template v-else-if="isArtists">
        <template
          v-for="m in resources"
          :key="m"
        >
          <ArtistCard />
        </template>

      </template>

      <template v-else-if="isRadio">
        <template
          v-for="o in resources"
          :key="o"
        >
          <RadioCard />
        </template>
      </template>
    </div>
  </section>
</template>
<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import {faker} from "@faker-js/faker";
import {useAppStore} from "@/stores/app.js";
import ArtistCard from "@/components/core/ArtistCard.vue";
import AlbumCard from "@/components/core/AlbumCard.vue";
import RadioCard from "@/components/core/RadioCard.vue";

const RTypes = [
  'albums',
  'artists',
  'radio',
]

const store = useAppStore()

const router = useRouter()
const resourceType = computed(() => {
  return router.currentRoute.value.query.type
  ?? RTypes[faker.number.int({min: 0, max: 2})]
})
console.log(resourceType.value, router.currentRoute.value)
const isAlbums = computed(() => resourceType.value === RTypes[0])
const isArtists = computed(() => resourceType.value === RTypes[1])
const isRadio = computed(() => resourceType.value === RTypes[2])

const resources = ref(0)

onMounted(() => {
  resources.value = faker.number.int({min: 10, max: 24})

  if (!store.sectionPageHeading) {
    store.setSectionPageHeading(faker.word.words({ min: 2, max: 4 }))
  }
})

watch(() => router.currentRoute.value.params.id, () => {
  resources.value = faker.number.int({min: 10, max: 20})
  const appMain = document.querySelector('.app-main')
  appMain.scrollTo({top: 0, behavior: 'smooth'})
})
</script>
<style lang="scss">
.section-page {
  padding: 1rem;
  header {
    margin-top: 4rem;
    margin-bottom: 1rem;
    h1 {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
  .section-page--grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
}
</style>
