<template>
  <footer class="preview_of_spotify_footer">
    <div class="info">
      <h5>Preview of Spotify</h5>
      <p class="truncate">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
    </div>
    <div class="actions h-full">
      <Button
        variant="filled"
        class="h-full"
      >
        Sign up free
      </Button>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.preview_of_spotify_footer {
  background-image: linear-gradient(90deg, #af2896,#509bf5);
  padding: 8px;
  color: white;

  font-size: .875rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  .info {
    flex-grow: 1;
    h5 {
      font-size: .875rem;
      font-weight: 600;
    }
  }
}
</style>
<script setup lang="ts">
import Button from "@/components/designComponents/Button.vue";
</script>
