import {onBeforeMount, ref, watch} from "vue";
import getImageColor, {addOpacityToRgb, darkenByFactor} from "@/helpers/imageColor.js";

const useGradientFromImage = (image) => {
  const colorBg = ref("transparent")
  const headerSectionBg = ref("transparent")
  const actionSectionBg = ref("rgb(0, 0, 0)")
  const albumSectionBg = ref("rgb(0, 0, 0)")

  onBeforeMount(() => {
    handleImageColor()
  })

  watch(() => image, () => {
    handleImageColor()
  })

  const handleImageColor = () => {
    if (!image) {
      return;
    }
    getImageColor(image)
      .then(({ color: c, light}) => {
        colorBg.value = c
        actionSectionBg.value = darkenByFactor(c, 30)
        let topEnd = addOpacityToRgb(c, 0.3)
        let bottomEnd = darkenByFactor(c, light ? 50 : 40)
        headerSectionBg.value = `linear-gradient(180deg, ${topEnd}, ${bottomEnd})`

        let superBase = "rgb(18 18 18)"
        albumSectionBg.value = `linear-gradient(180deg, ${bottomEnd}, ${superBase})`
      })
  }

  return {
    colorBg,
    headerSectionBg,
    actionSectionBg,
    albumSectionBg
  }
}

export default useGradientFromImage
