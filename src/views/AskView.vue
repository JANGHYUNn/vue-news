<template>
  <div>
      <div v-for="ask in askData">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js'

export default {
    data() {
        return {
            askData: []
        }
    },
    created() {
        fetchAskList()
        .then( result => {
            this.askData = result.data;
        })
        .catch( error => {
            console.log(error);
        })
    }
}
</script>

<style>

</style>