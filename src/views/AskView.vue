<template>
  <div>
      <div v-for="ask in fetchedAsk">{{ ask.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        // ...mapState({
        //     ask: state => state.ask
        // })

        ...mapGetters(['fetchedAsk'])
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>