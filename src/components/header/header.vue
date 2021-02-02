<template>
    <div class="hender-head">
        <img src="@/assets/images/logo.png" class="hender-logo">
        <Face></Face>
    </div>

</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import Face from './face.vue'
    @Component({
        components: {
            Face
        }
    })
    export default class Header extends Vue {
        mounted() {
        }
    };
</script>

<style lang="scss">
    @mixin flex {
        display: flex;
        align-items: center;
    }

    .hender-head {
        @include flex;
        width: 100%;
        height: 60px;
        background: #ec4141;

        .hender-logo {
            height: 60px;
        }
    }
</style>