<template>
  <div id="FindMusic">
    <Tags></Tags>
    33
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
    padding: 16px;
    box-sizing: border-box;
  }
</style>