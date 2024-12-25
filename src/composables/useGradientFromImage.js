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
      .then(c => {
        colorBg.value = c
        actionSectionBg.value = darkenByFactor(c, 30)
        let topEnd = addOpacityToRgb(c, 0.3)
        let bottomEnd = darkenByFactor(c, 20)
        headerSectionBg.value = `linear-gradient(180deg, ${topEnd}, ${bottomEnd})`

        topEnd = darkenByFactor(c, 30)
        bottomEnd = "rgb(18 18 18)"
        albumSectionBg.value = `linear-gradient(180deg, ${topEnd}, ${bottomEnd})`
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
