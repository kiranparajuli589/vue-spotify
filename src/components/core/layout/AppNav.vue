<template>
  <div class="d-flex">
    <nav class="app_nav flex-grow-1"
      :style="{
        width: width + 'px'
      }"
    >
      <header class="d-flex justify-space-between ga-2 pa-2">
        <button
          class="flex-centered ga-2 menu-btn"
        >
          <v-tooltip
            activator="parent"
            location="top"
          >
            Collapse Your Library
          </v-tooltip>
          <VImg
            src="@/assets/icons/svgs/book.svg"
            height="24"
            width="24"
          />
          Your Library
        </button>
        <button class="icon-btn">
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

      <div class="nav-links ml-4">
        <ul class="ga-2">
          <li
            v-for="menu in menus"
            :key="menu.label"
          >
            <a :href="menu.href">{{ menu.label }}</a>
          </li>
        </ul>

        <a href="#" class="mb-6">Cookies</a>
      </div>

      <div class="mb-4 ml-4">
        <button class="outline-btn">
          <img
            src="@/assets/icons/svgs/language.svg"
            height="24"
            width="24"
            alt="Language"
          >
          English
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
import { ref, computed } from "vue";
import NavCard from "@/components/core/layout/NavCard.vue";

const maxWidth = 500;
const minWidth = 250;
const width = ref(420)

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

</script>
<style lang="sass" scoped>
.app_nav
  display: flex
  flex-direction: column
  .menu-btn
    padding: 4px 8px
    font-weight: 600
    color: #b3b3b3
  .nav-links
    a
      font-size: 0.875rem
    ul
      display: flex
      gap: .5rem
      flex-wrap: wrap
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
