<template>
  <form
    :class="{
      'd-flex': true,
      'search-focused': isSearchInputFocused
    }"
    @submit="onSubmit"
  >
    <img
      src="@/assets/icons/svgs/search.svg"
      height="24"
      width="24"
      class="search-icon"
      alt="search"
    >
    <input
      v-model="search"
      type="search"
      name="search"
      placeholder="What do you want to play?"
      @focus="isSearchInputFocused = true"
      @blur="isSearchInputFocused = false"
      @keydown.enter="onSubmit"
    >

    <template v-if="search.length > 0">
      <button
        class="reset-btn"
        type="reset"
        @click="search = ''"
      >
        <VImg
          src="@/assets/icons/svgs/close.svg"
          height="28"
          width="28"
        />
      </button>
    </template>
    <template v-else>
      <RouterLink
        to="/search"
        class="to-search"
      >
        <VImg
          :src="folderIcon"
          height="28"
          width="28"
        />
      </RouterLink>
    </template>
  </form>
</template>
<script setup>
import {computed, ref, watch} from "vue";
import {debounce} from "lodash";
import {useRouter} from "vue-router";

const router = useRouter()

const search = ref('')
const isSearchInputFocused = ref(false)

const isSearchPage = computed(() => /^\/search\/?$/.test(router.currentRoute.value.path))

const onSubmit = (e) => {
  e.preventDefault()
  router.push(`/search/${search.value}`)
}

watch(() => search.value, (nV) => {
  debouncedNavigation(nV)
})

const debouncedNavigation = debounce((nV) => {
  router.push(`/search/${nV}`)
}, 500)

const folderIcon = computed(() => {
  if (isSearchPage.value) {
    return new URL('@/assets/icons/svgs/folder_filled.svg', import.meta.url).href
  }
  return new URL('@/assets/icons/svgs/folder_outlined.svg', import.meta.url).href
})
</script>
<style lang="sass" scoped>
form
  position: relative
  flex-grow: 1
  max-width: 450px

  .search-icon, .reset-btn, .to-search
    position: absolute
    top: 50%
    transform: translateY(-50%)

  &.search-focused
    input[type="search"]
      border: 1px solid #a4a4a4

  .search-icon
    left: 14px

  .reset-btn, .to-search
    cursor: pointer
    right: 14px

  .to-search
    border-left: 1px solid #909090
    padding-left: 10px
    border-radius: 0

  input[type="search"]
    border: 1px solid transparent
    padding: 12px 48px
    height: 100%
    border-radius: 500px
    background-color: rgba(255, 255, 255, 0.1)

    width: 100%
    min-width: 350px

    &:hover
      background-color: rgba(255, 255, 255, 0.2)
      border-color: #646464

    &:focus
      outline: none
      border-color: white

    transition: border-color 0.3s ease-in-out

</style>
