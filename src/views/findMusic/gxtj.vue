<template>
    <div id="gxtj">
        <div id="swiper">
            <el-carousel :interval="5000" type="card" height="200px">
                <el-carousel-item v-for="item in 8" :key="item">
                    <img height="100%" width="100%" :src="require(`../../assets/images/bg${item}.jpg`)" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div id="tjgd">
            <Title :title="'推荐歌单'"></Title>
            <Tjgd></Tjgd>
        </div>
        <div id="djfs">
            <Title :title="'独家放送'"></Title>
        </div>
        <div id="zxyy">
            <Title :title="'最新音乐'"></Title>
        </div>
        <div id="tjMV">
            <Title :title="'推荐MV'"></Title>
        </div>
        <div id="zbdt">
            <Title :title="'主播电台'"></Title>
        </div>
        <div id="tt">
            <Title :title="'听听'"></Title>
        </div>
        <div id="kk">
            <Title :title="'看看'"></Title>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    import Tjgd from '../../components/findMusic/personalized.vue'
    import Title from '../../components/findMusic/title.vue'
    @Component({
        components:{
            Tjgd, Title
        }
    })
    export default class Gxtj extends Vue {
        
    }
</script>

<style lang='scss'>
    #gxtj {
        width: 100%;
    }
</style>