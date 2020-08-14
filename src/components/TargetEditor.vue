<template>
    <div>
        <small>TargetEditor.vue</small><br>
        Edit target: <input type="text" v-model="store.state.target" placeholder="Edit me">
    </div>
</template>

<script>
import store from '../store/store';

export default {
    data() {
        return { store };
    }
}
</script>
