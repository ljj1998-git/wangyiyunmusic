<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//使用装饰器Component，作用是告诉TypeScript，下面是个Vue组件，里面这些语句等会自动被处理为对应的构造选项data、methods、生命周期钩子
@Component({
  components: {
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,body,#app{
  height: 100%;
}
</style>
