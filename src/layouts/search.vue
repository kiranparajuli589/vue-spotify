<template>
  <div class="search-layout">
    <nav class="search-layout--nav">
      <v-chip-group
        v-model="tab"
        mandatory
        selected-class="text-primary bg-white"
      >
        <v-chip
          v-for="tabItem in tabs"
          :key="tabItem.value"
          :title="tabItem.title"
          :value="tabItem.value"
          :to="`/search/${query}/${tabItem.value}`"
          :text="tabItem.title"
        />
      </v-chip-group>
    </nav>

    <router-view />
  </div>
</template>
<script setup>
import {ref, onMounted} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
const tab = ref("")

const query = router.currentRoute.value.params.query

onMounted(() => {
  handleTab(router.currentRoute.value.name)
})

router.afterEach((to) => {
  handleTab(to.name)
})

const handleTab = (name) => {
  const nameSplit = name.split("/")
  tab.value = nameSplit[nameSplit.length - 1]
}

const tabs = [
  {title: "All", value: ""},
  {title: "Songs", value: "songs"},
  {title: "Artists", value: "artists"},
  {title: "Albums", value: "albums"},
  {title: "Playlists", value: "playlists"},
  {title: "Podcasts & Shows", value: "podcasts"},
  {title: "Profiles", value: "profiles"},
]
</script>
<style lang="scss" scoped>
.search-layout {
  &--nav {
    padding: .5rem 1rem;
    margin-bottom: 1.5rem;
    position: sticky;
    top: 0;
    background: rgba(18, 18, 18, 0.9);
    backdrop-filter: blur(10px);
    z-index: 100;
  }
}
</style>
