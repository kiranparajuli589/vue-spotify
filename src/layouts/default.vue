<template>
  <!--  Why conditional layouts ? -->
  <!--https://github.com/JohnCampionJr/vite-plugin-vue-layouts/issues/144-->
  <template v-if="isAuthRoute">
    <Auth>
      <router-view />
    </Auth>
  </template>
  <template v-else>
    <section class="layout-grid">
      <AppBar />
      <AppNav v-if="mdAndUp" />
      <main class="app_main">
        <router-view />
        <AppFooter />
      </main>
      <SignUpFreeFooter />
    </section>
  </template>
</template>
<script setup>
import {computed} from "vue";
import {useRouter} from "vue-router";

import AppBar from "@/components/core/layout/AppBar.vue";
import AppNav from "@/components/core/layout/AppNav.vue";
import AppFooter from "@/components/core/layout/AppFooter.vue";
import useResponsive from "@/composables/useResponsive.js";
import SignUpFreeFooter from "@/components/core/layout/SignUpFreeFooter.vue";
import Auth from "@/layouts/auth.vue";

const {mdAndUp} = useResponsive()
const router = useRouter()
console.log(router.currentRoute.value.fullPath)
const isAuthRoute = computed(() => {
  return router.currentRoute.value.fullPath.startsWith("/auth")
})
</script>

