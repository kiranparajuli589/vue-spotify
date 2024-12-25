<template>
  <section class="artist--about">
    <h2>About</h2>
    <v-card>
      <div class="info">
        <img
          :src="fakeArtist.image"
          alt="Profile Picture"
          class="elevation-8"
        >
        <p>
          {{ formatNumberWithComma(fakeArtist.monthlyListeners) }} monthly listeners.
        </p>

      </div>
      <v-avatar class="artist--ranking">
        <span class="heading">#{{ fakeArtist.ranking }}</span>
        <span class="text-xs">in the world</span>
      </v-avatar>
    </v-card>
  </section>
</template>
<script setup>
import { defineProps } from 'vue'
import { formatNumberWithComma } from '@/helpers/util'

defineProps({
  fakeArtist: {
    type: Object,
    required: true
  }
})
</script>
