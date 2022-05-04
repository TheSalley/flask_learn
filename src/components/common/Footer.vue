<template>
    <div class="container">
        <div class="leftBox">
            <p class="color">服务条款 | 隐私政策 | 儿童隐私政策 | 版权投诉 | 投资者关系 | 广告合作 | 廉正举报 | 联系我们</p>
            <p>网易公司版权所有©1997-2022&#x3000;杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</p>
            <p>粤B2-20090191-18 工业和信息化部备案管理系统网站 浙公网安备 33010902002564号</p>
        </div>
        <div class="rightBox">
            <ul>
                <li>
                    <a href="javascript:void(0)" class="one"></a>
                    <span class="one1"></span>
                </li>
                <li>
                    <a href="javascript:void(0)" class="two"></a>
                    <span class="two1"></span>
                </li>
                <li>
                    <a href="javascript:void(0)" class="three"></a>
                    <span class="three1"></span>
                </li>
                <li>
                    <a href="javascript:void(0)" class="four"></a>
                    <span class="four1"></span>
                </li>
                <li>
                    <a href="javascript:void(0)" class="five"></a>
                    <span class="five1"></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    width: 980px;
    height: 173px;
    margin: 0 auto;
    font-size: 12px;
    padding-top: 15px;

    .leftBox {
        p {
            color: #666;
            margin-bottom: 5px;
        }

        .color {
            color: #999;
        }
    }

    .rightBox {
        margin-left: auto;

        ul {
            width: 420px;
            height: 70px;
            margin-top: 33px;
            display: flex;
            justify-content: space-between;

            li {
                a {
                    background: url('@/assets/foot_enter_new.png') no-repeat;
                    background-size: 110px 552px;
                    display: block;
                    width: 50px;
                    height: 45px;
                    text-indent: -9999px;
                }

                span {
                    background: url('@/assets/foot_enter_tt.png') no-repeat;
                    background-size: 180px 139px;
                    display: inline-block;
                    margin: 5px 5px 0;
                    margin-left: -6px;
                    height: 14px;
                    width: 72px;
                }

                .one {
                    background-position: -63px -456.5px;
                }

                .one1 {
                    background-position: 0 -108px;
                }

                .two {
                    background-position: -63px -101px;
                }

                .three {
                    background-position: 0 0;
                }

                .four {
                    background-position: -60px -50px;
                }

                .five {
                    background-position: 0 -101px;
                }
            }
        }
    }
}
</style>