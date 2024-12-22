<template>
  <footer class="app_footer">
    <div class="top-row">
      <section
        v-for="menu in FooterMenu"
        :key="menu.title"
      >
        <header>
          <a :href="menu.href">{{ menu.title }}</a>
        </header>
        <ul v-if="menu.children">
          <li
            v-for="child in menu.children"
            :key="child.title"
          >
            <a :href="child.href">{{ child.title }}</a>
          </li>
        </ul>
      </section>
      <section>
        <ul class="social_media">
          <li>
            <a href="#">
              <img
                src="@/assets/icons/pngs/facebook.png"
                alt="facebook"
              >
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="@/assets/icons/pngs/instagram.png"
                alt="instagram"
              >
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="@/assets/icons/pngs/twitter.png"
                alt="twitter"
              >
            </a>
          </li>
        </ul>
      </section>
    </div>
    <hr>
    <div class="copyright">
      © {{ currentYear }} Spotify AB
    </div>
  </footer>
</template>
<script setup>
import { computed } from "vue";
import FooterMenu from "@/constants/footerMenu.js";

const currentYear = computed(() => new Date().getFullYear());
</script>
<style lang="sass">
footer.app_footer
  padding-inline: 1rem
  padding-block: 5rem 4rem
  .top-row
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))
    gap: 1.5rem

    @media only screen and (max-width: 480px)
      grid-template-columns: 1fr
      gap: 2rem

    header
      margin-bottom: .5rem
      a
        font-size: 16px
        font-weight: 500

    ul
      display: flex
      flex-direction: column
      gap: 4px
      li
        a
          font-size: 16px
          font-weight: 400
          color: rgb(var(--v-theme-secondary))
          &:hover
            color: white

    .social_media
      display: flex
      flex-direction: row
      a
        height: 40px
        width: 40px
        aspect-ratio: 1
        border-radius: 50%
        background: transparent
        position: relative
        &:active
          opacity: 0.5

        img
          height: 32px
          width: 32px
  hr
    border: none
    border-top: 1px solid rgba(255, 255, 255, 0.1)
    height: 1px
    margin-block: 1rem
  .copyright
      color: rgb(var(--v-theme-secondary))
      font-size: 14px
</style>
