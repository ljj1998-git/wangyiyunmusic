<template>
    <div id='Tags'>
        <div :class="`Tags-box ${selectIndex === index ? 'active' : '' }`" v-for="(item, index) in arr" :key="index" @click="select(index)">{{item}}</div>
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
        arr: string[] = ['个性推荐', '歌单', '主播电台', '排行榜', '歌手', '最新音乐'];
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
    .active{
        font-weight: 600;
        font-size: 20px;
        color: #000;
        border-bottom: 5px solid red;
    }
    #Tags {
        @include flex;
        .Tags-box{
            margin-left: 5px;
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