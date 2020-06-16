<template>
  <ul class="news-list">
    <li class="post" v-for="(item, index) in listItems" v-bind:key="index">
      <div class="points">{{ item.points || index }}</div>
      <div>
        <template v-if="item.domain">
          <p class="list-title">
            <a :href="item.url">{{ item.title }}</a>
          </p>
        </template>
        <template v-else>
          <p class="list-title">
            <a :href="item.url">
              <router-link v-bind:to="`/vue-news/item/${item.id}`">
                {{
                item.title
                }}
              </router-link>
            </a>
          </p>
        </template>
        <small class="link-text">
          {{ item.time_ago }} by
          <router-link
            v-if="item.user"
            class="link-text"
            :to="`/vue-news/user/${item.user}`"
          >{{ item.user }}</router-link>
          <a v-else :href="item.url">{{ item.domain }}</a>
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    listItems() {
      return this.$store.state.list;
    }
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

.list-title {
  margin: 0;
}

.link-text {
  color: #828282;
}

a:hover {
  color: #43b883;
  text-decoration: underline;
}
</style>
