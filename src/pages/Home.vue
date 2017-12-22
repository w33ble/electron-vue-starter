<template>
  <div>
    <h1>Home</h1>
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
