<template>
  <div class="d-flex">
    <nav
      :class="{
        'app_nav flex-grow-1': true,
        'is-collapsed': appStore.appNav.isCollapsed
      }"
      :style="{
        width: width + 'px'
      }"
    >
      <header
        :class="{
          'd-flex justify-space-between ga-2 pa-2': true,
          'flex-column': appStore.appNav.isCollapsed
        }"
      >
        <button
          class="flex-centered ga-2 menu-btn"
          @click="appStore.toggleAppNav"
        >
          <v-tooltip
            activator="parent"
            location="top"
          >
            <template v-if="appStore.appNav.isCollapsed">
              Expand Your Library
            </template>
            <template v-else>
              Collapse Your Library
            </template>
          </v-tooltip>
          <VImg
            v-if="appStore.appNav.isCollapsed"
            src="@/assets/icons/svgs/book_closed.svg"
            height="24"
            width="24"
          />
          <VImg
            v-else
            src="@/assets/icons/svgs/book.svg"
            height="24"
            width="24"
          />
          <template v-if="!appStore.appNav.isCollapsed">
            Your Library
          </template>
        </button>
        <button class="icon-btn flex-centered">
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
        </button>
      </header>

      <div class="d-flex flex-column ga-2 flex-grow-1 pt-12">
        <NavCard
          title="Create your first playlist"
          subtitle="It's easy we will help you"
          buttonText="Create playlist"
        />

        <NavCard
          title="Let's find some podcasts to follow"
          subtitle="We will keep you updated on new episodes"
          buttonText="Browse podcasts"
        />
      </div>

      <div class="nav-links ml-4" v-if="!appStore.appNav.isCollapsed">
        <ul>
          <li
            v-for="menu in menus"
            :key="menu.label"
          >
            <a :href="menu.href">{{ menu.label }}</a>
          </li>
        </ul>

        <a href="#" class="cookies-link">Cookies</a>
      </div>

      <div class="my-4 ml-4">
        <button class="outline-btn">
          <img
            src="@/assets/icons/svgs/language.svg"
            height="24"
            width="24"
            alt="Language"
          >
          <template v-if="!appStore.appNav.isCollapsed">
            English
          </template>
        </button>
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
import { ref, computed, watch } from "vue";
import NavCard from "@/components/core/layout/NavCard.vue";
import {useAppStore} from "@/stores/app.js";

const maxWidth = 500;
const minWidth = 250;
const width = ref(420)

const appStore = useAppStore()

const isValidWidth = computed(() => width.value >= minWidth && width.value <= maxWidth);

const menus = [
  {
    label: "Legal",
    href: "#"
  },
  {
    label: "Safety & Privacy Center",
    href: "#"
  },
  {
    label: "Privacy Policy",
    href: "#"
  },
  {
    label: "Cookies",
    href: "#"
  },
  {
    label: "About Ads",
    href: "#"
  },
  {
    label: "Accessibility",
    href: "#"
  },
]

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
watch(() => appStore.appNav.isCollapsed, (value) => {
  if (value) {
    widthToRemember = width.value;
    width.value = 80;
  } else {
    width.value = widthToRemember || 420;
  }
})

</script>
<style lang="sass" scoped>
.app_nav
  display: flex
  flex-direction: column
  transition: width 0.3s
  .menu-btn
    padding: 4px 8px
    font-weight: 600
    color: #b3b3b3
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
        color: rgb(179, 179, 179)
        font-size: 11px
        &:hover
          text-decoration: none
  .outline-btn
    display: flex
    gap: .5rem
    padding: 4px 8px
    font-size: 0.875rem
    font-weight: 600

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
