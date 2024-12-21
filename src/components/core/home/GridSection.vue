<template>
  <section :class="{
    'home-section': true,
    [className]: true
  }">
    <header>
      <h3>
        <a href="#" class="title">{{title}}</a>
      </h3>
      <a href="#" class="hover-underline">See All</a>
    </header>

    <div class="articles">
      <slot name="articles" />
    </div>

    <slot />
  </section>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  className: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: 'Popular Artists'
  }
})
</script>
<style lang="scss">
.home-section {
  position: relative;
  padding: .5rem .4rem;
  border-radius: 14px;

  header {
    z-index: 2;
    position: relative;
    margin-bottom: 1rem;
    padding-inline: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {

      a {
        font-weight: 800;
        color: white;

        font-size: 24px;
        text-decoration: none;

      }
    }

    .hover-underline {
      font-size: 14px;
      font-weight: 600;
    }
  }

  .articles {
    z-index: 2;
    position: relative;
    gap: .6rem;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    @media (max-width: 1280px) {
      grid-template-columns: repeat(5, 1fr);
    }
    @media (max-width: 1120px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 950px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 788px) {
      grid-template-columns: repeat(2, 1fr);
    }

    article {
      border-radius: 8px;
      &:hover {
        background: rgb(26 26 26);
        .play-button {
          display: flex;
        }
      }

      img.main {
        width: 100%;
        height: auto;
        border-radius: 8px;
        margin-bottom: .5rem;
        aspect-ratio: 1;
      }

      h3 {
        color: white;
        font-size: 16px;
        text-align: start;
        font-weight: 400;
      }
      p {
        color: white;
        font-size: 14px;
        text-align: start;
      }
    }
  }
}
</style>
