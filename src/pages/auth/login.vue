<template>
  <div class="auth-login">
    <VImg
      src="/logo.png"
      alt="Spotify logo"
      width="64"
      height="64"
    />

    <div class="social-links">
      <button>
        <VImg
          src="@/assets/icons/pngs/google-symbol.png"
          alt="Google logo"
          width="24"
          height="24"
        />

        <span>Continue with google</span>
      </button>
      <button>
        <VImg
          src="@/assets/icons/pngs/facebook.png"
          alt="Facebook logo"
          width="24"
          height="24"
        />
        <span>Continue with facebook</span>
      </button>
      <button>
        <VImg
          src="@/assets/icons/pngs/apple-symbol.png"
          alt="Apple logo"
          width="24"
          height="24"
        />
        <span>Continue with apple</span>
      </button>
    </div>

    <hr>

    <form
      @submit.prevent="submitLogin"
    >
      <TextInput
        v-model="login.email"
        name="email"
        label="Email address"
        :errors="login.errors"
        required
        autofocus
        placeholder="Email or username"
      />

      <PasswordInput
        v-model="login.password"
        :errors="login.errors"
        required
      />

      <button
        type="submit"
        class="filled-btn"
      >
        Log in
      </button>
    </form>

    <a href="">
      Forgot your password?
    </a>

    <div>
      Don't have an account?
      <a href="">
        Sign up for Spotify
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import TextInput from "@/components/designComponents/form/TextInput.vue";
import {reactive} from "vue";
import PasswordInput from "@/components/designComponents/form/PasswordInput.vue";
import {useRouter} from "vue-router";

const login = reactive(
  {
    email: "",
    password: "",
    errors: [],
  }
)

const router = useRouter()
const submitLogin = () => {
  console.log("Logging in...");
  router.push("/")
}
</script>
<style lang="sass" scoped>
.auth-login
  display: flex
  flex-direction: column
  gap: 1rem
  padding: 1rem
  justify-content: center
  align-items: center

  .social-links
    display: flex
    flex-direction: column
    gap: .5rem
    button
      border: 1px solid rgba(255, 255, 255, 0.3)
      &:hover
        border: 1px solid rgba(255, 255, 255, 0.6)
      border-radius: 24px
      padding: .8rem 1.5rem
      cursor: pointer
      display: grid
      grid-template-columns: 24px 1fr
      gap: 2rem
      span
        text-align: start

  hr
    width: 100%
    border: none
    border-top: 1px solid rgba(255, 255, 255, 0.3)
    margin-block: 1rem
    margin-inline: auto
    max-width: 400px
  form
    display: flex
    flex-direction: column
    gap: 1rem
    width: 100%
    max-width: 300px

    button[type="submit"]
      padding: .8rem
      cursor: pointer
      margin-top: 2rem
      font-weight: 600
  a
    text-decoration: underline
    font-weight: 500
    padding-inline: 0.2rem
</style>
