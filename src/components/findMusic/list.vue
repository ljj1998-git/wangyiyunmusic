<template>
    <div id="TjgdList">
        <div class="box">
            <img src="../../assets/images/bg1.jpg" class="img" />
            <div class="text">每日歌单推荐每日歌单推荐每日歌单推荐每日歌单推荐</div>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        Vue,
        Component,
        Prop
    } from "vue-property-decorator";
    @Component
    export default class TjgdList extends Vue {
        
    }
</script>

<style lang="scss">
    @mixin flex {
        display: flex;
        align-items: center;
    }

    @mixin overflowText {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    #TjgdList {
        @include flex;

        .box {
            width: 20%;

            .img {
                width: 100%;
            }

            .text {
                @include overflowText;
                font-weight: 300;
            }
        }
    }
</style>