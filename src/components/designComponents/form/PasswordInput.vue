<template>
  <TextInput
    v-model="model"
    name="password"
    label="Password"
    :errors="errors"
    :required="required"
    :type="inputType"
    placeholder="Password"
    input-class="password-input"
  >
    <button
      class="icon-btn"
      type="button"
      @click="togglePasswordVisibility"
    >
      <template v-if="inputType === 'password'">
        <VisibilityIcon />
      </template>
      <template v-else>
        <VisibilityOffIcon />
      </template>
    </button>
  </TextInput>
</template>
<script setup lang="ts">
import { defineProps, defineModel, ref } from "vue";
import TextInput from "@/components/designComponents/form/TextInput.vue";
import VisibilityIcon from "@/components/icons/Visibility.vue";
import VisibilityOffIcon from "@/components/icons/VisibilityOff.vue";

const model = defineModel({ required: true })

const props = defineProps({
  required: {
    type: Boolean,
    default: false,
  },
  errors: {
    type: Array,
    default: () => [],
  },
})

const inputType = ref("password");
const togglePasswordVisibility = () => {
  inputType.value = inputType.value === "password" ? "text" : "password";
};
</script>
<style lang="scss">
.text-input {
  .icon-btn {
    position: absolute;
    right: .5rem;
    top: 50%;
    transform: translateY(0%);
    z-index: 2;
    color: rgba(255, 255, 255, 0.8);
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
    &:active {
      color: rgba(255, 255, 255, 0.8);
      transform: scale(0.9);
    }
    .icon {
      width: 1.5rem;
      height: 1.5rem;
      margin-top: .18rem
    }
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50% !important;
  }
}
</style>
