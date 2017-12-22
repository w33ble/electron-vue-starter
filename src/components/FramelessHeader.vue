<template>
  <div class="nav">
    <div class="nav-logo">
      Status Hub
    </div>
    <router-link class="nav-item btn btn-text" :to="{ name: 'home' }">
      Home
    </router-link>
    <router-link class="nav-item btn btn-text" :to="{ name: 'demo' }">
      Demo
    </router-link>
    <div class="nav-left">
      <button class="nav-item" @click="closeApp">Close</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FramelessHeader',
    methods: {
      closeApp() {
        const win = this.$electron.remote.BrowserWindow.getFocusedWindow();
        win.close();
      },
    },
  };
</script>