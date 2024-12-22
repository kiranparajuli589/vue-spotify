<template>
  <v-menu
    :model-value="showTooltip"
    :close-on-content-click="false"
    location="right"
  >
    <template #activator="{ props }">
      <div
        class="nav-card"
        v-bind="props"
      >
        <template v-if="!appStore.isAppNavCollapsed">
          <h2>{{ title }}</h2>
          <p>{{ subtitle }}</p>
        </template>
        <button
          :class="{
            'filled-btn': !appStore.isAppNavCollapsed,
            'icon-btn': appStore.isAppNavCollapsed
          }"
        >
          {{ btnText }}
        </button>
      </div>
    </template>
    <slot name="tooltip" />
  </v-menu>
</template>
<script setup>
import { computed } from "vue";
import {useAppStore} from "@/stores/app.js";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  showTooltip: {
    type: Boolean,
    default: false,
  },
})
const appStore = useAppStore()

const btnText = computed(() => {
  return appStore.isAppNavCollapsed
    ? props.buttonText
      .split(' ')
      .map(word => word[0].toUpperCase())
      .join('')
    : props.buttonText;
})
</script>
<style scoped lang="scss">
.nav-card {
  background-color: rgb(var(--v-theme-surface-variant));
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  h2 {
    font-weight: 600;
    margin-bottom: .5rem;
  }

  p {
    font-size: 0.875rem;
    margin-bottom: 1rem;
    color: rgb(var(--v-theme-secondary));
  }

  button {
    padding: 4px 12px;
    font-weight: 600;
    font-size: 0.875rem;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1);
      opacity: 0.7;
    }

    &.icon-btn {
      font-size: 1.2rem
    }
  }
}
</style>
