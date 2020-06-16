<template>
  <div>
    <section>
      <user-profile>
        <div slot="username">
          <router-link :to="`/vue-news/user/${itemInfo.user}`">{{
            itemInfo.user
          }}</router-link>
        </div>
        <template slot="time">
          {{ itemInfo.time_ago }}
        </template>
      </user-profile>
      <h2>{{ itemInfo.title }}</h2>
    </section>

    <section>
      <div v-html="itemInfo.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  computed: {
    itemInfo() {
      return this.$store.state.item;
    },
  },
  created() {
    const itemId = this.$route.params.id;

    this.$store.dispatch('FETCH_ITEM', itemId);
  },
};
</script>

<style scoped></style>
