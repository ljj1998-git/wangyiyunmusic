<template>
  <div id="FindMusic">
    <Tags></Tags>
    <router-view class="link"></router-view>
  </div>
</template>

<script lang='ts'>
  import {
    Component,
    Vue,
    Prop
  } from "vue-property-decorator";
  import Tags from "../../components/common/Tabs.vue"
  @Component({
    components: {
      Tags
    }
  })
  export default class FindMusic extends Vue {

  }
</script>

<style lang="scss">
  #FindMusic {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    .link{
      margin: 25px 0px 0px 10px;
    }
  }
</style>