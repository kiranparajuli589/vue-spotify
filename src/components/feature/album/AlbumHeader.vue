<template>
  <header
    class="artist--header"
    :style="{
      background: headerSectionBg
    }"
  >
    <CustomImage
      class="artist--banner"
      :src="fakeArtist.image"
      :alt="fakeArtist.name"
    />
    <div class="artist--info">
      <div
        v-if="fakeArtist.isVerified"
        class="artist--verified"
      >
        <VerifiedIcon />
        Verified Artist
      </div>
      <h1>
        {{ fakeArtist.name }}
      </h1>
      <p>
        {{ formatNumberWithComma(fakeArtist.monthlyListeners) }} monthly listeners
      </p>
    </div>
  </header>
</template>
<script setup>
import VerifiedIcon from "@/components/icons/VerifiedIcon.vue";
import {formatNumberWithComma} from "@/helpers/util.js";
import CustomImage from "@/components/designComponents/CustomImage.vue";

defineProps({
  fakeArtist: {
    type: Object,
    required: true
  },
  headerSectionBg: {
    type: String,
    required: true
  }
})
</script>
