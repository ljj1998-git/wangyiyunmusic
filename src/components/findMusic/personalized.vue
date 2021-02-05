<template>
    <div id="TjgdList">
        <div class="box1">
            <div class="icon">
                <span class="week">5</span>
                <span class="iconfont icon-rili"></span>
            </div>
            <div class="text">每日歌曲推荐</div>
            <div class="TjgdPlay"><span class="iconfont icon-play"></span></div>
        </div>
        <router-link :to="{path:'/songSheet',query:{id:item.id}}" tag="div" class="box1" v-for="(item,index) in dataList" :key="index">
            <img :src="item.picUrl" class="img" />
            <div class="text">{{item.name}}</div>
            <div class="TjgdPlay"><span class="iconfont icon-play"></span></div>
            <div class="playCount"><span class="iconfont icon-play1"></span>{{item.playCount}}</div>
        </router-link>
    </div>
</template>

<script lang="ts">
    import {
        Vue,
        Component,
        Prop
    } from "vue-property-decorator";
    import {
        getPersonalized
    } from '../../api/findMusic/personalized'
    @Component
    export default class TjgdList extends Vue {
        mounted() {
            this.getData();
        }
        dataList: Array < object > = [];
        private getData() {
            getPersonalized().then((item: any) => {
                console.log(item);
                if (item.code === 200) {
                    this.dataList = item.result
                } else {
                    this.$message({
                        message: '获取歌单失败',
                        type: 'error'
                    });
                }
            })
        }
    }
</script>

<style lang="scss">
    @mixin flex {
        display: flex;
    }

    @mixin overflowText {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    @mixin img {
        border-radius: 5px;
    }

    @keyframes display {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    #TjgdList {
        @include flex;
        flex-wrap: wrap;

        .box1 {
            width: 15%;
            margin: 0 15px 10px 0;
            position: relative;

            .img {
                width: 100%;
                @include img;
                display: block;
            }

            .text {
                @include overflowText;
                font-weight: 300;
                margin-top: 5px;
            }

            .icon {
                @include img;
                width: 100%;
                height: calc(100% - 46px);
                background: linear-gradient(#44525a, #2d599b);
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;

                .week {
                    color: #fff;
                    font-size: 20px;
                    position: absolute;
                    left: 50%;
                    top: 55%;
                    transform: translate(-50%, -50%);
                }

                .icon-rili {
                    font-size: 80px;
                    color: #fff;
                }
            }

            .TjgdPlay {
                position: absolute;
                bottom: 51px;
                right: 5px;
                width: 40px;
                height: 40px;
                padding-left: 2px;
                box-sizing: border-box;
                border-radius: 50%;
                background: #fff;
                text-align: center;
                line-height: 40px;
                color: red;
                opacity: 0;
            }

            .playCount {
                color: #fff;
                position: absolute;
                top: 3px;
                right: 7px;
                font-size: 12px;
            }

            &:hover {
                cursor: pointer;

                .TjgdPlay {
                    animation: display 0.5s linear forwards;
                }
            }
        }
    }
</style>