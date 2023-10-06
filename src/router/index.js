import { createRouter, createWebHistory } from 'vue-router'
import {auth} from '@/firebase/config';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue'),
    beforeEnter: (to, from, next) => {
      const user = auth.currentUser;

      if (user) {
        next({name: 'Chatroom'});
      }else{
        next();
      }
    }
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: () => import('../views/Chatroom.vue'),
    beforeEnter: (to, from, next) => {
      const user = auth.currentUser;

      if (user) {
        next();
      }else{
        next({ name: 'Welcome' });
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
