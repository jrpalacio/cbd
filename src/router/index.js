import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '@/views/RegisterView.vue'
import QuestionsView from '@/views/QuestionsView.vue'
import AccountView from '@/views/AccountView.vue'
import DetailView from '@/views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RegisterView
    },
    {
      path: '/drop-detail/:id',
      name: 'drop-detail',
      component: DetailView
    },
    {
      path: '/questions',
      name: 'questions',
      component: QuestionsView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    }
  ]
})

export default router
