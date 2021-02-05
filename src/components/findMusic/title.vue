<template>
    <div id="Tip">
        <div class="name">{{title}}</div>
        <span class="iconfont icon-arrow-right"></span>
    </div>
</template>

<script lang="ts">
    import {
        Vue,
        Component,
        Prop
    } from 'vue-property-decorator'
    @Component
    export default class Title extends Vue {
        @Prop(String) readonly title!: string
    }
</script>

<style lang="scss">
    @mixin flex {
        display: flex;
        align-items: center;
    }

    #Tip {
        @include flex;
        margin-bottom: 10px;
        .name {
            font-size: 20px;
            font-weight: 600;
            margin-right: 3px;
        }
    }
</style>