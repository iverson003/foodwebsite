<template>
    <div class="home">
        <div class="header">
            <div class="logo">
                <div class="logo-img"></div>
                <div class="logo-name">
                    <h3 class="name">鲲伦食品供应链</h3>
                    <p class="e-name">kunlun food company</p>
                </div>
            </div>
            <div class="idea">
                <h3>回馈客户，保持做市场低价</h3>
                <h3>回公司主要经营中餐食材、火锅食材、自助餐食材</h3>
                <p>公司地址：佛山市南海区大沥镇粤泰路广佛国际水产交易中心冻品城</p>
                <p>联系方式：18038870919</p>
            </div>
            <div class="miniapp">
                <img src="../assets/qr-code.jpg" alt="">
                <p>微信内长按识别</p>
            </div>
        </div>
        <div class="section">
            <div class="box">
                <h3>冻品中心</h3>
                <div class="food-list">
                    <div
                        v-for="item in foodList"
                        :key="item.name"
                        class="item-box">
                        <div class="item">
                            <img :src="item.img" alt=""/>
                        </div>
                        <p class="food-name">{{ item.name }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="box">
                <h3 class="title">关于我们</h3>
                <div class="about">
                    <img src="../assets/about-1.jpg" alt="">
                    <img src="../assets/about-2.jpg" alt="">
                    <img src="../assets/about-3.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'h5Home',
    data() {
        return {
            foodList: [
                {
                    img: require('@/assets/food-1.jpg'),
                    name: '速冻免浆牛蛙'
                },
                {
                    img: require('@/assets/food-2.jpg'),
                    name: '开背清江鱼'
                },
                {
                    img: require('@/assets/food-3.jpg'),
                    name: '开背巴沙鱼'
                },
                {
                    img: require('@/assets/food-4.jpg'),
                    name: '脱壳鹌鹑蛋'
                },
                {
                    img: require('@/assets/food-5.jpg'),
                    name: '国产青虾'
                },
                {
                    img: require('@/assets/food-6.jpg'),
                    name: '美国凤爪'
                },
                {
                    img: require('@/assets/food-7.jpg'),
                    name: '猪肉青'
                },
                {
                    img: require('@/assets/food-8.jpg'),
                    name: '挪威青花鱼片'
                },
                {
                    img: require('@/assets/food-9.jpg'),
                    name: '阿根廷牛霖肉'
                },
                {
                    img: require('@/assets/food-10.jpg'),
                    name: '鸡中翅'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.home {
    max-width: 750px;
}
.header {
    padding: 20px;
    background: #96000b;
    color: #fff;
}
.logo {
    display: flex;
    align-items: center;
    line-height: 1;
    .logo-img {
        width: 45px;
        height: 45px;
        background: #999;
        background-image: url(../assets/logo.jpg);
        background-size: 100% 100%;
        border-radius: 50%;
        margin-right: 10px;
    }
    .name {
        font-size: 18px;
    }
    .e-name {
        padding-top: 2px;
        font-size: 12px;
    }
}
.idea {
    line-height: 1.5;
    h3 {
        padding-top: 5px;
        font-size: 14px;
    }
    p {
        padding-top: 5px;
        font-size: 12px;
    }
}
.miniapp {
    padding-top: 20px;
    text-align: center;
    img {
        width: 150px;
        height: 150px;
        border-radius: 8px;
    }
    p {
        padding-top: 5px;
        font-size: 14px;
    }
}
.section {
    .box {
        padding: 20px 10px 40px 10px;
        margin: 0 auto;
        font-size: 16px;
        text-align: center;
    }
}
.food-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item-box {
        box-sizing: border-box;
        padding: 5px;
        text-align: center;
        border: 1px solid #d3d3d3;
        border-radius: 4px;
        margin-top: 20px;
        overflow: hidden;
    }
    .item {
        width: 160px;
        height: 160px;
        border-radius: 4px;
        overflow: hidden;
        img {
            cursor: pointer;
            width: 100%;
            height: 100%;
        }
    }
    .food-name {
        padding-top: 10px;
        line-height: 20px;
        font-size: 14px;
        color: #333;
    }
}
.about {
    padding: 20px 10px 0 10px;
    overflow: hidden;
    img {
        width: 100%;
    }
}
</style>
