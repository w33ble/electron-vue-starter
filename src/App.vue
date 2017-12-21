<template>
  <div>
    <FramelessHeader />
    <router-view></router-view>
  </div>
</template>

<script>
  import FramelessHeader from './components/FramelessHeader.vue';

  export default {
    name: 'App',
    components: {
      FramelessHeader,
    },
  };
</script>