<template>
  <div class="header">
    <router-link to="/vue-news/news">News</router-link> |
    <router-link to="/vue-news/ask">Ask</router-link> |
    <router-link to="/vue-news/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scopd>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}
.header .router-link-exact-active {
  color: #35495e;
}

.header a {
  color: white;
}
</style>
