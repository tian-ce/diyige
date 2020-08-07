<template>
	<div id="main" style="position: relative;">
		<div class="div-1">
			<van-nav-bar title="签到有礼" left-text="返回" @click-left="fanhui">
				<template #left>
					<van-icon name="arrow-left" size="22" />
				</template>
			</van-nav-bar>
		</div>
		<div class="div-2">
			<div class="div-3">学分记录</div>
			<div class="div-4">
				<div class="div-5" @click="dj()">
					<div class="div-6" v-show="yc1">
						<div><span class="div-6-span-1">立即签到</span></div>
						<div><span class="div-6-span-2">会员翻倍</span></div>
					</div>
					<div class="div-6" v-show="yc2" @click="dj2()"><img src="../../../public/img/52.png" alt="" style="width: 59%;margin: 14px 0 0 24px;" /></div>
				</div>
				<div class="div-7">
					<span>已连续签到{{ bubianliang }}天</span>
					<span>当前学分25</span>
				</div>
			</div>
			<div class="div-8">
				<ul class="ul-div-8">
					<li id="li1">1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
					<li>6</li>
					<li>7</li>
				</ul>
			</div>
		</div>
		<div class="div-9">
			<img src="../../../public/img/53.png" style="width: 100%;margin: 1rem 0 0 0rem;" @click="store()"/>
			<div class="div-10">
				<div class="div-11" @click="dj3()">活动规则</div>
				<div class="div-12" align="center">
					<p>幸运转盘</p>
					<p>chennadar 抽中大会员</p>
				</div>
			</div>
			<div class="div-13"><img src="../../../public/img/54.png" alt="" style="width: 100%;" /></div>
			<div class="div-14"><img src="../../../public/img/55.png" alt="" style="width: 100%;" /></div>
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item>
					<img src="../../../public/img/1.png">
				</van-swipe-item>
				<van-swipe-item>
					<img src="../../../public/img/2.png">
				</van-swipe-item>
				<van-swipe-item>
					<img src="../../../public/img/3.png">
				</van-swipe-item>
				<van-swipe-item>
					<img src="../../../public/img/4.png">
				</van-swipe-item>
				<van-swipe-item>
					<img src="../../../public/img/5.png">
				</van-swipe-item>
			</van-swipe>
		</div>
		<!-- /活动规则 -->
		<div class="divposition" v-show="yc3">
			<ul class="ulposition">
				<li>
					<h6>活动规则</h6>
				</li>
				<li>
					1.免费抽奖:普通用户1次/天，会员2次/天
				</li>
				<li>
					去2.每人每天可获得3次额外抽奖机会 (20学分/次)当分商城
				</li>
				<li>
					3.虚拟礼品自动发放至账户(1分钟内)，会员品有效期顺延相应天数。
				</li>
				<li>
					4.实物礼品请填写完整邮寄信息，否则视为放弃，每周五统一邮寄，遇法定节假日顺延活动					</li>
				<li>
					5.礼品不定期更新，记得常来看看
				</li>
				<li>
					6.如需帮助，请联系网站在线客服或电话:400101 1651
				</li>
			</ul>
			<div style="margin-top: 5rem;" align="center" @click="dj4()">×</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'qiandaoyouli',
	data() {
		return {
			yc1: true,
			yc2: false,
			bubianliang: 0,
			yc3:false
		};
	},
	methods: {
		dj() {
			this.yc1 = false;
			this.yc2 = true;
			this.bubianliang++;
			console.log(this.bubianliang);
			document.getElementById('li1').style.background = 'red';
		},
		dj2() {
			alert('您今天已经签到了');
		},
		dj3(){
			this.yc3 = true;
		},
		dj4(){
			this.yc3 = false;
		},
		fanhui(){
			this.$router.push("/home")
		},
		store(){
			this.$router.push("/xuefenshangcheng")
		}
	}
};
</script>


<style>
	.van-nav-bar__title{
		font-size: 0.35rem;
	}
</style>
<style scoped>
#main{
	overflow: hidden;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}
.div-1 {
	margin-top: 0.2rem;
}
.div-2 {
	background-color: #71b0ff;
	height: 500px;
	width: 100%;
	position: relative;
}
.div-3 {
	position: absolute;
	border-radius: 0.5rem;
	color: #88e6f1;
	font-size: 0.3rem;
	right: -19px;
	width: 20%;
	height: 0.5rem;
	background-color: #ffffff;
	text-align: center;
	line-height: 0.5rem;
	top: 0.4rem;
}
.div-4 {
	background-color: #f0f5fb;
	border-radius: 5rem;
	width: 38%;
	height: 3.66667rem;
	position: absolute;
	top: 1rem;
	left: 3.4rem;
}
.div-5 {
	background-color: #99dced;
	border-radius: 5rem;
	width: 87%;
	height: 3rem;
	position: absolute;
	/* top: 1rem; */
	left: 0.27rem;
	/* left: 3.4rem; */
	top: 0.3rem;
}
.div-6 {
	background-color: #ffffff;
	border-radius: 5rem;
	width: 69%;
	left: 0.5rem;
	height: 2.2rem;
	position: absolute;
	top: 0.4rem;
}
.div-6 div:nth-of-type(1){
	margin-top: 0.60rem;
}
.div-6 div:nth-of-type(2){
    margin-left: 0.2rem;
}
.div-6-span-1 {
	font-size: 0.4rem;
	display: initial;
	color: #efba83;
	text-align: center;
	margin-left: 0.3rem;
}
.div-6-span-2 {
	font-size: 0.2rem;
	display: inline-block;
	color: #efba83;
	text-align: center;
	margin-left: 0.5rem;
}
.div-7 span:nth-last-of-type(1) {
	color: #efba83;
	font-size: 0.3rem;
	float: right;
}
.div-7 {
	margin: 4rem 0 0 0;
}
.div-7 span:nth-last-of-type(2) {
	font-size: 0.3rem;
	float: left;
}
.div-8 {
	width: 100%;
}
.ul-div-8 {
	width: 100%;
	padding: 5.5rem 2.4rem 0rem  2.4rem;
}
.ul-div-8 li {
	display: inline-block;
	color: #000;
	font-size: 0.3rem;
	text-align: center;
	background-color: #f1f1f1;
	width: 7%;
	line-height: 0.8rem;
	height: 0.7rem;
	border-radius: 5rem;
	margin-left: 0.1rem;
}
.div-9 {
	background-color: #f8f8f8;
	width: 100%;
	height: 24rem;
}
.div-10 {
	position: relative;
}
.div-11 {
	position: absolute;
	border-radius: 0.5rem;
	color: #ffffff;
	font-size: 0.3rem;
	right: 0px;
	width: 20%;
	height: 0.5rem;
	background-color: #3d86e7;
	text-align: center;
	line-height: 0.5rem;
	top: 0.6rem;
}
.div-12 p:nth-last-of-type(1) {
	font-size: 0.4rem;
	color: #fbaf5b;
}
.div-12 p:nth-last-of-type(2) {
	font-size: 0.5rem;
}
.div-12 {
	padding: 0.1rem 0;
}
.divposition{
	width: 100%;
	position: absolute;
	height: 30rem;
	background-color: #323232;
	top: 0;
}
.ulposition{
	margin-left: 1rem;
}
.ulposition li{
	font-size: 0.4rem;
	color: #FFFFFF;
	padding: 0.2rem 0;
}
.my-swipe img{
	width: 100%;
	
}
.my-swipe .van-swipe-item{
	line-height: 0px;
}
</style>
