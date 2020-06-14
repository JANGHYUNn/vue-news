<template>
  <div class="header">
      <router-link to="/News">News</router-link> |
      <router-link to="/Ask">Ask</router-link> |
      <router-link to="/Jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
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