<template>
    <div>
        <small>HelloWorld.vue</small><br>
        Hello {{ store.state.target }}!
    </div>
</template>

<script>
import store from '../store/store';

export default {
    data() {
      return { store };
    },
    // mounted() {  // un-comment to see the structure of this.store
    //   console.log(this.store);
    // }
};
</script>
