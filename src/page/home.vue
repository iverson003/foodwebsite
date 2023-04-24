<template>
    <div class="home">
        <div class="header">
            <div class="nav">
                <div class="logo">
                <div class="logo-img"></div>
                <div class="logo-name">
                    <h3 class="name">鲲伦食品供应链</h3>
                    <p class="e-name">kunlun food company</p>
                </div>
                </div>
                <div class="menu">
                    <div
                        v-for="nav in navList"
                        :key="nav.value"
                        class="item"
                        @click="taNav($event, nav.value)">
                        {{ nav.name }}
                        <div v-if="nav.value === 'miniapp'" class="qr-code">
                            <img class="qr-img" src="../assets/qr-code.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="idea">
                <div class="word">
                <h3>回馈客户，保持做市场低价</h3>
                <h3>回公司主要经营中餐食材、火锅食材、自助餐食材</h3>
                <p>公司地址：佛山市南海区大沥镇粤泰路广佛国际水产交易中心冻品城</p>
                <p>联系方式：18038870919</p>
                </div>
                <img class="idea-img" src="../assets/home.jpg" alt="">
            </div>
            </div>
        <div class="section">
            <div class="box">
                <h3 class="title">冻品中心</h3>
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
const foodImg = require('@/assets/home.jpg')

export default {
    name: 'food',
    data() {
        return {
            foodImg,
            navList: [
                {
                value: 'home',
                name: '网站首页'
                },
                {
                value: 'center',
                name: '冻品中心'
                },
                {
                value: 'about',
                name: '关于我们'
                },
                {
                value: 'miniapp',
                name: '小程序'
                }
            ],
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
    },
    methods: {
        taNav(el, value) {
            let distance = 0
            if (value === 'miniapp') {
                return
            }
            if (value === 'center') {
                distance = 350
            }
            if (value === 'about') {
                distance = 900
            }
            window.scrollTo(0, distance)
        }
    }
}
</script>
<style lang="scss" scoped>
.header {
  background: #96000b;
  color: #fff;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1040px;
  padding: 10px 0;
  margin: 0 auto;
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
  .menu {
    display: flex;
    width: 450px;
    .item {
        position: relative;
        cursor: pointer;
        font-size: 14px;
        padding: 10px 0;
        flex: 1;
        text-align: center;
        .qr-code {
            position: absolute;
            left: 50%;
            top: -200px;
            margin-left: -65px;
            padding: 10px;
            width: 120px;
            height: 120px;
            background: #fff;
            border-radius: 4px;
            transition: top 0.5s;
        }
        .qr-img {
            width: 100%;
            height: 100%;
        }
    }
    .item:hover {
        color: #f7d136;
        .qr-code {
            top: 40px;
        }
    }
  }
}
.idea {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1040px;
  margin: 0 auto;
  .word {
    line-height: 1;
    h3 {
      padding-top: 5px;
    }
    p {
      padding-top: 5px;
    }
  }
  .idea-img {
    width: 400px;
    height: 280px;
  }
}
.section {
    .box {
        width: 1040px;
        padding: 20px 0 40px 0;
        margin: 0 auto;
        font-size: 20px;
        text-align: center;
    }
}
.food-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item-box {
        box-sizing: border-box;
        padding: 5px;
        text-align: center;
        width: 190px;
        border: 1px solid #d3d3d3;
        border-radius: 4px;
        margin-top: 20px;
        overflow: hidden;
    }
    .item {
        width: 180px;
        height: 180px;
        border-radius: 4px;
        overflow: hidden;
        img {
            cursor: pointer;
            transition: all 0.5s;
            width: 100%;
            height: 100%;
        }
        img:hover {
            transform: scale(1.4);
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
    padding: 40px 100px 0 100px;
    overflow: hidden;
    img {
        width: 100%;
    }
}
</style>
