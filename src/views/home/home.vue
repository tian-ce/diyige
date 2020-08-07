<template>
  <div class="main">
    <div class="top">
      <div class="top-left">
        <ul>
          <li>精选</li>
          <li @click="zhuanti">专题</li>
          <li @click="weizhiwei">微职位</li>
        </ul>
      </div>
      <div class="top-right">
        <van-icon name="search" />
        <van-icon name="clock-o" />
        <van-icon name="chat-o" />
      </div>
    </div>
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../../../public/imgs/1.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/imgs/2.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/imgs/3.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/imgs/4.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/imgs/5.png" />
      </van-swipe-item>
    </van-swipe>
    <div style="margin: 10px 0px;text-align: center;">
      <van-row type="flex">
        <van-col span="6">
          <img src="../../../public/imgs/6.png" />
          <p>免费题库</p>
        </van-col>
        <van-col span="6" @click="vipCourse()">
          <img src="../../../public/imgs/7.png" />
          <p>会员课程</p>
        </van-col>
        <van-col span="6" @click="sort()">
          <img src="../../../public/imgs/8.png" />
          <p>课程排行榜</p>
        </van-col>
        <van-col span="6" @click="day()">
          <img src="../../../public/imgs/9.png" />
          <p>每日有礼</p>
        </van-col>
      </van-row>
    </div>
    <div style="background-color: #edf0f7;padding: 5px 0px;"></div>
    <div class="one">
      <van-icon
        name="comment-o"
        color="#ff8522"
        size="25"
        style="vertical-align: middle;margin-top: 5px;"
      />
      <p style="display: inline-block;">
        <span style="font-size: 17px;font-weight: bold;margin: 0px 15px 0px 5px;">微职位</span>
        <span style="font-size: 15px;color: #a8a8a8;">6个月，从0起步成为优秀工程师</span>
      </p>
      <br />
      <div class="same same-one">
        <p>软考学院</p>
        <p>
          <a href="#">信息系统管理师</a>
        </p>
        <p>
          <a href="#">网络规划设计师</a>
        </p>
        <p>
          <a href="#">软件设计师</a>
        </p>
        <p>职称、落户、一证多用</p>
        <van-button round type="warning">查看详情</van-button>
      </div>
      <div class="same same-two">
        <p>PMP学院</p>
        <p>
          <a href="#">PMP管理班</a>
        </p>
        <p>
          <a href="#">ACP管理班</a>
        </p>
        <p>
          <a href="#">ITIL通关班</a>
        </p>
        <p>项目经理直通车</p>
        <van-button round type="warning">查看详情</van-button>
      </div>
    </div>
    <div class="two">
      <van-icon
        name="points"
        color="#00a0e6"
        size="25"
        style="vertical-align: middle;margin-top: 5px;"
      />
      <span style="font-size: 17px;font-weight: bold;margin-left: 3px;">博客文章</span>
      <span style="font-size: 17px;" @click="look()">
        <a>查看全部</a>
      </span>
      <div class="two-same">
        <p>
          <span style>推荐</span>
          <span>神奇高效的Linux命令行</span>
        </p>
        <p>
          <span style>推荐</span>
          <span>使用Float或Real数据类型的危险</span>
        </p>
      </div>
    </div>
    <menubar></menubar>
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
      active: "home",
    };
  },
  methods: {
    vipCourse() {
      this.$router.push("/vipcourse");
    },
    sort() {
      this.$router.push("/ranking");
    },
    look() {
      this.$router.push("/wuyiboke");
    },
    day() {
      this.$router.push("/qiandaoyouli");
    },
    zhuanti() {
      this.$router.push("/zhuanti");
    },
    weizhiwei() {
      this.$router.push("/weizhiwei");
    },
  },
};
</script>


<style>
.van-tab__text--ellipsis {
  font-size: 0.3rem;
  font-weight: bold;
}
.van-tabs__line {
  background-color: #0086ff;
}
</style>

<style scoped>
.main {
  height: 14.4rem;
}
div,
a,
p,
span,
img,
input {
  padding: 0px;
  margin: 0px;
}
.top {
  margin-top: 10px;
  margin-bottom: 10px;
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
.top-left ul li:first-of-type {
  border-bottom: 4px solid dodgerblue;
}
.top-right {
  float: right;
  margin-right: 10px;
}
.top-right i {
  margin-left: 20px;
  font-size: 40px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  line-height: 0px;
}
.my-swipe .van-swipe-item img {
  width: 97%;
}
.van-tabs {
  width: 3.2rem;
}
.van-col--6 img {
  width: 50%;
}
.van-col--6 {
  width: 25%;
}
.van-col--6 p {
  font-size: 27px;
}
.one {
  padding: 0px 10px;
}
.same {
  color: white;
  padding: 30px 20px;
  text-align: center;
  width: 40%;
  line-height: 36px;
  border-radius: 3%;
  display: inline-block;
  margin: 10px 15px;
}
.same-one {
  background-color: #734df8;
}
.same p:first-of-type {
  font-size: 31px;
  font-weight: bold;
}
.same p a {
  color: white;
  font-size: 25px;
  text-decoration: underline;
}
.same button {
  font-size: 25px;
  margin-top: 20px;
  padding: 3px 20px;
}
.same-two {
  background-color: #f34078;
}
.same p:last-of-type {
  font-size: 28px;
  margin-top: 50px;
}
.two {
  padding: 0px 10px;
}
.two-same p span:first-of-type {
  border: 1px solid #e1493c;
  color: #e1493c;
  font-size: 27px;
  padding: 2px;
}
.two-same p span:last-of-type {
  font-size: 30px;
  color: #222222;
  margin-left: 5px;
}
.two > span:last-of-type {
  color: #666666;
  margin-left: 58%;
}
</style>
