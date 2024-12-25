<template>
  <img
    :src="src"
    :alt="alt"
    :class="{
      [classes]: true,
      'loaded': loaded,
      'loading': !loaded
    }"
    @load="handleLoad"
  >
</template>

<script setup>
import { ref, watch, defineProps } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  classes: {
    type: String,
    default: ''
  }
});
const loaded = ref(false);
const handleLoad = () => {
  loaded.value = true;
};
watch(() => props.src, () => {
  loaded.value = false;
});
</script>
<style lang="scss" scoped>
img {
  &.loading {
    animation: pulse 1.5s infinite;
    background: #f1f1f1;
  }

  @keyframes pulse {
    0% {
      background: #3e3e3e;
    }
    50% {
      background: #5e5e5e;
    }
    100% {
      background: #3e3e3e;
    }
  }


  &.loaded {
    opacity: 1;
    transition: opacity 0.3s;
  }
}
</style>
