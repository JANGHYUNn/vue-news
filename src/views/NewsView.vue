<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import ListMixins from "../mixins/ListMixin.js";
// import bus from "../utils/bus.js";

export default {
  components: {
    ListItem
  }
  // mixins: [ListMixins]
};
</script>

<style></style>
