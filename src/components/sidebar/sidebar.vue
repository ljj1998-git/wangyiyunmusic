<template>
    <div class="sidebar">
        <dropDownList :data="item" v-for="(item, index) in data" :key="index"></dropDownList>
    </div>
</template>

<script lang="ts">
    import {
        Component,
        Vue,
        Prop
    } from "vue-property-decorator";
    import dropDownList from "../../components/sidebar/dropDownList.vue";
    @Component({
        components: {
            dropDownList
        }
    })
    export default class Sidebar extends Vue {
        activeIndex: number = 0;
        data: Array < object > = [{
                showDropBtn: false,
                list: [{
                        name: "发现音乐"
                    },
                    {
                        name: "视频"
                    },
                    {
                        name: "朋友"
                    },
                    {
                        name: "直播"
                    },
                    {
                        name: "私人FM"
                    },
                ],
            },
            {
                title: "我的音乐",
                showDropBtn: true,
                list: [{
                        name: "本地音乐",
                        icon: "local.png"
                    },
                    {
                        name: "下载管理",
                        icon: "down.png"
                    },
                    {
                        name: "我的音乐云盘",
                        icon: "cloud.png"
                    },
                    {
                        name: "我的电台",
                        icon: "music.png"
                    },
                    {
                        name: "我的收藏",
                        icon: "collection.png"
                    },
                ],
            },
            {
                title: "创建歌单",
                showDropBtn: true,
                showAddBtn: true,
                list: [{
                        name: "我喜欢的音乐",
                        icon: "like.png"
                    },
                    {
                        name: "满桂的年歌单满桂的2020年歌单满桂的2020年歌单",
                        icon: "list.png"
                    },
                ],
            }, {
                title: "收藏的歌单",
                showDropBtn: true,
                showAddBtn: false,
                list: [{
                        name: "满桂的年歌单满桂的2020年歌单满桂的2020年歌单",
                        icon: "list.png"
                    },
                    {
                        name: "满桂的年歌单满桂的2020年歌单满桂的2020年歌单",
                        icon: "list.png"
                    },
                ],
            },
        ];
    };
</script>

<style lang="scss">
    $width: 200px; //侧边栏宽

    .sidebar {
        width: $width;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        border-right: 1px solid #e1e1e1;
    }
</style>