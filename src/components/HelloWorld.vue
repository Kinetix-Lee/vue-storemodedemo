<template>
  <div>
    <small>HelloWorld.vue</small><br>
    Hello {{ store.target }}!
  </div>
</template>

<script>
import store from '../store/store';

export default {
  data() {
    return { store };
  },
  mounted() {
    console.log(this.store);
  }
};
</script>
