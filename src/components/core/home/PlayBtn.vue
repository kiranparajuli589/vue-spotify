<template>
  <button class="play-button">
    <img
      src="@/assets/icons/svgs/play.svg"
      alt="play"
    />
  </button>
</template>
<style lang="scss" scoped>
.play-button {
  position: absolute;
  bottom: 1rem;
  right: .2rem;
  background: #1cd760;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  display: none;
  justify-content: center;
  align-items: center;
  img {
    width: 28px;
    height: 28px;
  }
}
</style>
