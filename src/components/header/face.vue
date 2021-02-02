<template>
    <div>
        <el-popover placement="bottom" width="250" trigger="click" v-model="popoverStatus">
            <DropDownList @sign-out="isShow"></DropDownList>
            <div class="face" @click="Login" slot="reference">
                <div class="block">
                    <el-avatar :size="30" :src="status ? faceUrl : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"></el-avatar>
                </div>
                <div class="name">{{status ? name : '未登录'}}</div>
                <div class="triangle-bottom"></div>
            </div>
        </el-popover>
        <LoginWindow :isOpen="status"></LoginWindow>
    </div>
</template>

<script lang='ts'>
    import {
        Vue,
        Component
    } from 'vue-property-decorator'
    import {
        namespace
    } from 'vuex-class'
    import DropDownList from './dropDownList.vue';
    import LoginWindow from './Login/loginWindow.vue';
    const someModule = namespace('Login');
    @Component({
        components: {
            DropDownList,
            LoginWindow
        }
    })
    export default class Face extends Vue {
        @someModule.State(state => state.userInfo) userInfo: any
        @someModule.Action('setLoginMessage') setLoginMessage: (arg0: any) => void
        $message: any;
        private status: boolean = false;
        private name: string = '';
        private faceUrl: string = '';
        private popoverStatus: boolean = false;
        private isShow(data: boolean): void {
            this.popoverStatus = data;
            this.status = false;
        }
        private Login(): void {
            try {
                (this as any).axios.post('http://localhost:3000/login/cellphone?phone=17371243384&password=ljj19980127').then((item: {
                    status: number;
                }) => {
                    if (item.status === 200) {
                        this.setLoginMessage(item);
                        console.log(this.userInfo);
                        this.status = true;
                        this.name = this.userInfo.data.profile.nickname
                        this.faceUrl = this.userInfo.data.profile.avatarUrl
                        this.$message({
                            message: '登陆成功',
                            type: 'success'
                        });
                    } else {
                        this.$message({
                            message: '登陆失败',
                            type: 'error'
                        });
                    }
                })
            } catch (error) {
                throw new Error(error)
            }
        }
    }
</script>

<style lang="scss">
    .popper__arrow {
        display: none !important;
    }

    .el-popover {
        margin-top: 18px !important;
    }

    .face {
        display: flex;
        align-items: center;
        cursor: pointer;
        height: 25px;
        color: #f0e8e8;
        font-size: 12px;

        &:hover {
            color: #fff;
        }

        .block {
            margin: 4px 5px 0 0;
        }

        .triangle-bottom {
            width: 0px;
            height: 0px;
            border-top: 5px solid #dbdbdb;
            border-bottom: 5px solid transparent;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            margin: 6px 0 0 5px;
        }
    }
</style>