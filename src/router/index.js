import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Testimonial from '../views/Testimonial.vue'
import Resume from '../views/Resume.vue'
import Projects from '../views/Projects.vue'
// import Portfolio from '../views/Portfolio.vue'
import Contacts from '../views/Contacts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Testimonial',
    name: 'Testimonial',
    component: Testimonial
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
  // {
  //   path: '/Prortfolio',
  //   name: 'Portfolio',
  //   component: Portfolio
  // },
  {
    path: '/Contacts',
    name: 'Contacts',
    component: Contacts
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
