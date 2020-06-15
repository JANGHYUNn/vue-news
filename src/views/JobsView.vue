<template>
  <div>
    <ul class="job-list">
      <li class="post" v-for="(job, index) in fetchedJobs" v-bind:key="index">
        <div class="points">{{ job.points || index }}</div>
        <div>
          <p class="job-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">{{ job.time_ago }}, {{ job.domain }}</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedJobs"])
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  }
};
</script>

<style scoped>
.job-list {
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

.job-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>