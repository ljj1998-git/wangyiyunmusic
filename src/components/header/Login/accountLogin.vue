<template>
    <div class='box'>
        <el-image class="QR" :src="require('../../../assets/images/QR.png')"></el-image>
        <el-image class="security" :src="require('../../../assets/images/security.png')"></el-image>
        <el-image style="width: 300px; height: 150px" :src="require('../../../assets/images/loginBg.png')"></el-image>
        <div>
            
        </div>
    </div>
</template>

<script lang='ts'>
    import {
        Vue,
        Component
    } from 'vue-property-decorator'
    @Component
    export default class AccountLogin extends Vue {

    }
</script>

<style lang='scss'>
    .box {
        .QR{
            width: 50px;
            height:50px;
            position: absolute;
            top: 0px;
            left: 0px;
        }
        .security{
            width: 120px;
            height: 35px;
            position: absolute;
            left: 55px;
            top: 10px;
        }
    }
</style>