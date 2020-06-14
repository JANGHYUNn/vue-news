<template>
  <div>
      <div v-for="job in jobsData">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'

export default {
    data() {
        return {
            jobsData: []
        }
    },
    created() {
        fetchJobsList()
        .then( result => {
            this.jobsData = result.data
        })
        .catch( error => {
            console.log(error);
        })
    }
}
</script>

<style>

</style>