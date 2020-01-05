<template>
  <div>
    <FormItem v-for="(item, index) in state" :cancel="cancel" :item="item" :key="index" />
  </div>
</template>









<script>
import FormItem from "./FormItem";
export default {
  props: {
    state: Array,
    cancel: Function
  },
  components: {
    FormItem
  },
  mounted() {},
  methods: {}
};
</script>



