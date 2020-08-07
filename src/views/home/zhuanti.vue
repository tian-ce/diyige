<template>
  <div class="special">
    <menubar></menubar>
    <div class="top">
      <div class="top-left">
        <ul>
          <li @click="jingxuan">精选</li>
          <li>专题</li>
          <li @click="weizhiwei">微职位</li>
        </ul>
      </div>
      <div class="top-right">
        <van-icon name="search" />
        <van-icon name="clock-o" />
        <van-icon name="chat-o" />
      </div>
    </div>
    <div class="special-grid">
      <van-swipe :loop="false" :width="80">
        <van-swipe-item style="width: 60px;">
          <van-grid :border="false" :column-num="1">
            <router-link to="/special">
              <van-grid-item icon="label-o" text="最新"></van-grid-item>
            </router-link>
          </van-grid>
        </van-swipe-item>
        <van-swipe-item style="width: 60px;">
          <van-grid :border="false" :column-num="1">
            <router-link to="/special_all">
              <van-grid-item icon="points" text="全部" to="/"></van-grid-item>
            </router-link>
          </van-grid>
        </van-swipe-item>
        <van-swipe-item style="width: 80px;">
          <van-grid :border="false" :column-num="1">
            <router-link to="/special_people">
              <van-grid-item icon="bulb-o" text="人工智能"></van-grid-item>
            </router-link>
          </van-grid>
        </van-swipe-item>
        <van-swipe-item style="width: 60px;">
          <van-grid :border="false" :column-num="1">
            <router-link to="/special_link">
              <van-grid-item icon="discount" text="区块链"></van-grid-item>
            </router-link>
          </van-grid>
        </van-swipe-item>
        <van-swipe-item style="width: 60px;">
          <van-grid :border="false" :column-num="1">
            <router-link to="/special_data">
              <van-grid-item icon="bar-chart-o" text="大数据"></van-grid-item>
            </router-link>
          </van-grid>
        </van-swipe-item>
        <van-swipe-item style="width: 60px;">
          <van-grid :border="false" :column-num="1">
            <router-link to="/special_count">
              <van-grid-item icon="star-o" text="云计算"></van-grid-item>
            </router-link>
          </van-grid>
        </van-swipe-item>
        <van-swipe-item style="width: 80px;">
          <van-grid :border="false" :column-num="1">
            <router-link to="/special_exam">
              <van-grid-item icon="passed" text="考试认证"></van-grid-item>
            </router-link>
          </van-grid>
        </van-swipe-item>
        <van-swipe-item style="width: 80px;">
          <van-grid :border="false" :column-num="1">
            <router-link to="/special_back-end">
              <van-grid-item icon="notes-o" text="后端开发"></van-grid-item>
            </router-link>
          </van-grid>
        </van-swipe-item>
        <van-swipe-item style="width: 80px;">
          <van-grid :border="false" :column-num="1">
            <router-link to="/special_web">
              <van-grid-item icon="tv-o" text="前端"></van-grid-item>
            </router-link>
          </van-grid>
        </van-swipe-item>
        <van-swipe-item style="width: 80px;">
          <van-grid :border="false" :column-num="1">
            <router-link to="/special_mobile">
              <van-grid-item icon="tv-o" text="移动开发"></van-grid-item>
            </router-link>
          </van-grid>
        </van-swipe-item>
        <van-swipe-item style="width: 80px;">
          <van-grid :border="false" :column-num="1">
            <router-link to="/special_game">
              <van-grid-item icon="new-arrival-o" text="游戏开发"></van-grid-item>
            </router-link>
          </van-grid>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="foodList">
      <van-card
        price="420.61"
        origin-price="946.00"
        desc="8课程 79人学习"
        title="运维工程师必备-Linux企业十大应用专题"
        thumb="../../../img/17.png"
        @click="zhuantiContent"
      >
        <template #tags>
          <van-tag plain type="danger">立省525.39</van-tag>
        </template>
      </van-card>
      <van-card
        price="3980.00"
        origin-price="13920.00"
        desc="4课程"
        title="2020新媒体短视频运营"
        thumb="../../../img/1.png"
      >
        <template #tags>
          <van-tag plain type="danger">立省9940. 00</van-tag>
        </template>
      </van-card>
      <van-card
        price="469.00"
        origin-price="797. oo"
        desc="3课程  72人学 习"
        title="Python全栈+GUI实战"
        thumb="../../../img/2.png"
      >
        <template #tags>
          <van-tag plain type="danger">立省328. 00</van-tag>
        </template>
      </van-card>
      <van-card
        price="354. 40"
        origin-price="443. oe"
        desc="7课程13人学习"
        title="uni app入门到实战套餐"
        thumb="../../../img/3.png"
      >
        <template #tags>
          <van-tag plain type="danger">立省88.60</van-tag>
        </template>
      </van-card>
      <van-card
        price="218.00"
        origin-price="279. 80"
        desc="6课程36人学习"
        title="[吴刚大讲堂]电商开店必备实"
        thumb="../../../img/4.png"
      >
        <template #tags>
          <van-tag plain type="danger">立省61.80</van-tag>
        </template>
      </van-card>
      <van-card
        price="3980.00"
        origin-price="13920.00"
        desc="4课程"
        title="2020新媒体短视频运营"
        thumb="../../../img/7.png"
      >
        <template #tags>
          <van-tag plain type="danger">立省9940. 00</van-tag>
        </template>
      </van-card>
      <van-card
        price="3980.00"
        origin-price="13920.00"
        desc="4课程"
        title="2020新媒体短视频运营"
        thumb="../../../img/6.png"
      >
        <template #tags>
          <van-tag plain type="danger">立省9940. 00</van-tag>
        </template>
      </van-card>
      <van-card
        price="3980.00"
        origin-price="13920.00"
        desc="4课程"
        title="2020新媒体短视频运营"
        thumb="../../../img/5.png"
      >
        <template #tags>
          <van-tag plain type="danger">立省9940. 00</van-tag>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
import menubar from "../../components/menubar/menubar.vue";
export default {
  components: {
    menubar,
  },
  data() {
    return {
      imageURL: "/public/img/1.png",
    };
  },
  methods: {
    special() {
      this.$router.push("/special");
    },
    zhuantiContent() {
      this.$router.push("/zhuantiContent");
    },
    jingxuan() {
      this.$router.push("/home");
    },
    weizhiwei() {
      this.$router.push("/weizhiwei");
    },
  },
};
</script>

<style>
.special{
	height: 22rem;
}
.van-swipe__indicators {
  display: none;
}
.van-grid .router-link-active .van-grid-item__text {
  color: #0086ff;
}
.van-tab__text--ellipsis {
  font-size: 0.3rem;
  font-weight: bold;
}
.van-tabs__line {
  background-color: #0086ff;
}
</style>

<style scoped="scoped">
.top {
  margin-top: 10px;
  background-color: white;
}
.top-left {
  display: inline-block;
}
.top-left ul li {
  font-size: 0.35rem;
  display: inline-block;
  margin: 0px 20px 0px 10px;
  padding-bottom: 5px;
}
.top-left ul li:nth-of-type(2) {
  border-bottom: 4px solid dodgerblue;
}
.top-right {
  float: right;
  margin-right: 40px;
}
.top-right i {
  margin-left: 20px;
  font-size: 35px;
}

.special {
  background: #ecf1f7;
}

.special-grid {
  background: #fff;
}

.van-image {
  position: relative;
  display: inline-block;
}

.van-card__thumb {
  width: 225px;
  height: 140px;
}

.van-card__title {
  font-size: 25px;
  line-height: 40px;
  max-height: 40px;
}

.van-card__desc {
  color: #9e9e9e;
  font-size: 22px;
  line-height: 28px;
  max-height: 25px;
}

.van-tag--danger.van-tag--plain {
  color: #ff9630;
  padding: 5px;
  margin: 8px 0px;
  font-size: 18px;
}

.van-card__price {
  color: #e76469;
  font-weight: 700;
  font-size: 23px;
}
.van-card__price-integer {
  font-size: 23px;
}
.van-card__origin-price {
  font-size: 23px;
}
.van-card__price-decimal {
  font-size: 23px;
}
.van-card {
  background: #fff;
  margin: 20px 0px;
}

.foodList {
  margin-top: 20px;
  background: #fff;
}

.van-grid .router-link-active {
  color: #0086ff;
}
</style>
