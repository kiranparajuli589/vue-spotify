<template>
  <button
    :class="{
      'play-button': true,
      [className]: true,
      'hidden-initial' : className === ''
    }"
  >
    <img
      src="@/assets/icons/svgs/play.svg"
      alt="play"
    >
  </button>
</template>
<script setup>
defineProps({
  className: {
    type: String,
    default: ""
  }
})
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
</style>
