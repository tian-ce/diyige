<template>
	<!-- 学分商城 -->
	<div id="main" style="position: relative;background-color: #f8f8f8;height: 20rem;">
		<div class="div-1">
			<van-nav-bar title="学分商城" left-text="返回" left-arrow @click-left="fanhui">
				<template #left>
					<van-icon name="arrow-left" size="22" />
				</template>
			</van-nav-bar>
		</div>
		<div class="div-2" align="center">
			<div class="div-3">
				<span>目前可兑换的学分：15</span>
				<span @click="dj()">兑换规则></span>
			</div>
		</div>
		<div class="div-33" align="center">
			<div class="div-4">
				<div class="div-4-div">
					<img src="../../../public/img/56.png" alt="" style="width: 80%;">
				</div>
				<div class="div-4-div">
					<img src="../../../public/img/57.png" alt="" style="width: 80%;">
				</div>
			</div>
			<div class="div-5">
				<div class="div-5-div" @click="youhuozhuanqu()">
					<img src="../../../public/img/58.png" alt="" style="width: 80%;display: inline-block;">
				</div>
				<div class="div-5-div">
					<img src="../../../public/img/59.png" alt="" style="width: 80%;display: inline-block;">
				</div>
			</div>
		</div>
		<div class="div-6" align="center" @click="xuefenshangcheng1()">
			<h6 style="font-size: 0.4rem;">热门推荐</h6>
			<hr style="width: 90%;">
			<img src="../../../public/img/60.png" alt="" style="width: 54%;">
		</div>
		<!-- /活动规则 -->
		<div class="divposition" v-show="yc">
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
			<div style="margin-top: 5rem;" align="center" @click="dj1()">×</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"xuefenshangcheng",
		data(){
			return {
				yc:false
			}
		},
		methods:{
			dj(){
				this.yc=true;
			},
			dj1(){
				this.yc=false;
			},
			youhuozhuanqu(){
				this.$router.push("/youhuozhuanqu")
			},
			xuefenshangcheng1(){
				this.$router.push("/xuefenshangcheng1")
			},
			fanhui(){
				this.$router.push("/qiandaoyouli")
			}
		}
	}
</script>


<style>
	.van-nav-bar__title{
		font-size: 0.35rem;
	}
</style>
<style scoped>
.div-1 {
	margin-top: 0.2rem;
}
.div-2{
	background-color: #ffc523;
	width: 100%;
	height: 3rem;
}
.div-3{
	width: 95%;
	height: 1rem;
	border-radius: 0.5rem;
	background-color: #FFFFFF;
	position: relative;
	top: 1rem;
}
.div-3 span:nth-last-of-type(2){
	font-size: 0.3rem;
	color: #fb841c;
	float: left;
	margin: 0.3rem 0 0 1rem
}
.div-3 span:nth-last-of-type(1){
	font-size: 0.3rem;
	color: #7eb6fb;
	float: right;
	margin: 0.3rem 1rem 0 0rem
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
.div-4{
	width: 100%;
}
.div-5{
	width: 100%;
}
.div-4-div{
	display: inline-block;
	width: 50%;
}
.div-5-div{
	display: inline-block;
	width: 50%
}
.div-33{
	width: 100%;
	/* background-color: red; */
	height: 7.5rem;
	margin-top: 0.5rem;
}
</style>
