<template>
  <footer class="app_footer">
    <div class="top-row">
      <section v-for="menu in menus" :key="menu.title">
        <header>
          <a :href="menu.href">{{menu.title}}</a>
        </header>
        <ul v-if="menu.children">
          <li v-for="child in menu.children" :key="child.title">
            <a :href="child.href">{{child.title}}</a>
          </li>
        </ul>
      </section>
      <div class="social_media">
        <a href="#">
          <img src="@/assets/icons/pngs/facebook.png" alt="facebook" />
        </a>
        <a href="#">
          <img src="@/assets/icons/pngs/instagram.png" alt="instagram" />
        </a>
        <a href="#">
          <img src="@/assets/icons/pngs/twitter.png" alt="twitter" />
        </a>
      </div>
    </div>
    <hr>
    <div class="copyright">
      © {{currentYear}} Spotify AB
    </div>
  </footer>
</template>
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
<script setup>
const currentYear = computed(() => new Date().getFullYear())
const menus = [
  {
    title: "Company",
    href: "#",
    children: [
      {
        title: "About",
        href: "#"
      },
      {
        title: "Jobs",
        href: "#"
      },
      {
        title: "For the Record",
        href: "#"
      },
      {
        title: "Communities",
        href: "#"
      }
    ]
  },
  {
    title: "Communities",
    href: "#",
    children: [
      {
        title: "For Artists",
        href: "#"
      },
      {
        title: "Developers",
        href: "#"
      },
      {
        title: "Advertising",
        href: "#"
      },
      {
        title: "Investors",
        href: "#"
      },
      {
        title: "Vendors",
        href: "#"
      }
    ]
  },
  {
    title: "Useful links",
    href: "#",
    children: [
      {
        title: "Support",
        href: "#"
      },
      {
        title: "Free Mobile App",
        href: "#"
      },
    ]
  },
  {
    title: "Spotify Plans",
    href: "#",
    children: [
      {
        title: "Premium Individual",
        href: "#"
      },
      {
        title: "Premium Duo",
        href: "#"
      },
      {
        title: "Premium Family",
        href: "#"
      },
      {
        title: "Premium Student",
        href: "#"
      },
      {
        title: "Spotify Free",
        href: "#"
      }
    ]
  }
]
</script>
