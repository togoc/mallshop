<template>
  <div>
    <FormItem v-for="(item, index) in state" :cancel="cancel" :item="item" :key="index" />
  </div>
</template>









<script>
import FormItem from "./FormItem";
export default {
  props: {
    state: Array
  },
  components: {
    FormItem
  },
  mounted() {
  },
  methods: {
    cancel() {
      console.log(1);
    }
  }
};
</script>



