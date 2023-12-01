import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'

const app = createApp(App)

const deblur = function (evt) {
  let target = evt.target
  if (target.nodeName == 'SPAN') {
    target = evt.target.parentNode
  }
  target.blur()
}

app.directive('btn', {
  mounted(el) {
    el.addEventListener('focus', deblur)
  },
  unmounted(el) {
    el.removeEventListener('focus', deblur)
  }
});
app.mount('#app')