<template>
    <div class="box">
        <div class="title">扫码登录</div>
        <el-image style="width: 200px; height: 200px" :src="QBcodeUrl"></el-image>
        <div>
            使用<a href="https://music.163.com/#/download" target="_blank">网易云APP</a>扫码登录
        </div>
        <div class="other" @click="toAccountLogin">选择其他登陆模式></div>
    </div>
</template>

<script lang="ts">
    import {
        Vue,
        Component,
        Emit
    } from "vue-property-decorator";
    import {
        getQBcodeKey,
        getQBcodeUrl,
        getQBcodeStatus,
        getData
    } from '../../../api/Login/Login'
    @Component
    export default class QBcode extends Vue {
        $message: any;
        mounted() {
            this.getQBcode();
        }
        private QBcodeUrl: string = "";
        private getQBcode(): void {
            getQBcodeKey().then((item: any): void => {
                if (item.code === 200) {
                    const key = item.data.unikey;
                    getQBcodeUrl(key).then((items: any) => {
                        if (items.code === 200) {
                            this.QBcodeUrl = items.data.qrimg;
                            let timer = setInterval(() => {
                                getQBcodeStatus(key).then((val: any) => {
                                    console.log(val);
                                    if (val.code === 800) {
                                        this.$alert(val.message);
                                        clearInterval(timer)
                                    } else if (val.code === 803) {
                                        console.log(val);
                                        this.close()
                                        clearInterval(timer)
                                        getData().then((vals: any) => {
                                            console.log(vals);
                                            
                                        })
                                    }
                                })
                            }, 5000)
                        } else {
                            this.$message({
                                message: '获取数据失败',
                                type: 'error'
                            });
                        }
                    })
                } else {
                    this.$message({
                        message: '获取数据失败',
                        type: 'error'
                    });
                }
            })
        }
        @Emit()
        private toAccountLogin(): number {
            return 2;
        }
        @Emit() private close() {}
    }
</script>

<style lang="scss">
    .box {
        display: flex;
        align-items: center;
        flex-direction: column;

        .title {
            font-size: 26px;
            color: #000;
            margin-bottom: 10px;
        }

        .other {
            margin-top: 50px;
            font-size: 12px;
            cursor: pointer;
        }
    }
</style>