<template>
  <div class="special">
    <div class="top">
      <div class="top-left">
        <ul>
          <li @click="jingxuan">精选</li>
          <li @click="zhuanti">专题</li>
          <li>微职位</li>
        </ul>
      </div>
      <div class="top-right">
        <van-icon name="search" />
        <van-icon name="clock-o" />
        <van-icon name="chat-o" />
      </div>
    </div>
    <div class="special-grid">
      <van-swipe :loop="false" :width="180">
        <van-swipe-item style="width: 60px;flex:1;">
          <van-grid :border="false" :column-num="1">
            <router-link to="/MicroPosition">
              <van-grid-item icon="points" text="全部" style=""></van-grid-item>
            </router-link>
          </van-grid>
        </van-swipe-item>
        <van-swipe-item style="width: 80px;flex:1;">
          <van-grid :border="false" :column-num="1">
            <router-link to="/MicroPosition_people">
              <van-grid-item icon="notes-o" text="软考学院"></van-grid-item>
            </router-link>
          </van-grid>
        </van-swipe-item>
        <van-swipe-item style="width: 77px;flex:1;">
          <van-grid :border="false" :column-num="1">
            <router-link to="/MicroPosition_link">
              <van-grid-item icon="tv-o" text="PMP学院"></van-grid-item>
            </router-link>
          </van-grid>
        </van-swipe-item>
        <van-swipe-item style="width: 80px;flex:1;">
          <van-grid :border="false" :column-num="1">
            <router-link to="/special_data">
              <van-grid-item icon="discount" text="IT技术院1"></van-grid-item>
            </router-link>
          </van-grid>
        </van-swipe-item>
		 <van-swipe-item style="width: 80px;flex:1;">
          <van-grid :border="false" :column-num="1">
            <router-link to="/special_data">
              <van-grid-item icon="discount" text="IT技术院2"></van-grid-item>
            </router-link>
          </van-grid>
        </van-swipe-item>
		 <van-swipe-item style="width: 80px;flex:1;">
          <van-grid :border="false" :column-num="1">
            <router-link to="/special_data">
              <van-grid-item icon="discount" text="IT技术院3"></van-grid-item>
            </router-link>
          </van-grid>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="foodList">
      <van-card
        title="[Oracle高薪就业班]0racle云数据库高级工程师"
        thumb="../../../img/10.png"
        @click="special_content"
      >
        <template #tags>
          <van-tag plain type="danger">
            <span style="margin-right: 10px;">9门课程</span>
            <span>1408人学习</span>
          </van-tag>
        </template>
      </van-card>
      <van-card title="软考高级:系统架构设计师精品班3期" thumb="../../../img/11.png" @click="special_content">
        <template #tags>
          <van-tag plain type="danger">
            <span style="margin-right: 10px;">4门课程</span>
            <span>682人学习</span>
          </van-tag>
        </template>
      </van-card>
      <van-card title="华为HCIP数通认证精品VIP班12期" thumb="../../../img/12.png">
        <template #tags>
          <van-tag plain type="danger">
            <span style="margin-right: 10px;">14门课程</span>
            <span>1109人学习</span>
          </van-tag>
        </template>
      </van-card>
      <van-card title="三级健康管理师精品通关班(2007期)" thumb="../../../img/13.png">
        <template #tags>
          <van-tag plain type="danger">
            <span style="margin-right: 10px;">19门课程</span>
            <span>1083人学习</span>
          </van-tag>
        </template>
      </van-card>
      <van-card title="全栈网络安全专家" thumb="../../../img/14.png">
        <template #tags>
          <van-tag plain type="danger">
            <span style="margin-right: 10px;">15门课程</span>
            <span>1077人学习</span>
          </van-tag>
        </template>
      </van-card>
      <van-card title="人工智能开发工程师(机器学习+深度学习)" thumb="../../../img/15.png">
        <template #tags>
          <van-tag plain type="danger">
            <span style="margin-right: 10px;">19门课程</span>
            <span>1083人学习</span>
          </van-tag>
        </template>
      </van-card>
      <van-card title="软考高级:网络规划设计师精品班4期" thumb="../../../img/16.png">
        <template #tags>
          <van-tag plain type="danger">
            <span style="margin-right: 10px;">19门课程</span>
            <span>1083人学习</span>
          </van-tag>
        </template>
      </van-card>
      <van-card title="[MySQL高薪就业班]MySQL数据库高级工程师微职位" thumb="../../../img/17.png">
        <template #tags>
          <van-tag plain type="danger">
            <span style="margin-right: 10px;">19门课程</span>
            <span>1083人学习</span>
          </van-tag>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageURL: "/public/img/1.png",
    };
  },
  methods: {
    special() {
      this.$router.push("/special");
    },
    special_content() {
      this.$router.push("/MicroPositionContent");
    },
    jingxuan() {
      this.$router.push("/home");
    },
    zhuanti() {
      this.$router.push("/zhuanti");
    },
  },
};
</script>

<style>
.van-swipe__indicators {
  display: none;
}

.van-grid .router-link-active .van-grid-item__text {
  color: #0086ff;
}
.van-grid-item__icon {
  font-size: 0.5rem;
}
.van-grid-item__text {
  font-size: 0.25rem !important;
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
.top-left ul li:nth-of-type(3) {
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
  font-size: 28px;
  line-height: 40px;
  max-height: 40px;
}
.van-tag--danger.van-tag--plain {
  color: #ea6367;
  font-size: 22px;
  padding: 10px 8px;
  margin: 25px 0px 0px;
  font-weight: 700;
}

.van-card__price {
  color: #e76469;
  font-weight: 700;
}

.van-card {
  background: #fff;
}

.foodList {
  margin-top: 20px;
  background: #fff;
}

.van-grid .router-link-active {
  color: #0086ff;
}
</style>
