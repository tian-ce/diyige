<template>
  <!-- 点进去的第一页 -->
  <div id="main" style="background-color: #fff;position: relative;">
    <top></top>
    <div class="div_1">
      <van-icon name="more-o" size="0.5rem" style="vertical-align: middle;" @click="dj3()" />
      <span class="span-1">51CT0</span>
      <span class="span-2">博客</span>
      <van-icon
        name="user-circle-o"
        size="0.5rem"
        style="vertical-align: middle;margin-left: 2.6rem;"
      />
    </div>
    <div style="margin-top: 0.3rem;" @click="dj4()">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" style="height: 150px;">
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
      </van-swipe>
    </div>
    <div class="div_2">
      <div class="div_3">
        <span class="div_3_span_1">10000+专区</span>
        <span class="div_3_span_2" @click="yiqianwenzhang()">更多></span>
      </div>
      <div class="div_4">
        <ul class="div_4_ul_1" v-if="f">
          <li>京东数据库运维自动化体系建设之路</li>
          <li>运维从业人员如何留住健康</li>
          <li>没有宫廷内斗，数据库界的提心攻略</li>
        </ul>
        <ul class="div_4_ul_1" v-if="ff">
          <li>Vue.js</li>
          <li>老鸟运维的下场</li>
          <li>阿里云部署Oracle 11g数据库</li>
        </ul>
      </div>
      <div class="div_5" align="center" @click="dj()">
        <span style="font-size: 0.4rem;">换一批</span>
        <van-icon name="replay" size="0.4rem" style="vertical-align: middle;" />
      </div>
      <div class="div_6"></div>
      <div class="div_7">
        <div class="div_3">
          <span class="div_3_span_1">订阅栏目</span>
          <span class="div_3_span_2">更多></span>
        </div>
        <div style="width: 100%;height: 477px;">
          <ul class="div_7_ul_1" v-if="fff">
            <li @click="change()">
              <div style="width: 50%;display: inline-block;margin-left: 1rem;">
                <img src="../../../public/img/36.png" alt style="width: 69%;height: 114px;" />
              </div>
              <div
                style="width: 75%;display: inline-block;position: absolute;right: -2rem;top: top: 0.2rem;"
              >
                <span>
                  <span class="div_7_span-1">微栏目</span>
                  &nbsp;
                  <span class="div_7_span-2">思科交网络安全</span>
                </span>
                <div class="div-8">
                  <div style="font-size: 0.3rem;">安全无忧</div>
                  <div style="font-size: 0.3rem;color: #CCCCCC;">共五章 | 思科小牛</div>
                  <div style="font-size: 0.3rem;color: #fc5c60;">¥3.00</div>
                </div>
              </div>
            </li>
            <li>
              <div style="width: 50%;display: inline-block;margin-left: 1rem;">
                <img src="../../../public/img/37.png" alt style="width: 69%;height: 114px;" />
              </div>
              <div
                style="width: 80%;display: inline-block;position: absolute;right: -2.3rem;top: 0.2rem;"
              >
                <span class="div_7_span-2">云计算从入门到上瘾</span>
                <div class="div-8">
                  <div style="font-size: 0.3rem;">传统IT工程师的转型</div>
                  <div style="font-size: 0.3rem;color: #CCCCCC;">共26章 | 51CTO阿森</div>
                  <div style="font-size: 0.3rem;color: #fc5c60;">¥51.00</div>
                </div>
              </div>
            </li>
            <li>
              <div style="width: 50%;display: inline-block;margin-left: 1rem;">
                <img src="../../../public/img/38.png" alt style="width: 69%;height: 114px;" />
              </div>
              <div
                style="width: 70%;display: inline-block;position: absolute;right: -1.6rem;    top: 0.2rem;"
              >
                <span class="div_7_span-2">从头解锁Python标准</span>
                <div class="div-8">
                  <div style="font-size: 0.3rem;">多维度详解</div>
                  <div style="font-size: 0.3rem;color: #CCCCCC;">共19章 | 思科小牛</div>
                  <div style="font-size: 0.3rem;color: #fc5c60;">¥51.00</div>
                </div>
              </div>
            </li>
          </ul>
          <ul class="div_7_ul_1" v-if="ffff">
            <li>
              <div style="width: 50%;display: inline-block;margin-left: 1rem;">
                <img src="../../../public/img/39.png" style="width: 69%;height: 114px;" />
              </div>
              <div
                style="width: 70%;display: inline-block;position: absolute;right: -2.3rem;top: 0.2rem;;"
              >
                <span>
                  <span class="div_7_span-1">微栏目</span>
                  &nbsp;
                  <span class="div_7_span-2">敏捷无敌</span>
                </span>
                <div class="div-8">
                  <div style="font-size: 0.3rem;">打破运维与研发壁垒</div>
                  <div style="font-size: 0.3rem;color: #CCCCCC;">共5章 | kaliArch</div>
                  <div style="font-size: 0.3rem;color: #fc5c60;">¥3.00</div>
                </div>
              </div>
            </li>
            <li>
              <div style="width: 50%;display: inline-block;margin-left: 1rem;">
                <img src="../../../public/img/40.png" alt style="width: 69%;height: 114px;" />
              </div>
              <div
                style="width: 70%;display: inline-block;position: absolute;right: -2.3rem;top: 0.2rem;"
              >
                <span class="div_7_span-2">秒杀高并发白话实战</span>
                <div class="div-8">
                  <div style="font-size: 0.3rem;">主流高并发架构</div>
                  <div style="font-size: 0.3rem;color: #CCCCCC;">共15章 | 51TOC</div>
                  <div style="font-size: 0.3rem;color: #fc5c60;">¥51.00</div>
                </div>
              </div>
            </li>
            <li>
              <div style="width: 50%;display: inline-block;margin-left: 1rem;">
                <img src="../../../public/img/41.png" alt style="width: 69%;height: 114px;" />
              </div>
              <div
                style="width: 70%;display: inline-block;position: absolute;right: -2.3rem;top: 0.2rem;"
              >
                <span class="div_7_span-2">网络排障一点通</span>
                <div class="div-8">
                  <div style="font-size: 0.3rem;">网络排障及优化</div>
                  <div style="font-size: 0.3rem;color: #CCCCCC;">共20章 | 思科小牛</div>
                  <div style="font-size: 0.3rem;color: #fc5c60;">¥51.00</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="div_10" align="center" @click="dj2()">
          <span style="font-size: 0.4rem;">换一批</span>
          <van-icon name="replay" size="0.4rem" style="vertical-align: middle;" />
        </div>
      </div>
      <div class="div_6"></div>
      <div class="div-9">
        <van-tabs v-model="active">
          <van-tab title="推荐">
            <ul class="ulvan-tabs">
              <li>
                <div style="margin: 0 0 0 0.3rem;">
                  <p>
                    <span class="ulvan-tabsspan-1">推荐</span>&nbsp;
                    <span class="ulvan-tabsspan-2">Jenkins在k822s下的三种部署流程和实战演示</span>
                  </p>
                  <div>
                    <img
                      src="../../../public/img/43.png"
                      alt
                      style="width: 51%;margin: 0.4rem 0 0 0rem;"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div style="margin: 0 0 0 0.3rem;">
                  <p>
                    <span class="ulvan-tabsspan-1">推荐</span>&nbsp;
                    <span class="ulvan-tabsspan-2">用Python选一个自己的股票池1</span>
                  </p>
                  <div>
                    <img
                      src="../../../public/img/44.png"
                      alt
                      style="width: 51%;margin: 0.4rem 0 0 0rem;"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div style="margin: 0 0 0 0.3rem;">
                  <p>
                    <span class="ulvan-tabsspan-1">推荐</span>&nbsp;
                    <span class="ulvan-tabsspan-2">Kafka核心API--Connect API</span>
                  </p>
                  <div>
                    <img
                      src="../../../public/img/45.png"
                      alt
                      style="width: 51%;margin: 0.4rem 0 0 0rem;"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div style="margin: 0 0 0 0.3rem;">
                  <p>
                    <span class="ulvan-tabsspan-1">推荐</span>&nbsp;
                    <span class="ulvan-tabsspan-2">面试官：线程里面到底改设置多少线程</span>
                  </p>
                  <div>
                    <img
                      src="../../../public/img/45.png"
                      alt
                      style="width: 51%;margin: 0.4rem 0 0 0rem;"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </van-tab>
          <van-tab title="系统/运维">
            <ul class="ulvan-tabs">
              <li>
                <div style="margin: 0 0 0 0.3rem;">
                  <p>
                    <span class="ulvan-tabsspan-1">推荐</span>&nbsp;
                    <span class="ulvan-tabsspan-2">Jenkins在k8s下的三种部署流程和实战演示</span>
                  </p>
                  <div>
                    <img
                      src="../../../public/img/43.png"
                      alt
                      style="width: 51%;margin: 0.4rem 0 0 0rem;"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div style="margin: 0 0 0 0.3rem;">
                  <p>
                    <span class="ulvan-tabsspan-1">推荐</span>&nbsp;
                    <span class="ulvan-tabsspan-2">用Python选一个自己的股票池1</span>
                  </p>
                  <div>
                    <img
                      src="../../../public/img/44.png"
                      alt
                      style="width: 51%;margin: 0.4rem 0 0 0rem;"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div style="margin: 0 0 0 0.3rem;">
                  <p>
                    <span class="ulvan-tabsspan-1">推荐</span>&nbsp;
                    <span class="ulvan-tabsspan-2">Kafka核心API--Connect API</span>
                  </p>
                  <div>
                    <img
                      src="../../../public/img/45.png"
                      alt
                      style="width: 51%;margin: 0.4rem 0 0 0rem;"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div style="margin: 0 0 0 0.3rem;">
                  <p>
                    <span class="ulvan-tabsspan-1">推荐</span>&nbsp;
                    <span class="ulvan-tabsspan-2">面试官：线程里面到底改设置多少线程</span>
                  </p>
                  <div>
                    <img
                      src="../../../public/img/45.png"
                      alt
                      style="width: 51%;margin: 0.4rem 0 0 0rem;"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </van-tab>
          <van-tab title="云计算">
            <ul class="ulvan-tabs">
              <li>
                <div style="margin: 0 0 0 0.3rem;">
                  <p>
                    <span class="ulvan-tabsspan-1">推荐</span>&nbsp;
                    <span class="ulvan-tabsspan-2">Jenkins在k833s下的三种部署流程和实战演示</span>
                  </p>
                  <div>
                    <img
                      src="../../../public/img/43.png"
                      alt
                      style="width: 51%;margin: 0.4rem 0 0 0rem;"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div style="margin: 0 0 0 0.3rem;">
                  <p>
                    <span class="ulvan-tabsspan-1">推荐</span>&nbsp;
                    <span class="ulvan-tabsspan-2">用Python选一个自己的股票池1</span>
                  </p>
                  <div>
                    <img
                      src="../../../public/img/44.png"
                      alt
                      style="width: 51%;margin: 0.4rem 0 0 0rem;"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div style="margin: 0 0 0 0.3rem;">
                  <p>
                    <span class="ulvan-tabsspan-1">推荐</span>&nbsp;
                    <span class="ulvan-tabsspan-2">Kafka核心API--Connect API</span>
                  </p>
                  <div>
                    <img
                      src="../../../public/img/45.png"
                      alt
                      style="width: 51%;margin: 0.4rem 0 0 0rem;"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div style="margin: 0 0 0 0.3rem;">
                  <p>
                    <span class="ulvan-tabsspan-1">推荐</span>&nbsp;
                    <span class="ulvan-tabsspan-2">面试官：线程里面到底改设置多少线程</span>
                  </p>
                  <div>
                    <img
                      src="../../../public/img/45.png"
                      alt
                      style="width: 51%;margin: 0.4rem 0 0 0rem;"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <!-- 底部 -->
    <dibu></dibu>
    <div class="aside" v-show="yc">
      <div @click="myboke">
        <img src="../../../public/img/42.png" alt style="width: 56%;margin: 39px 0 0 44px;" />
      </div>
      <ul class="ulaside">
        <li>
          <van-icon name="user-o" size="0.4rem" style="vertical-align: middle;" />
          <span class="span-3">我的主页</span>
        </li>
        <li>
          <van-icon name="more-o" size="0.4rem" style="vertical-align: middle;" />
          <span class="span-3">我的订阅专栏</span>
        </li>
        <li>
          <van-icon name="coupon-o" size="0.4rem" style="vertical-align: middle;" />
          <span class="span-3">我的优惠券</span>
        </li>
        <li>
          <van-icon name="add-o" size="0.4rem" style="vertical-align: middle;" />
          <span class="span-3">分享有赏</span>
        </li>
        <li>
          <van-icon name="records" size="0.4rem" style="vertical-align: middle;" />
          <span class="span-3">意见反馈</span>
        </li>
      </ul>
      <div class="spanaside">退出登录</div>
    </div>
  </div>
</template>

<script>
import top from "../../components/top/top.vue";
import dibu from "../../components/dibu/dibu.vue";
export default {
  name: "wuyiboke",
  data() {
    return {
      f: true,
      ff: false,
      fff: true,
      ffff: false,
      nole: true,
      ble: true,
      yc: false,
      active: 0,
    };
  },
  components: {
    top,
    dibu,
  },
  methods: {
    dj() {
      if (this.ble) {
        (this.f = false), (this.ff = true);
        this.ble = false;
      } else {
        (this.f = true), (this.ff = false);
        this.ble = true;
      }
    },

    dj2() {
      if (this.nole) {
        (this.fff = false), (this.ffff = true);
        this.nole = false;
      } else {
        (this.fff = true), (this.ffff = false);
        this.nole = true;
      }
    },
    dj3() {
      this.yc = true;
    },
    dj4() {
      this.yc = false;
    },
    yiqianwenzhang() {
      this.$router.push("/yiqianwenzhang");
    },
    change() {
      this.$router.push("/sikejiaohuan");
    },
    myboke() {
      this.$router.push("/boke");
    },
  },
};
</script>


<style>
.van-tab__text--ellipsis {
  font-size: 0.35rem;
}
</style>
<style scoped>
div,
span,
img,
p {
  margin: 0;
  padding: 0;
}
.my-swipe img {
  width: 100%;
}
.aside {
  position: absolute;
  width: 50%;
  top: 0;
  height: 28rem;
  background-color: #f6f9fe;
}
.ulaside {
  margin: 1rem 0 0 0.8rem;
}
.ulaside li {
  padding: 0.2rem 0.2rem;
}
.ulaside li span {
  padding: 0rem 0.2rem;
}
.spanaside {
  font-size: 0.4rem;
  margin: 135px 0 0 65px;
  color: #bec1c5;
}
#main {
  width: 100%;
}
.span-1 {
  font-weight: bold;
  color: #cc0001;
  font-size: 0.5rem;
  margin-left: 2.55rem;
}
.span-2 {
  font-weight: bold;
  font-size: 0.5rem;
}
.div_1 {
  margin: 0 0 0 0.5rem;
}
.div_2 {
  width: 100%;
  height: 380px;
}
.div_3 {
  height: 50px;
  margin: 0 0 0 0.2rem;
}
.div_3_span_1 {
  float: left;
  font-size: 0.4rem;
  margin: 0.3rem 0 0 0;
}
.div_3_span_2 {
  font-size: 0.4rem;
  color: #cccccc;
  margin: 0.3rem 0.3rem 0 0;
  float: right;
}
.div_4 {
  position: relative;
  border-bottom: 1px #c2c2c2 solid;
  height: 280px;
}
.div_4_ul_1 {
  position: absolute;
  top: 1rem;
  left: 1rem;
}
.div_4_ul_1 li {
  font-size: 0.4rem;
  padding: 0.1rem 0;
}
.div_6 {
  background-color: #edf0f7;
  width: 100%;
  height: 20px;
  margin-top: 0.3rem;
}
.div_7 {
  width: 100%;
  height: 1000px;
}
.div_7_ul_1 {
  padding: 1.3rem 0 0 0;
  position: absolute;
}
.div_7_ul_1 li {
  padding: 0.2rem 0;
  position: relative;
}
.div_7_span-1 {
  font-size: 0.3rem;
  width: 25%;
  height: 40px;
  text-align: center;
  line-height: 0.6rem;
  color: #ffffff;
  display: inline-block;
  background-color: #333333;
  border-radius: 0.1rem;
}
.div_7_span-2 {
  font-size: 0.4rem;
}
.div-8 div {
  padding-top: 0.2rem;
}
.span-3 {
  font-size: 0.4rem;
  vertical-align: middle;
}
.ulvan-tabsspan-1 {
  display: inline-block;
  text-align: center;
  width: 8%;
  border-radius: 0.1rem;
  height: 0.4rem;
  font-size: 0.3rem;
  color: #fa6c3c;
  border: 0.01333rem #fa6c3c solid;
}
.ulvan-tabsspan-2 {
  display: inline-block;
  font-size: 0.35rem;
}
.ulvan-tabs li {
  height: 2.4rem;
  border-bottom: 1px #c2c2c2 solid;
}
.div_10 {
  margin-top: 130px;
}
</style>
