<template>
  <div>
    <ul class="ask-list">
      <li class="post" v-for="(ask, index) in fetchedAsk" v-bind:key="index">
        <div class="points">{{ ask.points }}</div>
        <div>
          <p class="ask-title">
            <a :href="ask.url">
              <router-link v-bind:to="`/item/${ask.id}`">{{ ask.title }}</router-link>
            </a>
          </p>
          <small class="link-text">
            by
            <router-link class="link-text" :to="`/user/${ask.user}`">{{ ask.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script scoped>
import { mapGetters } from "vuex";

export default {
  computed: {
    // ...mapState({
    //     ask: state => state.ask
    // })

    ...mapGetters(["fetchedAsk"])
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  }
};
</script>

<style>
.ask-list {
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

.ask-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>