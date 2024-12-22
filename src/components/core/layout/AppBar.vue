<template>
  <nav class="app_bar">
    <div class="branding">
      <a
        href="/"
        title="Home"
      >
        <img
          src="/logo.png"
          height="42"
          width="42"
          alt="Spotify"
        >
      </a>
    </div>
    <div class="flex-grow-1" />

    <RouterLink class="home-btn" to="/">
      <VImg
        :src="homeIcon"
        height="28"
        width="28"
      />
    </RouterLink>
    <form
      :class="{
        'd-flex': true,
        'search-focused': isSearchInputFocused
      }"
      @submit="onSubmit"
    >
      <img
        src="@/assets/icons/svgs/search.svg"
        height="24"
        width="24"
        class="search-icon"
        alt="search"
      >
      <input
        v-model="search"
        type="search"
        name="search"
        placeholder="What do you want to play?"
        @focus="isSearchInputFocused = true"
        @blur="isSearchInputFocused = false"
        @keydown.enter="onSubmit"
      >

      <template v-if="search.length > 0">
        <button
          class="reset-btn"
          type="reset"
          @click="search = ''"
        >
          <VImg
            src="@/assets/icons/svgs/close.svg"
            height="28"
            width="28"
          />
        </button>
      </template>
      <template v-else>
        <RouterLink
          to="/search"
          class="to-search"
        >
          <VImg
            :src="folderIcon"
            height="28"
            width="28"
          />
        </RouterLink>
      </template>
    </form>
    <div class="flex-grow-1" />
    <div class="auth-links">
      <a
        href="#"
        class="flex-centered"
      >
        Sign up
      </a>
      <a
        href="#"
        class="login-link flex-centered"
      >
        Log in
      </a>
    </div>
  </nav>
</template>
<script setup>
import { ref, watch, computed } from 'vue'
import {useRouter} from "vue-router";
import { debounce } from 'lodash'

const search = ref('')
const isSearchInputFocused = ref(false)
const router = useRouter()

const isHomePage = computed(() => router.currentRoute.value.name === '/')
const isSearchPage = computed(() => /^\/search\/?$/.test(router.currentRoute.value.path))

const homeIcon = computed(() => {
  if (isHomePage.value) {
    return new URL('@/assets/icons/svgs/home_filled.svg', import.meta.url).href
  }
  return new URL('@/assets/icons/svgs/home_outlined.svg', import.meta.url).href
})
const folderIcon = computed(() => {
  if (isSearchPage.value) {
    return new URL('@/assets/icons/svgs/folder_filled.svg', import.meta.url).href
  }
  return new URL('@/assets/icons/svgs/folder_outlined.svg', import.meta.url).href
})

const onSubmit = (e) => {
  e.preventDefault()
  console.log('Search:', search.value)
  router.push(`/search/${search.value}`)
}

watch(() => search.value, (nV) => {
  debouncedNavigation(nV)
})

const debouncedNavigation = debounce((nV) => {
  router.push(`/search/${nV}`)
}, 500)



</script>
<style lang="sass">
.app_bar
  padding: 8px 12px
  display: flex
  align-items: center
  width: 100%
  background: black
  height: 64px

  .branding
    width: 230.93px

    a
      display: block
      border-radius: 50%
      width: fit-content
      aspect-ratio: 1
      height: 100%

  .home-btn
    cursor: pointer
    height: 100%
    width: auto
    aspect-ratio: 1
    background: rgba(255, 255, 255, 0.1)
    margin-right: 1rem
    border-radius: 50%
    display: flex
    justify-content: center
    align-items: center

  form
    position: relative

    .search-icon, .reset-btn, .to-search
      position: absolute
      top: 50%
      transform: translateY(-50%)

    &.search-focused
      input[type="search"]
        border: 1px solid #a4a4a4

    .search-icon
      left: 14px

    .reset-btn, .to-search
      cursor: pointer
      right: 14px

    .to-search
      border-left: 1px solid #909090
      padding-left: 10px
      border-radius: 0

    input[type="search"]
      border: 1px solid transparent
      padding: 12px 48px
      height: 100%
      border-radius: 500px
      background-color: rgba(255, 255, 255, 0.1)

      width: 475px

      &:hover
        background-color: rgba(255, 255, 255, 0.2)
        border-color: #646464

      &:focus
        outline: none
        border-color: white

      transition: border-color 0.3s ease-in-out

  .auth-links
    height: 100%
    display: flex
    align-items: center
    gap: 1rem

    a
      height: 100%
      color: white
      text-decoration: none
      padding-inline: 1.8rem
      font-weight: 600

    .login-link
      background: white
      color: black
      border-radius: 32px
</style>
