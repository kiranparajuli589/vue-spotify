import {onMounted, useTemplateRef} from "vue";
import useGradientFromImage from "@/composables/useGradientFromImage.js";

const useStickyHeader = (image) => {
  const stickyHeader = useTemplateRef("stickyHeader")
  const {
    colorBg,
    headerSectionBg,
    albumSectionBg,
    actionSectionBg,
  } = useGradientFromImage(image)

  onMounted(() => {
    const appMain = document.querySelector(".app_main")

    appMain.addEventListener("scroll", () => {
      const rectTop = stickyHeader.value.getBoundingClientRect().top
      if (rectTop.toFixed(0) < 70) {
        stickyHeader.value.style.backgroundColor = colorBg.value
      } else {
        stickyHeader.value.style.backgroundColor = "transparent"
      }
    })
  })

  return {
    stickyHeader,
    colorBg,
    headerSectionBg,
    albumSectionBg,
    actionSectionBg,
  }
}

export default useStickyHeader
