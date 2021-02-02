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
    @Component
    export default class QBcode extends Vue {
        mounted() {
            this.getQBcode();
        }
        private QBcodeUrl: string = "";
        private getQBcode(): void {
            try {
                (this as any).axios
                    .post("http://localhost:3000/login/qr/key")
                    .then((item: any) => {
                        if (item.data.code === 200) {
                            const key: string = item.data.data.unikey;
                            try {
                                (this as any).axios
                                    .post(
                                        `http://localhost:3000/login/qr/create?key=${key}&qrimg=base64`
                                    )
                                    .then((items: any) => {
                                        if (items.data.code == 200) {
                                            this.QBcodeUrl = items.data.data.qrimg;
                                        }
                                    });
                            } catch (error) {
                                throw new Error(error);
                            }
                        }
                    });
            } catch (error) {
                throw new Error(error);
            }
        }
        @Emit()
        private toAccountLogin(): number {
            return 1;
        }
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