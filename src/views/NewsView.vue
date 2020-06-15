<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="(news, index) in fetchedNews" v-bind:key="index">
        <div class="points">{{ news.points }}</div>
        <div>
          <p class="news-title">
            <a :href="news.url">{{ news.title }}</a>
          </p>
          <small class="link-text">
            {{ news.time_ago }} by
            <router-link class="link-text" :to="`/user/${news.user}`">{{ news.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedNews"])
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  }
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  display: flex;
  list-style: none;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>