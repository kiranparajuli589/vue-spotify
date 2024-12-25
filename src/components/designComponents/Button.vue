<template>
  <button
    :class="{
      sm: isSmall,
      md: isMedium,
      lg: isLarge,
      'filled-btn': isFilled,
      'outline-btn': isOutlined,
      'text-btn': isText,
      'icon-btn': icon,
    }"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
<script setup>
import { computed, defineProps } from "vue"

const props = defineProps({
  size: {
    type: String,
    default: "md",
  },
  variant: {
    type: String,
    default: "text",
  },
  icon: {
    type: Boolean,
    default: false,
  },
})
const isSmall = computed(() => props.size === "sm")
const isMedium = computed(() => props.size === "md")
const isLarge = computed(() => props.size === "lg")

const isFilled = computed(() => props.variant === "filled")
const isOutlined = computed(() => props.variant === "outlined")
const isText = computed(() => props.variant === "text")
</script>
