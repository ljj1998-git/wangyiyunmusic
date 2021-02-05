<template>
    <div id="songSheet">
        <div class="songSheetTitle">
            <el-image class="songSheetImg" :src="dataList.coverImgUrl" fit="fit"></el-image>
            <div class="songSheetBox">
                <div class="songSheetName">
                    <div>歌单</div>
                    <div>{{dataList.name}}</div>
                </div>
                <div class="creator">
                    <el-avatar size="small" :src="dataList.creator ? dataList.creator.avatarUrl: ''"></el-avatar>
                    <a>{{dataList.creator ? dataList.creator.nickname : ''}}</a>
                    <span>{{getDate}}创建</span>
                </div>
                <ul class="sonsSheetBtn">
                    <li><span class="iconfont icon-play"></span>播放全部<span class="iconfont icon-plus-add"></span></li>
                    <li><span class="iconfont icon-ziyuan1"></span>收藏({{dataList.subscribedCount}})</li>
                    <li><span class="iconfont icon-fenxiang"></span>分享({{dataList.shareCount}})</li>
                    <li><span class="iconfont icon-xiazai"></span>下载全部</li>
                </ul>
                <div class="sonsSheetLabel">
                    <span style="margin-right:5px">标签:</span>
                    <a v-for="(item,index) in dataList.tags" :key="index">{{item}}/</a>
                </div>
                <div class="sonsSheetMessage">
                    <span style="margin-right:5px">歌曲:</span><span style="margin-right:10px">{{dataList.trackCount}}</span>
                    <span style="margin-right:5px">播放:</span><span>{{dataList.playCount}}</span>
                </div>
                <div class="sonsSheetDes">
                    <span>简介:</span><span>{{dataList.description}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
    import {
        Vue,
        Component
    } from 'vue-property-decorator'
    import moment from 'moment'
    import {
        getSongSheetDetail
    } from '../../api/songSheet/songSheet'
    @Component
    export default class SongSheetList extends Vue {
        $route: any
        dataList: any = {}
        mounted() {
            getSongSheetDetail(this.$route.query.id).then((item: any) => {
                console.log(item);
                if (item.code === 200) {
                    this.dataList = item.playlist
                } else {
                    this.$message({
                        message: '获取歌单失败',
                        type: 'error'
                    });
                }
            })
        }
        get getDate() {
            let date = moment(this.dataList.createTime).format('yyyy-MM-DD')
            return date
        }
    }
</script>

<style lang='scss'>
    @mixin flex {
        display: flex;
        align-items: center
    }

    #songSheet {
        .songSheetTitle {
            display: flex;

            .songSheetImg {
                width: 50%;
                margin: 0 20px 0 0;
            }

            .songSheetBox {
                .songSheetName {
                    @include flex;

                    div {
                        &:nth-child(1) {
                            color: red;
                            font-size: 12px;
                            padding: 1px 3px;
                            border: 1px solid red;
                            border-radius: 3px;
                            margin-right: 10px;
                        }

                        &:nth-child(2) {
                            font-size: 24px;
                            font-weight: 600;
                        }
                    }
                }

                .creator {
                    @include flex;
                    margin-top: 5px;
                    font-size: 12px;

                    a {
                        margin: 0 5px
                    }
                }

                .sonsSheetBtn {
                    @include flex;
                    margin-top: 5px;
                    li {
                        border: 1px solid #f0f0f0;
                        border-radius: 20px;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        padding: 3px 10px;
                        font-size: 14px;
                        margin: 0 5px;
                        .iconfont{
                            margin: 0 5px
                        }
                        &:hover{
                            cursor: pointer;
                                background: rgb(240, 238, 238);
                        }
                        &:nth-child(1) {
                            color: #fff;
                            background: rgb(235, 83, 83);

                            &:hover {
                                cursor: pointer;
                                background: rgb(199, 74, 74);
                            }
                        }
                    }
                }

                .sonsSheetLabel{
                    margin-top: 10px;
                    color: #6b6b6b;
                    font-size: 14px;
                }

                .sonsSheetMessage{
                    margin-top: 10px;
                    color: #6b6b6b;
                    font-size: 14px;
                }

                .sonsSheetDes{
                    margin-top: 10px;
                    color: #6b6b6b;
                    font-size: 14px;
                }

            }
        }
    }
</style>