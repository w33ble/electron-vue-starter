<template>
  <div class="buddies">
    <BuddyListItem v-for="buddy in buddies" :buddy="buddy" />
    <div>All Done</div>
  </div>
</template>

<script>
  import BuddyListItem from '../components/BuddyListItem.vue';

  const buddy = {
    username: 'w33ble',
    status: 'Out to lunch, be back home in a little while',
    avatar: null,
  };

  const buddies = [];

  for (let i = 0; i < 20; i++) {
    buddies.push(
      Object.assign({}, buddy, {
        username: `${buddy.username} ${i + 1}`,
        status: i < 5 ? `${buddy.status.substr(0, 30)}...` : buddy.status,
      })
    );
  }

  export default {
    name: 'BuddyList',
    data() {
      return {
        buddies,
      };
    },
    components: {
      BuddyListItem,
    },
  };
</script>
