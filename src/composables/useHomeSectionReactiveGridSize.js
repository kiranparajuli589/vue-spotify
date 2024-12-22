import {computed} from 'vue';
import useResponsive from "@/composables/useResponsive.js";

const useHomeSectionReactiveGridSize = ({ size } = {}) => {
  const {
    screenWidth,
  } = useResponsive()

  return computed(() => {
    if (size) return size
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
    if (screenWidth.value >= 250 && screenWidth.value < 768) {
      return 2
    }
    return 1
  })
}

export default useHomeSectionReactiveGridSize;
