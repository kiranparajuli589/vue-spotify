<template>
  <div class="auth-register">
    <VImg
      src="/logo.png"
      alt="Spotify logo"
      width="64"
      height="64"
    />

    <h1>
      Sign up to start listening
    </h1>

    <form
      @submit.prevent="submitRegister"
    >
      <TextInput
        v-model="register.email"
        name="email"
        label="Email address"
        :errors="register.errors"
        required
        autofocus
        placeholder="Email address"
      />

      <button
        type="submit"
        class="filled-btn"
        @click="submitRegister"
      >
        Next
      </button>
    </form>

    <div class="divider">
      <div class="line" />
      <div>or</div>
      <div class="line" />
    </div>

    <div class="social-links">
      <button>
        <VImg
          src="@/assets/icons/pngs/google-symbol.png"
          alt="Google logo"
          width="24"
          height="24"
        />

        <span>Sign up with google</span>
      </button>
      <button>
        <VImg
          src="@/assets/icons/pngs/facebook.png"
          alt="Facebook logo"
          width="24"
          height="24"
        />
        <span>Sign up with facebook</span>
      </button>
      <button>
        <VImg
          src="@/assets/icons/pngs/apple-symbol.png"
          alt="Apple logo"
          width="24"
          height="24"
        />
        <span>Sign up with apple</span>
      </button>
    </div>

    <hr>

    <p>
      <span>Already have an account?</span>
      <router-link to="/auth/login">
        Log in here
      </router-link>
      <span>.</span>
    </p>
  </div>
</template>
<style lang="sass">
.auth-register
  display: flex
  flex-direction: column
  gap: 1rem
  padding: 1rem
  justify-content: center
  align-items: center
  max-width: 350px
  margin-inline: auto

  .divider
    width: 100%
    display: grid
    grid-template-columns: 1fr auto 1fr
    gap: 1rem
    align-items: center

    .line
      background-color: rgba(255, 255, 255, 0.3)
      height: 1px
      width: 100%

  form
    width: 100%
    display: flex
    flex-direction: column
    gap: 1rem
    align-items: center
    .text-input
      width: 100%
      margin-block: 1rem
    button[type="submit"]
      width: 100%
      padding-block: .8rem
      font-weight: 600
      background-color: rgb(var(--v-theme-play))!important


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

</style>
<script setup lang="ts">
import TextInput from "@/components/designComponents/form/TextInput.vue";
import {reactive} from "vue";
import {useRouter} from "vue-router";

const register = reactive(
  {
    email: "",
    errors: [],
  }
)

const router = useRouter()
const submitRegister = () => {
  console.log("Registering...");
  router.push("/")
}
</script>
