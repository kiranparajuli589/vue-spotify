<template>
  <v-menu
    v-model="tooltipMenu"
    :close-on-content-click="false"
    location="right"
    :class="{
      'tooltip-menu': true,
      'tooltip-menu--show': tooltipMenu
    }"
  >
    <template #activator="{ props }">
      <div
        class="nav-card"
        v-bind="props"
        :style="{
          paddingLeft: appStore.isAppNavCollapsed ? '12px' : '16px',
        }"
      >
        <template v-if="!appStore.isAppNavCollapsed">
          <h2>{{ title }}</h2>
          <p>{{ subtitle }}</p>
        </template>
        <Button
          :variant="appStore.isAppNavCollapsed ? 'text' : 'filled'"
          size="sm"
          :class="appStore.isAppNavCollapsed ? 'text-md' : ''"
        >
          {{ btnText }}
        </Button>
      </div>
    </template>
    <slot name="tooltip" />
  </v-menu>
</template>
<script setup>
import { computed, defineProps, defineModel } from "vue";
import {useAppStore} from "@/stores/app.js";
import Button from "@/components/designComponents/Button.vue";

const tooltipMenu = defineModel({ required: true})

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
    font-size: .875rem;
  }

  p {
    font-size: 0.875rem;
    margin-bottom: 1rem;
    color: rgb(var(--v-theme-secondary));
  }
}
</style>
