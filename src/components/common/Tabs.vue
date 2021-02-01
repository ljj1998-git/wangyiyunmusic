<template>
    <div id='Tags'>
        <router-link :to="item.path" tag="div" :class="`Tags-box ${selectIndex === index ? 'active' : '' }`" v-for="(item, index) in arr" :key="index" @click="select(index)">{{item.name}}</router-link>
    </div>
</template>

<script lang='ts'>
    import {
        Component,
        Vue,
        Prop
    } from "vue-property-decorator";

    @Component({
        components: {

        }
    })
    export default class Tags extends Vue {
        selectIndex: number = 0;
        arr: object[] = [
            { name: '个性推荐', path:'gxtj' },
            { name: '歌单', path:'gd' },
            { name: '主播电台', path:'zbdt' },
            { name: '排行榜', path:'phb'},
            { name: '歌手', path:'gs' },
            { name: '最新音乐', path:'zxyy' }]
        public select (num: number): void {
            this.selectIndex = num;
        }
    }
</script>

<style lang="scss">
    @mixin flex {
        display: flex;
        align-items: center;
    }
    #Tags .router-link-active{
        font-weight: 600;
        font-size: 20px;
        color: #000;
        border-bottom: 4px solid red;
    }
    #Tags {
        @include flex;
        .Tags-box{
            margin-left: 10px;
            padding: 5px;
            box-sizing: border-box;
            color: rgb(116, 114, 114);
            &:hover{
                cursor: pointer;
                color:  rgb(15, 15, 15);
            }
        }
    }
</style>