import { ref, onMounted, computed } from 'vue';

const useResponsive = () => {
  const screenWidth = ref(window.innerWidth);

  onMounted(() => {
    window.addEventListener('resize', () => {
      screenWidth.value = window.innerWidth;
    });
  });

  const sm = computed(() => screenWidth.value < 480);
  const md = computed(() => screenWidth.value >= 480 && screenWidth.value < 768);
  const lg = computed(() => screenWidth.value >= 768 && screenWidth.value < 1024);
  const xl = computed(() => screenWidth.value >= 1024 && screenWidth.value < 1200);
  const xxl = computed(() => screenWidth.value >= 1280);
  const mdAndUp = computed(() => screenWidth.value >= 768);

  return {
    screenWidth,
    sm,
    md,
    lg,
    xl,
    xxl,
    mdAndUp,
  }
}

export default useResponsive;
