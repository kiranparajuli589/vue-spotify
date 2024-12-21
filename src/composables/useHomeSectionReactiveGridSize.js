import { computed } from 'vue';
import useResponsive from "@/composables/useResponsive.js";

const useHomeSectionReactiveGridSize = () => {
  const {
    screenWidth,
  } = useResponsive()

  const size = computed(() => {
    if (screenWidth.value >= 1280) {
      return 6
    }
    if (screenWidth.value >= 1120 && screenWidth.value < 1280) {
      return 5
    }
    if (screenWidth.value >= 950 && screenWidth.value < 1120) {
      return 4
    }
    if (screenWidth.value >= 768 && screenWidth.value < 950) {
      return 3
    }
    if (screenWidth.value >= 480 && screenWidth.value < 768) {
      return 2
    }
    return 1
  })

  return {
    size,
  }
}

export default useHomeSectionReactiveGridSize;
