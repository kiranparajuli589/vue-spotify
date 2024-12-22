<template>
  <section>
    <article>
      <img
        src="@/assets/images/404-error.png"
        alt="404"
        style="width: 200px; height: 200px"
      >

      <header>
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </header>

      <router-link
        to="/"
        class="filled-btn"
      >
        Go to Home
      </router-link>
    </article>
  </section>
</template>
<style lang="sass" scoped>
section
  text-align: center
  min-height: 60vh
  display: flex
  align-items: center
  justify-content: center
  article
    display: flex
    flex-direction: column
    gap: 1rem
    align-items: center
    padding: .5rem
    header
      margin-bottom: 1rem
      h1
        font-size: 2rem
        margin-bottom: .5rem
      p
        font-size: 1rem

    .filled-btn
      padding: .5rem 1rem
</style>
<script setup lang="ts">
</script>
