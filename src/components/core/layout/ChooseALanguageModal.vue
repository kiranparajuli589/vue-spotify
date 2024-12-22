<template>
  <div>
    <button
      class="outline-btn"
      @click="dialog = true"
    >
      <img
        src="@/assets/icons/svgs/language.svg"
        height="24"
        width="24"
        alt="Language"
      >
      <VFadeTransition>
        <template v-if="!appStore.isAppNavCollapsed">
          English
        </template>
      </VFadeTransition>
    </button>
    <v-dialog
      v-model="dialog"
      width="auto"
      class="language-chooser rounded"
    >
      <VCard
        max-width="1000"
        class="language-chooser--card"
        width="1000"
      >
        <header class="d-flex">
          <div class="flex-grow-1">
            <h2>
              Choose a language
            </h2>
            <p>
              This updates what you read on open.spotify.com
            </p>
          </div>
          <VBtn
            icon
            @click="dialog = false"
          >
            <VImg
              src="@/assets/icons/svgs/close.svg"
              height="24"
              width="24"
              alt="Close"
            />
          </VBtn>
        </header>
        <hr>
        <ul>
          <li
            v-for="language in languages"
            :key="language.title"
          >
            <button
              @click="dialog = false"
            >
              <h4>{{ language.title }}</h4>
              <p>{{ language.subtitle }}</p>
            </button>
          </li>
        </ul>
      </VCard>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {useAppStore} from "@/stores/app.js";
import languages from "@/constants/language.js";

const appStore = useAppStore();

const dialog = ref(false);
</script>
<style lang="sass" scoped>
.outline-btn
  display: flex
  gap: .5rem
  padding: 4px 8px
  font-size: 0.875rem
  font-weight: 600
  transition: all 0.3s ease-in-out
.language-chooser
  &--card
    //padding: 1rem
  header
    padding: 1rem
    h2
      font-size: 1.5rem
    p
      font-size: 1rem
  hr
    margin: 0

  ul
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
    gap: 1rem
    padding: 1rem
    max-height: 60vh
    overflow-y: auto
    button
      width: 100%
      padding: 1rem
      border-radius: 4px
      text-align: left
      transition: all 0.3s ease-in-out
      &:hover
        background-color: #323232
</style>
