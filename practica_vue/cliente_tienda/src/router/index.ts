import PersonalAgregarVue from '@/modules/personal/views/PersonalAgregarVue.vue'
import PersonalEditarVue from '@/modules/personal/views/PersonalEditarVue.vue'
import PersonalEliminarVue from '@/modules/personal/views/PersonalEliminarVue.vue'
import PersonalVue from '@/modules/personal/views/PersonalVue.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/personal',
      name: 'personal',
      component: PersonalVue,
    },
    {
      path: '/personal/agregar',
      name: 'personalagregar',
      component: PersonalAgregarVue,
    },
    {
      path: '/personal/:id/editar',
      name: 'personaleditar',
      component: PersonalEditarVue,
    },
    {
      path: '/personal/:id/borrar',
      name: 'personalborrar',
      component: PersonalEliminarVue
    },
  ],
})

export default router
