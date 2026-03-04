import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './css/base.css'
// import './css/layout.css'
// import './css/navbar.css'
// import './css/sidebar.css'
// import './css/notes.css'
// import './css/footer.css'

import './css/base.css'
import './css/layout.css'
import './css/navbar.css'
import './css/footer.css'

createApp(App)
  .use(router)
  .mount('#app')