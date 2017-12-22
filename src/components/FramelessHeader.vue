<template>
  <button @click="closeApp">Close</button>
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