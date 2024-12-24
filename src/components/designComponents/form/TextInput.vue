<template>
  <div class="text-input">
    <label
      :for="name"
    >
      {{ label }}
    </label>
    <input
      :id="name"
      v-model="model"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      :autofocus="autofocus"
      :class="{
        [inputClass]: true,
      }"
    >
    <p v-if="isFieldError" class="error">
      {{ errors[name] }}
    </p>
    <slot />
  </div>
</template>
<script setup>
import { defineProps, computed, defineModel } from 'vue'

const model = defineModel({ required: true })


const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: 'Enter your text',
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  errors: {
    type: Array,
    default: () => [],
  },
  inputClass: {
    type: String,
    default: '',
  },
})

const isFieldError = computed(() => props.errors.includes(props.name))
</script>
<style lang="scss" scoped>
.text-input {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  label {
    font-size: 0.875rem;
    font-weight: 600;
  }
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 400;

    &.password-input {
      padding-right: 2.5rem;
    }

    &:hover {
      border-color: #aaa;
    }

    &:focus {
      border-color: white;
      outline: 1px solid white;
    }

    &::placeholder {
      color: #808080;
    }
  }
}
</style>
