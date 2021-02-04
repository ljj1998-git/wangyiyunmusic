<template>
    <el-dialog :visible="syncIsOpen" :modal='false' width="350px" @close="closeWindow" @closed='resetStep'>
        <QBcode @to-account-login="changeStep" @close="closeWindow" v-if="step === 1"></QBcode>
        <AccountLogin v-else @to-code="changeStep"></AccountLogin>
    </el-dialog>
</template>

<script lang="ts">
    import {
        Vue,
        Component,
        Prop,
        PropSync
    } from 'vue-property-decorator';
    import QBcode from './QRcode.vue';
    import AccountLogin from './accountLogin.vue';
    @Component({
        components: {
            QBcode,
            AccountLogin
        }
    })
    export default class LoginWindow extends Vue {
        @PropSync('isOpen', Boolean) syncIsOpen!: Boolean;
        private step: number = 1;
        mounted() {}
        private changeStep(data: number): void {
            this.step = data
        }
        private closeWindow(): void {
            this.syncIsOpen = false;
        }
        private resetStep(): void {
            this.step = 1;
        }
    }
</script>

<style lang="scss">

</style>