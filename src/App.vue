<template>
  <div id="app">
    <HelloWorld /><br>
    <TargetEditor />
    <hr>
    <p>
      This demo shows a simple usage of the store mode in Vue.js, which helps exchanging information between multiple components.
    </p>
    <p>
      Edit content in the input box, and as you can see, the contents shown by each component changes.
    </p>
    <p>
      That's because the two components imports the same "store", to read and write the same variable. Thus the same information can be used by different components by importing the same "store". 
    </p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TargetEditor from './components/TargetEditor.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TargetEditor,
  },
};
</script>
