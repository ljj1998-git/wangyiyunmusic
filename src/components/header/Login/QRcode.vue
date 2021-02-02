<template>
    <div class="box">
        <div class="title">扫码登录</div>
        <div class="imgs">
            <el-image class="img1" style="width: 190px; height: 300px" :src="require('../../../assets/images/loginBg.png')"></el-image>
            <el-image class="img2" style="width: 200px; height: 200px" :src="QBcodeUrl"></el-image>
        </div>
        <div>使用<a href="https://music.163.com/#/download" target="_blank">网易云APP</a>扫码登录</div>
        <div class="other">选择其他登陆模式></div>
    </div>
</template>

<script lang="ts">
    import {
        Vue,
        Component
    } from 'vue-property-decorator';
    @Component
    export default class QBcode extends Vue {
        mounted() {
            this.getQBcode();
        }
        private QBcodeUrl: string = '';
        private getQBcode(): void {
            try {
                (this as any).axios.post('http://localhost:3000/login/qr/key').then((item: any) => {
                    if (item.data.code === 200) {
                        const key: string = item.data.data.unikey;
                        try {
                            (this as any).axios.post(`http://localhost:3000/login/qr/create?key=${key}&qrimg=base64`).then((items: any) => {
                                if (items.data.code == 200) {
                                    this.QBcodeUrl = items.data.data.qrimg
                                }
                            })
                        } catch (error) {
                            throw new Error(error)
                        }
                    }
                })
            } catch (error) {
                throw new Error(error)
            }
        }
    }
</script>

<style lang="scss">
    @keyframes move {
        from{
            width: 200px;
            opacity: 1;
        };
        to{
            widows: 100px;
            opacity: 0;
        }
    }

    .box {
        display: flex;
        align-items: center;
        flex-direction: column;

        .title {
            font-size: 26px;
            color: #000;
            margin-bottom: 10px;
        }

        .imgs {
            &:hover {
                .img1{
                    animation: move 1s;
                }
            }
        }

        .other {
            margin-top: 50px;
            font-size: 12px;
        }
    }
</style>