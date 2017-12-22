import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Demo from './pages/Demo.vue';

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: {
        message: 'Electron + Vue = Win!',
      },
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo,
    },
  ],
});

export default router;
