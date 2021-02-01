<template>
    <div class="face" @click="Login">
        <div class="block">
            <el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
        </div>
        <div class="name">未登录</div>
        <div class="triangle-bottom"></div>
    </div>
</template>

<script lang='ts'>
    import {
        Vue,
        Component
    } from 'vue-property-decorator'
    import { namespace } from 'vuex-class'
    const someModule = namespace('Login');
    @Component
    export default class Face extends Vue {
      @someModule.State(state => state.userInfo) userInfo: any
      @someModule.Action('setLoginMessage') setLoginMessage: (arg0: any) => void
      $message: any;
        public Login(): void {
            (this as any).axios.get('http://localhost:3000/login/cellphone?phone=17371243384&password=ljj19980127').then((item: { status: number; }) => {
                if (item.status === 200) {
                    this.setLoginMessage(item);
                    this.$message({message:'登陆成功',type: 'success'});
                }else{
                  this.$message({message:'登陆成功',type: 'error'});
                }
            })
        }
    }
</script>

<style lang="scss">
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