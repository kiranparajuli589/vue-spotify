<template>
  <div class="d-flex">
    <nav
      :class="{
        'app_nav flex-grow-1': true,
        'is-collapsed': appStore.isAppNavCollapsed
      }"
      :style="{
        width: width + 'px'
      }"
    >
      <header
        :class="{
          'd-flex justify-space-between ga-2 pa-2': true,
          'flex-column ga-4': appStore.isAppNavCollapsed
        }"
      >
        <Button
          class="text-secondary menu-btn"
          @click="appStore.toggleAppNav"
        >
          <v-tooltip
            activator="parent"
            location="top"
          >
            <template v-if="appStore.isAppNavCollapsed">
              Expand Your Library
            </template>
            <template v-else>
              Collapse Your Library
            </template>
          </v-tooltip>
          <VImg
            v-if="appStore.isAppNavCollapsed"
            src="@/assets/icons/svgs/book_closed.svg"
            height="32"
            width="32"
          />
          <VImg
            v-else
            src="@/assets/icons/svgs/book.svg"
            height="24"
            width="24"
          />
          <VFadeTransition>
            <template v-if="!appStore.isAppNavCollapsed">
              Your Library
            </template>
          </VFadeTransition>
        </Button>
        <v-menu>
          <template #activator="{props}">
            <Button
              icon
              :size="appStore.isAppNavCollapsed ? 'sm' : ''"
              v-bind="props"
              class="add-playlist-btn"
            >
              <v-tooltip
                activator="parent"
                location="top"
              >
                Create playlist or folder
              </v-tooltip>
              <VImg
                src="@/assets/icons/svgs/plus.svg"
                height="24"
                width="24"
              />
            </Button>
          </template>

          <VCard>
            <VList>
              <VListItem
                title="Create New Playlist"
                @click="setShowTooltip('playlist', true)"
              >
                <template #prepend>
                  <VImg
                    src="@/assets/icons/svgs/lyrics.svg"
                    height="24"
                    width="24"
                    class="mr-2"
                  />
                </template>
              </VListItem>
            </VList>
          </VCard>
        </v-menu>
      </header>

      <div class="d-flex flex-column ga-2 flex-grow-1 pt-8">
        <NavCard
          v-model="showTooltip.playlist"
          title="Create your first playlist"
          subtitle="It's easy we will help you"
          button-text="Create playlist"
        >
          <template #tooltip>
            <VCard
              color="light-blue-lighten-2"
              class="pa-4 arrow"
            >
              <h4>Create a playlist</h4>
              <p class="mb-4 text-grey-darken-4">
                Playlists are a great way to organize your favorite songs
              </p>
              <div class="d-flex justify-end ga-4">
                <button
                  class="font-medium text-sm"
                  @click="setShowTooltip('playlist', false)"
                >
                  Not Now
                </button>
                <button class="filled-btn px-3 py-1 font-medium text-sm">
                  Log in
                </button>
              </div>
            </VCard>
          </template>
        </NavCard>

        <NavCard
          v-model="showTooltip.podcast"
          title="Let's find some podcasts to follow"
          subtitle="We will keep you updated on new episodes"
          button-text="Browse podcasts"
        >
          <template #tooltip>
            <VCard
              color="light-blue-lighten-2"
              class="pa-4 arrow"
            >
              <h4>Find podcasts</h4>
              <p class="mb-4 text-grey-darken-4">
                Podcasts are a great way to stay informed and entertained
              </p>
              <div class="d-flex justify-end ga-4">
                <button
                  class="font-medium text-sm"
                  @click="setShowTooltip('podcast', false)"
                >
                  Not Now
                </button>
                <RouterLink
                  to="/auth/login"
                  class="filled-btn px-3 py-1 font-medium text-sm"
                >
                  Log in
                </RouterLink>
              </div>
            </VCard>
          </template>
        </NavCard>
      </div>

      <VFadeTransition>
        <div
          v-if="!appStore.isAppNavCollapsed"
          class="nav-links ml-4"
        >
          <ul>
            <li
              v-for="menu in AppNavMenu"
              :key="menu.label"
            >
              <a :href="menu.href">{{ menu.label }}</a>
            </li>
          </ul>

          <a
            href="#"
            class="cookies-link w-fit"
          >Cookies</a>
        </div>
      </VFadeTransition>

      <div class="my-4 ml-4">
        <ChooseALanguageModal />
      </div>
    </nav>
    <div
      :class="{
        'resizer ease-transition': true,
        'allowed-width': isValidWidth,
        'grabbing': grabbing
      }"
      @mousedown="handleMouseDown"
    />
  </div>
</template>
<script setup>
import { ref, computed, watch, reactive } from "vue";
import NavCard from "@/components/core/layout/NavCard.vue";
import {useAppStore} from "@/stores/app.js";
import ChooseALanguageModal from "@/components/core/layout/ChooseALanguageModal.vue";
import AppNavMenu from "@/constants/appNavMenu.js";
import Button from "@/components/designComponents/Button.vue";

const maxWidth = 500;
const minWidth = 250;
const width = ref(420)

const appStore = useAppStore()

const isValidWidth = computed(() => width.value >= minWidth && width.value <= maxWidth);

const grabbing = ref(false);
const handleMouseDown = (e) => {
  e.preventDefault();
  grabbing.value = true;
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
}

const handleMouseMove = (e) => {
  if (e.clientX >= minWidth && e.clientX <= maxWidth) {
    width.value = e.clientX;
  }
}

const handleMouseUp = () => {
  grabbing.value = false;
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("mouseup", handleMouseUp);
}

watch(grabbing, (value) => {
  if (value) {
    document.body.style.cursor = "ew-resize";
  } else {
    document.body.style.cursor = "default";
  }
})

let widthToRemember;
watch(() => appStore.isAppNavCollapsed, (value) => {
  if (value) {
    widthToRemember = width.value;
    width.value = 80;
  } else {
    width.value = widthToRemember || 420;
  }
})


const showTooltip = reactive({
  playlist: false,
  podcast: false,
})

const setShowTooltip = (key, value) => {
  showTooltip[key] = value;
}

</script>
<style lang="sass" scoped>
.app_nav
  display: flex
  flex-direction: column
  transition: width 0.3s
  .menu-btn
    padding: 4px 8px
  .nav-links
    display: flex
    flex-direction: column
    gap: .5rem
    margin-bottom: 1rem
    .cookies-link
      font-size: 0.75rem
    ul
      display: flex
      flex-wrap: wrap
      gap: .3rem
      li a
        color: rgb(var(--v-theme-secondary))
        font-size: 11px
        &:hover
          text-decoration: none
.add-playlist-btn
  max-width: 48px
.resizer
  height: 100%
  padding: 0 1.5px
  &:active
    background-color: rgba(255, 255, 255, 0.3)
  &.allowed-width
    cursor: ew-resize
    &:hover
      background-color: rgba(255, 255, 255, 0.2)
</style>
