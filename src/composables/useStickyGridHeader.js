import {onMounted} from "vue";

const useStickyGridHeader = () => {
  onMounted(() => {
    const appMain = document.querySelector(".app_main")
    appMain.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    appMain.addEventListener("scroll", () => {
      const gridHeader = document.querySelector(".grid__header")
      if (appMain.scrollTop > 100) {
        gridHeader.classList.add("scrolled")
      } else {
        gridHeader.classList.remove("scrolled")
      }
    })
  })
}

export default useStickyGridHeader
