<template>
    <el-dialog :visible="!isOpen" :modal='false' width="350px">
        <QBcode></QBcode>
    </el-dialog>
</template>

<script lang="ts">
    import {
        Vue,
        Component,
        Prop
    } from 'vue-property-decorator';
    import QBcode from './QRcode.vue';
    @Component({
        components:{
            QBcode
        }
    })
    export default class LoginWindow extends Vue {
        @Prop(Boolean) readonly isOpen!: Boolean;
        mounted() {

        }
    }
</script>

<style lang="scss">

</style>