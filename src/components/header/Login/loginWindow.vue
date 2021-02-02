<template>
    <el-dialog :visible="!isOpen" :modal='false' width="350px">
        <QBcode @to-account-login="dema" v-if="step === 2"></QBcode>
        <AccountLogin v-else></AccountLogin>
    </el-dialog>
</template>

<script lang="ts">
    import {
        Vue,
        Component,
        Prop
    } from 'vue-property-decorator';
    import QBcode from './QRcode.vue';
    import AccountLogin from './accountLogin.vue';
    @Component({
        components:{
            QBcode,
            AccountLogin
        }
    })
    export default class LoginWindow extends Vue {
        @Prop(Boolean) readonly isOpen!: Boolean;
        private step: number = 1;
        mounted() {}
        private dema(data: number): void {
            this.step = data
        }
    }
</script>

<style lang="scss">

</style>