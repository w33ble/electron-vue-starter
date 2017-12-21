<template>
  <div>
    <h2>Home</h2>
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      message: {
        type: String,
        default: 'No Message :(',
      },
    },
  };
</script>
