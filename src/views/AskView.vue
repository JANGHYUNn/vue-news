<template>
 <div>
    <p v-for="(ask, index) in fetchedAsk" v-bind:key="index">
        <a :href="ask.url">
            {{ ask.title }}
        </a>
        <small>
            {{ ask.time_ago }} by {{ ask.user }}
        </small>
    </p>
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