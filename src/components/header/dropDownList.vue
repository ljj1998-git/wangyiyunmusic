<template>
    <div class="box">
        <div class="first">
            <div class="dynamic">
                <div class="tag"><span>0</span><span>动态</span></div>
                <div class="tag"><span>4</span><span>关注</span></div>
                <div class="tag"><span>0</span><span>粉丝</span></div>
            </div>
            <div class="sign"><span class="iconfont icon-dataBase"></span><span>签到</span></div>
        </div>
        <el-divider></el-divider>
        <ul class="second">
            <li class="lis" v-for="(item,index) in data1" :key="index">
                <div>
                    <span :class="`iconfont icon-${item.icon}`"></span>
                    <el-badge v-if="item.name === '商城' " is-dot style="margin-left:5px">{{item.name}}</el-badge>
                    <span v-else style="margin-left:5px">{{item.name}}</span>
                </div>
                <div v-if="item.right">
                    <span class="iconfont icon-arrow-right"></span>
                </div>
            </li>
        </ul>
        <el-divider></el-divider>
        <ul class="third">
            <li class="lis" v-for="(item,index) in data2" :key="index">
                <div>
                    <span :class="`iconfont icon-${item.icon}`"></span><span style="margin-left:5px">{{item.name}}</span>
                </div>
                <div v-if="item.right">
                    <span class="iconfont icon-arrow-right"></span>
                </div>
            </li>
        </ul>
        <el-divider></el-divider>
        <ul class="forth">
            <li class="lis" v-for="(item,index) in data3" :key="index" @click="signOut">
                <div>
                    <span :class="`iconfont icon-${item.icon}`"></span><span style="margin-left:5px">{{item.name}}</span>
                </div>
                <div v-if="item.right">
                    <span class="iconfont icon-arrow-right"></span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang='ts'>
    import {
        Vue,
        Component,
        Emit
    } from 'vue-property-decorator';
    import {
        namespace
    } from 'vuex-class'
    const someModule = namespace('Login');
    interface Data {
        name: string;
        icon: string;
        right: boolean;
    }
    @Component
    export default class DropDownList extends Vue {
        $message: any;
        @someModule.Mutation('clearMessage') clearMessage: any;
        @someModule.State('userInfo') userInfo: any;
        private data1: Data[] = [{
            name: '会员中心',
            icon: 'ziyuan',
            right: true,
        }, {
            name: '等级',
            icon: 'dengji',
            right: true,
        }, {
            name: '商城',
            icon: 'shouye',
            right: true,
        }];
        private data2: Data[] = [{
            name: '个人信息设置',
            icon: 'gerenxinxi',
            right: true,
        }, {
            name: '绑定社交账号',
            icon: 'bangding',
            right: true,
        }];
        private data3: Data[] = [{
            name: '退出登录',
            icon: 'Group-',
            right: false,
        }];
        @Emit()
        private signOut(): boolean {
            this.clearMessage();
            this.$message({
                message: '退出成功',
                type: 'success'
            });
            return false;
        };
    }
</script>

<style lang='scss'>
    ul,
    li {
        list-style: none;
    }
    .el-divider {
        margin: 10px 0 !important;
    }
    @mixin flex {
        display: flex;
        align-items: center;
    }

    .box {
        .first {
            width: 100%;
            .dynamic {
                @include flex;
                justify-content: space-around;

                .tag {
                    @include flex;
                    flex-direction: column;
                    cursor: pointer;

                    span:first-child {
                        font-weight: 600;
                    }

                    span:last-child {
                        font-size: 12px;
                    }
                }
            }

            .sign {
                width: 80px;
                height: 30px;
                line-height: 30px;
                border: 1px solid #e4e4e4;
                border-radius: 20px;
                text-align: center;
                margin: 14px auto;
            }
        }
        .second{
            width: 100%;
        }
        .third{
            width:100%;
        }
        .forth{
            width:100%;
        }

        .lis {
            @include flex;
            justify-content: space-between;
            cursor: pointer;

            &:hover {
                background-color: #f0f0f0;
            }

            padding: 8px 0;
        }
    }
</style>