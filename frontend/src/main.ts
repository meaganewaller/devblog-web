import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"

import VueAwesomePaginate from "vue-awesome-paginate"
import VueDatePicker from "@vuepic/vue-datepicker"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEnvelope, faMoon, faSun, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faUserSecret,
  faFacebook,
  faLinkedin,
  faInstagram,
  faGithub,
  faTwitter,
  faMoon,
  faSun,
  faEnvelope
)

import "vue-awesome-paginate/dist/style.css";
import "@vuepic/vue-datepicker/dist/main.css"
import "./assets/index.css"

const app = createApp(App)

app.use(createPinia())
app.use(router as any)
app.use(VueAwesomePaginate)

app.component("VueDatePicker", VueDatePicker)
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount("#app")
