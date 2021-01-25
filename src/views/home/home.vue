<template>
  <div id="home">   
    <Header></Header>
    <div id="content">
      <Sidebar></Sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang='ts'>
import {Vue,Component,Prop} from 'vue-property-decorator';
import Sidebar from "../../components/sidebar/sidebar.vue";
import Header from "../../components/header/header.vue";
@Component({
  components:{
    Header,Sidebar
  }
})
export default class Home extends Vue {

}
</script>

<style lang="scss">
#home{
  height: 100%;
  #content{
    display: flex;
  }
}
</style>