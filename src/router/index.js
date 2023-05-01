import { createRouter, createWebHistory } from 'vue-router'
import AllQuestionView from '../views/AllQuestionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'question',
      component: AllQuestionView
    },
    {
      path: '/ask',
      name: 'ask',
      component: () => import('../views/AskQuestion.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../views/QuestionDetails.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
