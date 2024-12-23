<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    fill="currentColor"
    :class="`icon ${className}`"
    :height="height"
    :width="width"
  >
    <path
      d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z"
    />
  </svg>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  className: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '24',
  },
  width: {
    type: String,
    default: '24',
  },
});
</script>
