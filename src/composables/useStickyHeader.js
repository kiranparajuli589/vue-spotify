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

  const fnToRunOnMounted = () => {
    const appMain = document.querySelector(".app_main")

    appMain.addEventListener("scroll", () => {
      const rectTop = stickyHeader.value.getBoundingClientRect().top
      console.log(rectTop)
      if (rectTop.toFixed(0) < 80) {
        console.log("here", colorBg.value)
        stickyHeader.value.style.backgroundColor = colorBg.value
      } else {
        stickyHeader.value.style.backgroundColor = "transparent"
      }

      const gridHeader = document.querySelector(".grid__header")
      if (appMain.scrollTop > 100) {
        gridHeader.classList.add("scrolled")
      } else {
        gridHeader.classList.remove("scrolled")
      }
    })

    appMain.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  onMounted(fnToRunOnMounted)

  return {
    stickyHeader,
    colorBg,
    headerSectionBg,
    albumSectionBg,
    actionSectionBg,
  }
}

export default useStickyHeader
