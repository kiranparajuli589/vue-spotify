<template>
  <VDialog
    max-width="820"
    class="play-btn-dialog"
  >
    <template #activator="{props}">
      <button
        :class="{
          'play-button': true,
          [className]: true,
          'hidden-initial' : className === ''
        }"
        v-bind="props"
      >
        <img
          src="@/assets/icons/svgs/play.svg"
          alt="play"
        >
      </button>
    </template>

    <VCard>
      <div
        class="play-btn-dialog-content"
        :style="{
          background: headerSectionBg
        }"
      >
        <div class="play-btn-dialog-content--image">
          <CustomImage
            :src="resource.image"
            alt="play"
          />
        </div>
        <div class="play-btn-dialog-content--info">
          <h3>Start listening with a free Spotify account</h3>

          <div class="actions">
            <RouterLink
              class="filled-btn"
              to="/auth/register"
            >
              Sign up free
            </RouterLink>
            <button class="outline-btn">
              Download App
            </button>
          </div>

          <p>
            Already have an account? <a href="#">Log in</a>
          </p>
        </div>
      </div>
    </VCard>
  </VDialog>
</template>
<script setup>
import {faker} from "@faker-js/faker";
import useGradientFromImage from "@/composables/useGradientFromImage.js";
import CustomImage from "@/components/designComponents/CustomImage.vue";

defineProps({
  className: {
    type: String,
    default: ""
  }
})

const resource = {
  image: faker.image.urlPicsumPhotos({blur: 0})
}

const {
  headerSectionBg
} = useGradientFromImage(resource.image);
</script>
<style lang="scss" scoped>
.play-button {
  background: rgb(var(--v-theme-play));
  height: 48px;
  width: 48px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 28px;
    height: 28px;
  }

  &.hidden-initial {
    position: absolute;
    bottom: 1.2rem;
    right: 0.3rem;

    opacity: 0;
    transform: scale(0.8);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
}

.play-btn-dialog-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 4rem;
  gap: 4rem;

  background: #121212;

  .play-btn-dialog-content--image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100%;
      width: 100%;
      aspect-ratio: 1;
      border-radius: 8px !important;
    }
  }

  .play-btn-dialog-content--info {
    flex: 2;
    padding: 0 1rem;
    text-align: center;

    h3 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }

    .actions {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      button {
        width: fit-content;
        padding: 1rem 2rem;
      }
      .filled-btn {
        background-color: rgb(var(--v-theme-play)) !important;
        padding: 1rem 2rem;
      }
    }

    p {
      margin-top: 1rem;
      a {
        color: var(--v-theme-play);
      }
    }
  }
}
</style>
