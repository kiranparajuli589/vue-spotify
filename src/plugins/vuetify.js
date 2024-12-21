import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import Theme from "../../theme.js";

export default createVuetify({
  theme: {
    defaultTheme: 'spotifyTheme',
    themes: {
      spotifyTheme: {
        dark: true,
        colors: Theme.colors,
      }
    }
  },
})
