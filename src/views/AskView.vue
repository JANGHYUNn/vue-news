<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script scoped>
import ListItem from "../components/ListItem.vue";
import ListMixins from "../mixins/ListMixin.js";

export default {
  components: {
    ListItem
  },
  mixins: [ListMixins]
};
</script>

<style></style>
