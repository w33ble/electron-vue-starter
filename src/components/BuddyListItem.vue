<template>
  <div class="buddy-list-item">
    <div class="avatar">
      <img v-if="buddy.avatar" :src="buddy.avatar" />
      <img v-else src="./assets/img/silhouette.png" />
    </div>
    <div class="details">
      <div class="username">{{buddy.username}}</div>
      <div class="status">{{buddy.status}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BuddyListItem',
    props: {
      buddy: {
        type: Object,
        required: true,
        validator(val) {
          const hasProps = val.username && val.status && val.avatar !== undefined;
          return hasProps;
        },
      },
    },
  };
</script>

<style lang="less" scoped>
  .buddy-list-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: 0px;
    }

    .avatar {
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;

      img {
        border-radius: 40px;
        height: 40px;
        max-width: 40px;
      }
    }

    .details {
      flex: 1 1 auto;
      padding: 4px 8px;
      line-height: 1.15;

      .username {
        font-weight: bold;
      }

      .status {
        font-style: italic;
        color: #aaa;
      }
    }
  }
</style>