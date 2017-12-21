import VueRouter from 'vue-router';
import Home from './pages/Home.vue';

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: {
        message: 'Electron + Vue = Win!'
      },
    }
  ],
});

export default router;