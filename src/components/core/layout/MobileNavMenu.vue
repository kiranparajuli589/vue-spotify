<template>
  <VDialog
    v-model="dialog"
    :fullscreen="true"
  >
    <template #activator="{props}">
      <button
        class="icon-btn"
        v-bind="props"
      >
        <VImg
          src="@/assets/icons/svgs/menu.svg"
          height="24"
          width="24"
        />
      </button>
    </template>
    <VCard class="card">
      <header class="d-flex justify-end">
        <VBtn
          icon
          @click="dialog = false"
        >
          <VImg
            src="@/assets/icons/svgs/close.svg"
            height="24"
            width="24"
          />
        </VBtn>
      </header>
      <div class="container">
        <ul class="top-menu">
          <li
            v-for="(item, index) in menuItems"
            :key="index"

          >
            <a :href="item.href">
              {{item.label}}
            </a>
          </li>
        </ul>
        <div class="divider" />
        <ul>
          <li
            v-for="(item, index) in menuLinks"
            :key="index"
          >
            <a :href="item.href">
              {{item.label}}
            </a>
          </li>
        </ul>
      </div>
    </VCard>
  </VDialog>
</template>
<script setup>
import { ref } from 'vue'

const dialog = ref(false)

const menuItems = [
  {label: "Log in", href: "#"},
  {label: "Sign up", href: "#"},
]

const menuLinks = [
  {label: "Premium", href: "#"},
  {label: "Help", href: "#"},
  {label: "Download", href: "#"},
  {label: "Privacy", href: "#"},
  {label: "Terms", href: "#"},
  {label: "Github", href: "https://github.com/kiranparajuli589/vue-spotify"}
]
</script>
<style lang="sass" scoped>
.card
  background: rgba(0, 0, 0, 0.9)
  backdrop-filter: blur(20px)
  header
    padding: 1rem
  .container
    padding-inline: 2rem .8rem
    .divider
      height: 1.5px
      background-color: white
      margin: 3rem 0
      width: 1rem
    ul
      li
        color: rgba(255, 255, 255, 0.8)
        font-weight: 500
        padding: .5rem
        border-radius: 8px

        &:hover
          background: rgba(255, 255, 255, 0.05)
    ul.top-menu
      li
        font-size: 1.35rem
        font-weight: 600
        &:first-child
          margin-bottom: .2rem
</style>
