<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from './views/home/home.vue';
@Component({
  components: {
    Home
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,body,#app{
  height: 100%;
}
</style>
