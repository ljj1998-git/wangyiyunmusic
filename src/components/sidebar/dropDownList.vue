<template>
  <div class="dropDownList-box">
    <div :class="
        `title-box ${isDisplay(data.title)} ${isPointer(data.showDropBtn)}`
      " @click="data.showDropBtn ? expandList() : ''">
      <div class="title-box-left">
        <div class="dropDownList-title">{{ data.title }}</div>
        <div :class="
            `${isBlock ? 'triangle-bottom' : 'triangle-right'} ${isDisplay(
              data.showDropBtn
            )}`
          "></div>
      </div>
      <div :class="`add ${isDisplay(data.showAddBtn)}`">+</div>
    </div>
    <div class="firstBox-box" v-for="(item, index) in data.list" :key="index" ref="list">
      <img :src="item.icon ? require(`@/assets/images/${item.icon}`) : ''" />
      <div :class="`firstBox-box`">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue,
    Prop
  } from "vue-property-decorator";
  @Component({
    mounted() {

    }
  })
  export default class DropDownList extends Vue {
    /**
     * @param title 标题
     * @param showDropBtn 是否显示下拉按钮 true显示,false不显示
     * @param showAddBtn 是否显示新增按钮 true显示,false不显示
     * @param list 数组 name文字名称,icon图标名称
     */
    @Prop(Object) readonly data!: object;
    public $refs!: {
      list: HTMLFormElement;
    };
    private isBlock: Boolean = true;
    get isDisplay(): Function {
      return function (parameter: any): string {
        return parameter ? "" : "disabled";
      };
    }
    get isPointer(): Function {
      return function (parameter: any): string {
        return parameter ? "pointer" : "";
      };
    }
    public expandList(): void {
      this.isBlock = !this.isBlock;
      for (let i = 0; i < this.$refs.list.length; i++) {
        let list: any = this.$refs.list[i]
        list.style = `display:${this.isBlock ? "flex" : "none"}`;
      }
    }
  }
</script>

<style lang="scss">
  .active {
    font-weight: 700;
  }

  @mixin flex {
    display: flex;
    align-items: center;
  }

  @mixin overflowText {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .disabled {
    display: none !important;
  }

  .pointer {
    cursor: pointer;
  }

  .dropDownList-box {
    margin-bottom: 10px;

    .title-box {
      @include flex;
      justify-content: space-between;

      .title-box-left {
        @include flex;

        .triangle-right {
          width: 0px;
          height: 0px;
          border-top: 3px solid transparent;
          border-bottom: 3px solid transparent;
          border-left: 5px solid #dbdbdb;
          border-right: 3px solid transparent;
          margin-top: 2px;
        }

        .triangle-bottom {
          @extend .triangle-right;
          border-top: 5px solid #dbdbdb;
          border-left: 3px solid transparent;
        }
      }
    }

    .dropDownList-title {
      height: 25px;
      font-weight: 300;
      font-size: 12px;
      padding-left: 5px;
      line-height: 25px;
      margin-right: 5px;
    }

    .firstBox-box {
      @include flex;
      @include overflowText;
      width: 100%;
      height: 36px;
      margin-bottom: 3px;
      padding: 5px;
      box-sizing: border-box;
      border-radius: 5px;

      &:hover {
        background: #e1e1e1;
        cursor: pointer;
      }
    }
  }
</style>