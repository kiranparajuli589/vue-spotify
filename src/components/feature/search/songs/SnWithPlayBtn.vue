<template>
  <div class="sn">
    <span>{{ rowIndex + 1 }}</span>
    <button
      :class="{
        'icon-btn': true,
        'icon-btn--compact': compact
      }"
    >
      <img
        src="@/assets/icons/svgs/play_white.svg"
        alt="play"
      >
    </button>
  </div>
</template>
<script setup>
defineProps({
  rowData: {
    type: Object,
    required: true
  },
  rowIndex: {
    type: Number,
    required: true
  },
  compact: {
    type: Boolean,
    default: false
  }
})
</script>
<style lang="scss" scoped>
.sn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  .icon-btn {
    display: none;
  }
}
</style>
<style lang="scss">
.grid__row {
  &:hover {
    .sn {
      span {
        display: none;
      }
      .icon-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        width: 32px;
        border-radius: 50%;
        &:hover {
          background: rgba(0, 0, 0, 0.1);
        }
        &--compact {
          height: 24px;
          width: 24px;
          img {
            height: 20px;
            width: 20px;
          }
        }
      }
    }
  }
}
</style>
