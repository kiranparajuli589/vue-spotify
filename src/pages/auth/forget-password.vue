<template>
  <div class="forget-password">
    <div class="d-flex align-center justify-center">
      <VImg
        src="/logo.png"
        alt="Spotify logo"
        width="64"
        height="64"
      />
    </div>
    <h1>Reset your password</h1>
    <p>Enter the email address or username linked to your Spotify account and we'll send you an email.</p>
    <form @submit.prevent="handleSubmit">
      <TextInput
        v-model="forgetPassword.email"
        name="text"
        label="Email or username"
        :errors="forgetPassword.errors"
        required
        autofocus
        placeholder="Email or username"
      />
      <a href="#" class="my-4">
        Need support?
      </a>
      <button
        type="submit"
        class="filled-btn"
      >
        Send link
      </button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import TextInput from "@/components/designComponents/form/TextInput.vue";
import {useRouter} from "vue-router";

const forgetPassword = reactive({
  email: "",
  errors: [],
});

const router = useRouter()
const handleSubmit = () => {
  router.push("/");
};
</script>
<style lang="sass" scoped>
.forget-password
  display: flex
  flex-direction: column
  gap: 1rem
  padding: 2rem
  max-width: 340px
  margin-inline: auto

  h1
    font-size: 1.5rem
    font-weight: 600
    text-align: start

  p
    font-size: 0.875rem

  form
    display: flex
    flex-direction: column
    gap: 1rem
    width: 100%
    max-width: 300px

    a
      font-size: 0.875rem

    button
      padding-inline: 1rem
      font-weight: 600
      padding-block: .8rem
      background-color: rgb(var(--v-theme-play)) !important
      color: white
</style>
