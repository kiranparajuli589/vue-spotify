<template>
  <nav class="app_bar">
    <div class="branding">
      <RouterLink
        to="/"
        title="Home"
        class="icon-btn bg-transparent"
      >
        <img
          src="/logo.png"
          height="42"
          width="42"
          alt="Spotify"
        >
      </RouterLink>
    </div>
    <div class="flex-grow-1" />

    <template v-if="mdAndUp">
      <RouterLink
        to="/"
        class="icon-btn"
      >
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
          class="no-hover-underline"
        >
          Github
        </a>
        <RouterLink
          class="no-hover-underline"
          to="/auth/register"
        >
          Sign up
        </RouterLink>
        <RouterLink
          to="/auth/login"
          class="filled-btn h-full md px-6 no-hover-underline"
        >
          Log in
        </RouterLink>
      </div>
    </template>
    <MobileAppMenu v-else />
  </nav>
</template>
<script setup>
import {computed} from 'vue'
import {useRouter} from "vue-router";
import useResponsive from "@/composables/useResponsive.js";
import SearchForm from "@/components/core/layout/SearchForm.vue";
import MobileAppMenu from "@/components/core/layout/mobile/MobileAppMenu.vue";


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

  .icon-btn
    width: 50px
    height: 50px
    min-width: 50px

  @media (max-width: 768px)
    height: 48px
    padding: 4px 8px

  .branding
    $authLinkWidth: 268.63px
    width: 100%
    max-width: $authLinkWidth
    @media (max-width: 768px)
      width: $authLinkWidth
    &--link
      @apply icon-btn

  .auth-links
    margin-left: 1rem
    height: 100%
    display: flex
    align-items: center
    gap: 1.8rem
    @media only screen and (max-width: 768px)
      gap: 1rem

    a
      height: 100%

    .login-link
      background: white
      color: black
</style>
