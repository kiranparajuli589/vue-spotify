<template>
  <section class="layout-grid">
    <AppBar />
    <AppNav v-if="mdAndUp" />
    <main class="app_main">
      <router-view />
      <AppFooter />
    </main>
  </section>
</template>
<script setup>
import AppBar from "@/components/core/layout/AppBar.vue";
import AppNav from "@/components/core/layout/AppNav.vue";
import AppFooter from "@/components/core/layout/AppFooter.vue";
import useResponsive from "@/composables/useResponsive.js";

const {mdAndUp} = useResponsive()
</script>

