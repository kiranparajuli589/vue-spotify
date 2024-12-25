<template>
  <div class="mobile-links">
    <RouterLink
      to="/search"
      class="icon-btn"
    >
      <VImg
        src="@/assets/icons/svgs/search.svg"
        height="24"
        width="24"
        alt="search"
      />
    </RouterLink>
    <Button
      variant="filled"
      class="open-app-btn"
    >
      Open App
    </Button>
    <MobileNavMenu />
  </div>
</template>
<script setup lang="ts">
import MobileNavMenu from "@/components/core/layout/mobile/MobileNavMenu.vue";
import Button from "@/components/designComponents/Button.vue";
</script>
<style scoped lang="sass">
.mobile-links
  display: flex
  align-items: center
  gap: 1rem
</style>
