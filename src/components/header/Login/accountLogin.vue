<template>
    <div class='box'>
        <el-image class="QR" :src="require('../../../assets/images/QR.png')" @click="toCode"></el-image>
        <el-image class="security" :src="require('../../../assets/images/security.png')"></el-image>
        <el-image style="width: 300px; height: 150px" :src="require('../../../assets/images/loginBg.png')"></el-image>
        <div class="phone">
            <el-select v-model="code" size='small' placeholder="请选择" :change="dema">
                <el-option v-for="(item,index) in cityList" :key="index" :label="'+' + item.code" :value="item.code">
                    <span style="float: left">{{ item.zh }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">{{ '+' + item.code }}</span>
                </el-option>
            </el-select>
            <el-input size='small' placeholder="请输入手机号"></el-input>
        </div>
        <div class="password">
            <el-input prefix-icon="iconfont icon-mima" :show-password="true" size='small' placeholder="请输入密码"></el-input>
        </div>
        <div class="forget">
            <el-checkbox>自动登录</el-checkbox>
            <div>忘记密码?</div>
        </div>
        <div class="login">
            <div class="btn">登 录</div>
            <div class="btn">注册</div>
        </div>
        <div class="circle">
            <div><span class="iconfont icon-tubiaozhizuo-"></span></div>
            <div><span class="iconfont icon-qq"></span></div>
            <div><span class="iconfont icon-weibo1"></span></div>
            <div><span class="iconfont icon-wangyi0"></span></div>
        </div>
        <div class="regulations">
            <el-checkbox>同意<a>《服务条约》</a><a>《隐私政策》</a><a>《儿童隐私政策》</a></el-checkbox>
        </div>
    </div>
</template>

<script lang='ts'>
    import {
        Vue,
        Component,
        Emit
    } from 'vue-property-decorator'
    @Component
    export default class AccountLogin extends Vue {
        $message: any;
        private cityList: Array < object > = [];
        private code: string = '';
        mounted() {
            this.getCity()
        }
        private dema(data: number): void {
            console.log(data);
        }
        @Emit()
        private toCode(): number {
            return 1;
        }
        private getCity(): void {
            try {
                (this as any).axios
                    .post(
                        'http://localhost:3000/countries/code/list'
                    )
                    .then((item: any) => {
                        if (item.data.code === 200) {
                            item.data.data.forEach((val: any) => {
                                this.cityList = [...this.cityList, ...val.countryList]
                            })
                        } else {
                            this.$message({
                                message: '获取数据失败',
                                type: 'error'
                            });
                        }
                    });
            } catch (error) {
                throw new Error(error);
            }
        }
    }
</script>

<style lang='scss'>
    @mixin flex {
        display: flex;
        align-items: center;
    }

    .icon-mima {
        margin-left: 4px
    }

    .el-checkbox__label {
        padding-left: 5px !important;
        font-size: 13px !important;
    }

    .box {
        .QR {
            width: 50px;
            height: 50px;
            position: absolute;
            top: 0px;
            left: 0px;
        }

        .security {
            width: 120px;
            height: 35px;
            position: absolute;
            left: 55px;
            top: 10px;
        }

        .phone {
            width: 100%;
            @include flex;
        }

        .password {
            width: 100%;
        }

        .forget {
            width: 100%;
            margin-top: 10px;
            @include flex;

            div {
                font-size: 13px;
                margin-left: 5px;
            }
        }

        .login {
            width: 100%;
            margin-top: 10px;

            .btn {
                height: 40px;
                line-height: 40px;
                text-align: center;
                border-radius: 5px;
                font-size: 16px;
                cursor: pointer;

                &:first-child {
                    background: red;
                    color: #fff;
                }

                &:last-child {
                    text-decoration: underline;
                }
            }
        }

        .circle {
            @include flex;
            margin-top: 5px;
            $color: #97F709, #0099FF, #FF0000, #FF3300;

            @each $c in $color {
                $i: index($color, $c);

                div:nth-child(#{$i}) {
                    color: $c;
                    border: 1px solid #f0f0f0;
                    border-radius: 50%;
                    text-align: center;
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    margin: 0 15px;
                    cursor: pointer;

                    span {
                        font-size: 25px;
                    }

                    &:hover {
                        color: #fff;
                        background: $c;
                    }
                }
            }
        }

        .regulations {
            margin-top: 20px;
        }
    }
</style>