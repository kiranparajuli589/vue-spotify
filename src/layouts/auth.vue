<template>
  <section class="auth_layout">
    <div class="auth_layout__content">
      <div class="auth_layout__card elevation-8">
        <slot />
      </div>
    </div>

    <footer>
      <p>
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
      </p>
    </footer>
  </section>
</template>
<style lang="sass" scoped>
.auth_layout
  height: 100vh
  display: flex
  flex-direction: column
  background: linear-gradient(rgba(255, 255, 255, 0.2) 0%, rgb(0, 0, 0) 100%)

  &__content
    flex-grow: 1
    display: flex
    justify-content: center
    align-items: center
    padding: 2rem

  &__card
    background: #121212
    width: 100%
    max-width: 734px
    margin-inline: auto
    padding: 2rem
    border-radius: 8px
    height: 100%
    overflow-y: auto

  footer
    padding: 2rem 1rem
    text-align: center
    color: white
    font-size: 0.875rem
    background: #121212
</style>

<script setup lang="ts">
</script>
