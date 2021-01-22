<template>
  <div id="home">   
    <Header></Header>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar/sidebar.vue"
import Header from "@/components/header/header.vue";
export default {
  components: { Header,Sidebar },
}
</script>

<style>
#home{
  height: 100%;
}
</style>