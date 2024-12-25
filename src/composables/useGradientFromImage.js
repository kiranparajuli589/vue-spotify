import {onBeforeMount, ref, watch} from "vue";
import getImageColor, {addOpacityToRgb, darkenByFactor} from "@/helpers/imageColor.js";

const useGradientFromImage = (image) => {
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
      .then(color => {
        actionSectionBg.value = darkenByFactor(color, 30)
        let topEnd = addOpacityToRgb(color, 0.3)
        let bottomEnd = darkenByFactor(color, 20)
        headerSectionBg.value = `linear-gradient(180deg, ${topEnd}, ${bottomEnd})`

        topEnd = darkenByFactor(color, 30)
        bottomEnd = "rgb(18 18 18)"
        albumSectionBg.value = `linear-gradient(180deg, ${topEnd}, ${bottomEnd})`
      })
  }

  return {
    headerSectionBg,
    actionSectionBg,
    albumSectionBg
  }
}

export default useGradientFromImage
