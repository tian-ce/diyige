<template>
  <div class="home">
    <menubar></menubar>
    <router-link class="img" tag="div" to="">
      <img src="../../../public/imgs/headImg.png" style="width: 150px;" />
      <br />
    </router-link>
    <span class="qian">
      <van-icon
        name="notes-o"
        style="vertical-align: middle;margin-right: 2px;"
        size="22"
        color="#0086ff"
      />
      <span>已签到</span>
    </span>
    <ul class="ul">
      <li>
        <a>0</a>
        <p>学习时间</p>
      </li>
      <li>
        <a>0.00</a>
        <p>我的金币</p>
      </li>
    </ul>
    <ul class="li">
      <router-link tag="li" to="">
        <img src="../../../public/imgs/26.png" />
        会员中心
        <van-icon class="icon" name="arrow" />
        <a class="li-a" style="color: #f09f50;">立即开通</a>
      </router-link>
      <router-link tag="li" to="">
        <img src="../../../public/imgs/27.png" />
        登录
        <van-icon class="icon" name="arrow" />
      </router-link>
      <router-link tag="li" to>
        <img src="../../../public/imgs/28.png" />
        购物车
        <van-icon class="icon" name="arrow" />
        <a class="li-a" style="color: #f09f50;">待支付2门课程</a>
      </router-link>
      <router-link tag="li" to>
        <img src="../../../public/imgs/29.png" />
        购买记录
        <van-icon class="icon" name="arrow" />
      </router-link>
      <router-link tag="li" to>
        <img src="../../../public/imgs/30.png" />
        <span style="    float: left;">我的订阅专栏</span>
        <a class="li-a1">NEW</a>
        <van-icon class="icon" name="arrow" />
      </router-link>
      <router-link tag="li" to>
        <img src="../../../public/imgs/31.png" />
        我的收藏
        <van-icon class="icon" name="arrow" />
      </router-link>
      <router-link tag="li" to>
        <img src="../../../public/imgs/32.png" />
        优惠券
        <van-icon class="icon" name="arrow" />
        <a class="li-a">2</a>
      </router-link>
      <router-link tag="li" to>
        <img src="../../../public/imgs/33.png" />
        学分兑换
        <van-icon class="icon" name="arrow" />
        <a class="li-a">30</a>
      </router-link>
      <router-link tag="li" to>
        <img src="../../../public/imgs/34.png" />
        在线客服
        <van-icon class="icon" name="arrow" />
        <a class="li-a">工作时间 9:00~20：00</a>
      </router-link>
      <router-link tag="li" to>
        <img src="../../../public/imgs/35.png" />
        设置
        <van-icon class="icon" name="arrow" />
      </router-link>
    </ul>
    <router-link class="tu" tag="div" to>
      <img class="fan" src="../../../public/imgs/36.png" />
    </router-link>
  </div>
</template>

<script>
import menubar from "../../components/menubar/menubar.vue";
export default {
  name: "Home",
  components: {
    menubar,
  },
  data() {
    return {
      active: "mine",
    };
  },
};
</script>

<style scoped="scoped">
* {
  padding: 0px;
  margin: 0px;
}
.tu {
  padding: 20px 10px;
  background: rgb(238, 238, 238);
  display: inline-block;
}

.fan {
  width: 94% !important;
  margin-left: 3%;
}

.home {
  height: 960px;
  background: #fff;
}

.li-a1 {
  float: left;
  line-height: 16px;
  font-size: 9px;
  background: #c49d64;
  color: #fff;
  padding: 0px 6px;
  border-radius: 10px;
  margin-top: 6px;
  margin-left: 5px;
}

.li-a {
  float: right;
  font-size: 0.28rem;
  color: #666;
  line-height: 80px;
  margin-right: 10px;
}

.li li img {
  width: 50px;
  float: left;
}

.li li {
  float: left;
  width: 100%;
  line-height: 80px;
  padding: 0px 10px;
  box-sizing: border-box;
  font-size: 0.37rem;
  border-bottom: 1px solid #eee;
}

.li li img {
  margin-top: 15px;
}

.li li:nth-child(1) {
  border-bottom: 8px solid #eee;
  border-top: 1px solid #eee;
}

.li li:nth-child(2) {
  border-bottom: 8px solid #eee;
}

.li li:nth-child(8) {
  border-bottom: 8px solid #eee;
}

.icon {
  float: right;
  line-height: 80px;
}

.img {
  text-align: center;
  font-size: 0.45rem;
  margin-top: 7%;
}

.qian {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 0.4rem;
}

.ul li {
  margin: 30px 70px;
  list-style: none;
  text-align: center;
  color: #9a9a9a;
  display: inline-block;
  font-size: 0.5rem;
}

.ul {
  line-height: 60px;
  text-align: center;
}

.ul a {
  color: #1c7fda;
  font-weight: bold;
}

input {
  text-align: center;
  border: 0px;
}
</style>
