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
      <div class="social_media">
        <a href="#">
          <img
            src="@/assets/icons/pngs/facebook.png"
            alt="facebook"
          >
        </a>
        <a href="#">
          <img
            src="@/assets/icons/pngs/instagram.png"
            alt="instagram"
          >
        </a>
        <a href="#">
          <img
            src="@/assets/icons/pngs/twitter.png"
            alt="twitter"
          >
        </a>
      </div>
    </div>
    <hr>
    <div class="copyright">
      © {{ currentYear }} Spotify AB
    </div>
  </footer>
</template>
<script setup>
import { computed } from "vue"
import FooterMenu from "@/constants/footerMenu.js";
const currentYear = computed(() => new Date().getFullYear())
</script>
<style lang="sass">
.app_footer
  padding-inline: 1rem
  padding-block: 5rem 4rem
  .top-row
    display: grid
    grid-template-columns: repeat(9, 1fr)
  header
    margin-bottom: .5rem
    a
      font-size: 16px
      font-weight: 500
  section
    grid-column: span 2
  ul
    display: flex
    flex-direction: column
    gap: 4px
    li
      a
        font-size: 16px
        font-weight: 400
        color: rgb(179, 179, 179)
        &:hover
          color: white

  .social_media
    display: flex
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
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        height: 32px
        width: 32px
  hr
    border: none
    border-top: 1px solid rgba(255, 255, 255, 0.1)
    height: 1px
    margin-block: 1rem
  .copyright
    color: rgb(179, 179, 179)
    font-size: 14px
</style>
