<template>
  <div>
      <div v-for="news in newsData">{{ news.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js'

export default {
    data() {
        return {
            newsData: []
        }
    },
    created() {
        fetchNewsList()
        .then( result => {
            this.newsData = result.data;
        })
        .catch( error => {
            console.log(error);
        })
    }
}
</script>

<style>

</style>