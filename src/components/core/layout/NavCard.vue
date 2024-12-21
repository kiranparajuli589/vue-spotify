<template>
  <div class="nav-card">
    <h2>{{ title }}</h2>
    <p>{{ subtitle }}</p>
    <button class="filled-btn">
      {{ buttonText }}
    </button>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  subtitle: String,
  buttonText: String,
})
</script>
<style scoped lang="scss">
.nav-card {
  background-color: #1f1f1f;
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
  }

  button {
    padding: 4px 12px;
    font-weight: 600;
    font-size: 0.875rem;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
