<template>
  <nav class="app_bar">
    <div class="branding">
      <RouterLink
        to="/"
        title="Home"
      >
        <img
          src="/logo.png"
          height="42"
          width="42"
          alt="Spotify"
        >
      </RouterLink>
    </div>
    <div class="flex-grow-1"/>

    <template v-if="mdAndUp">
      <RouterLink class="home-btn" to="/">
        <VImg
          :src="homeIcon"
          height="28"
          width="28"
        />
      </RouterLink>
      <SearchForm />
      <div class="flex-grow-1"/>
      <div class="auth-links">
        <a
          href="https://github.com/kiranparajuli589/vue-spotify"
          target="_blank"
          class="flex-centered"
        >
          Github
        </a>
        <RouterLink
          to="/auth/register"
          class="flex-centered"
        >
          Sign up
        </RouterLink>
        <RouterLink
          to="/auth/login"
          class="login-link flex-centered"
        >
          Log in
        </RouterLink>
      </div>
    </template>
    <div v-else class="mobile-links">
      <RouterLink
        to="/search"
        class="icon-btn"
      >
        <VImg
          src="@/assets/icons/svgs/search.svg"
          height="24"
          width="24"
        />
      </RouterLink>
      <button class="filled-btn open-app-btn">
        Open App
      </button>
      <MobileNavMenu />
    </div>
  </nav>
</template>
<script setup>
import {computed} from 'vue'
import {useRouter} from "vue-router";
import useResponsive from "@/composables/useResponsive.js";
import MobileNavMenu from "@/components/core/layout/MobileNavMenu.vue";
import SearchForm from "@/components/core/layout/SearchForm.vue";


const router = useRouter()
const {mdAndUp} = useResponsive()

const isHomePage = computed(() => router.currentRoute.value.name === '/')

const homeIcon = computed(() => {
  if (isHomePage.value) {
    return new URL('@/assets/icons/svgs/home_filled.svg', import.meta.url).href
  }
  return new URL('@/assets/icons/svgs/home_outlined.svg', import.meta.url).href
})
</script>
<style lang="sass">
.app_bar
  padding: 8px 12px
  display: flex
  align-items: center
  width: 100%
  background: black
  height: 64px

  @media (max-width: 768px)
    height: 48px
    padding: 4px 8px

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
      white-space: nowrap
      text-overflow: ellipsis
      overflow: hidden

    .login-link
      background: white
      color: black
      border-radius: 32px

  .mobile-links
    display: flex
    align-items: center
    gap: 1rem

    .open-app-btn
      padding: .4rem 1rem
      font-weight: 500

    .icon-btn
      height: 100%
      width: auto
      display: flex
      justify-content: center
      align-items: center
      padding: 8px
</style>
