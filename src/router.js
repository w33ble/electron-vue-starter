import VueRouter from 'vue-router';
import BuddyList from './pages/BuddyList.vue';
import Demo from './pages/Demo.vue';

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'buddylist',
      component: BuddyList,
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo,
    },
  ],
});

export default router;
