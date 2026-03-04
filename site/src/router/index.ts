import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Notes from '../pages/Notes.vue'
import Github from '../pages/Github.vue'
import Projects from '../pages/Projects.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/notes', component: Notes },
    { path: '/github', component: Github },
    { path: '/projects', component: Projects }
  ]
})

export default router