<template>
  <button class="play-button">
    <img
      src="@/assets/icons/svgs/play.svg"
      alt="play"
    >
  </button>
</template>
<style lang="scss" scoped>
.play-button {
  position: absolute;
  bottom: 1rem;
  right: 0.2rem;
  background: #1cd760;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  display: flex; /* Use flex for centering */
  justify-content: center;
  align-items: center;
  opacity: 0; /* Start invisible */
  transform: scale(0.8); /* Start slightly shrunk */
  transition: opacity 0.3s ease, transform 0.3s ease; /* Add smooth transitions */
  img {
    width: 28px;
    height: 28px;
  }
}
</style>
<!--<style>-->
<!--article:hover {-->
<!--  -->
<!--}-->
<!--</style>-->
