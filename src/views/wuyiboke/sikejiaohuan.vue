<template>
	<!-- 思科交换网络安全指南 -->
	<div id="main" style="position: relative;">
		<top></top>
		<div class="div-1"><van-nav-bar title="51CTO订阅专栏" left-text="返回" @click-left="fanhui" right-text="按钮" left-arrow /></div>
		<div class="div-2">
			<img src="../../../public/img/50.png" alt="" style="width: 100%;" />
			<div class="div-3">
				<h4>专栏介绍</h4>
				<p>
					网络安全防范的大部分是“万一”而不是“一.万”, ， 而网络工程师最重要的网络安全点就是交换机, 毕竟下面连着各种各样的用户。本专栏以思科接
					入层交换机的安全为例，讲解基础与高级安全配 置，以使得我们的网络更安全可靠。
				</p>
			</div>
			<div class="div-4">
				<p style="font-size: 0.5rem;">专栏入口</p>
				<p>专栏订阅成功后，即可通过以下4个途径永久阅读</p>
				<ul class="ul-div-4">
					<li>1.“51CTO订阅专栏” 小程序端</li>
					<li>2.“51CTO” 微信服务号端</li>
					<li>3.“51CTO”博客web端</li>
					<li>4.“51CTO学院”Android App端</li>
				</ul>
			</div>
			<div class="div-5">
				<p style="font-size: 0.5rem;">订阅说明</p>
				<ul class="ul-div-5">
					<li>1.本专栏为图文专栏，共计5篇</li>
					<li>2.本专栏为虚拟产品，一经订阅，概不退款，请慎重订阅</li>
					<li>3.专栏阅读过程中，如有任何问题请联系51CTO小组手（微信：cto51boke/QQ：3591348659）</li>
					<li>4.“51CTO学院”Android App端</li>
				</ul>
			</div>
			<div class="div-6">
				<p style="font-size: 0.5rem;">学习本专栏您能收获什么</p>
				<ul class="ul-div-6">
					<li>1.思科设备远程管理的各种方法</li>
					<li>2.局域网基础安全：STP guard与port secret</li>
					<li>3.局域网高级安全：DHCP snooping、DAI、IPSG</li>
					<li>4.“51CTO学院”Android App端</li>
				</ul>
			</div>
			<div class="div-7">
				<p style="font-size: 0.5rem;">专栏目录</p>
				<ul class="ul-div-7">
					<li>1.从远程管理思科设备的N种方案开始练手</li>
					<li>2.请给STP做足安全防护</li>
					<li>3.经典实用又便宜的端口安全技术</li>
					<li>4.DHCP几种特殊的需求（地址预留）与欺骗防范</li>
					<li>5.局域网交换机高级安全技术（DAI、IPSG）</li>
				</ul>
			</div>
		</div>
		<div class="div-position">
			<img src="../../../public/img/515.png" alt="" style="width: 100%;">
		</div>
	</div>
</template>

<script>
import top from '../../components/top/top.vue';
export default {
	name: 'sikejiaohuan',
	components: {
		top
	},
	methods:{
		fanhui(){
			this.$router.go(-1)
		}
	}
};
</script>


<style>
	.van-nav-bar__title{
		font-size: 0.35rem !important; 
	}
	.van-nav-bar__text{
		font-size: 0.35rem;
	}
</style>
<style scoped>
#main {
	width: 100%;
}
.div-1 {
	margin-top: 0.4rem;
	position: relative;
}
.div-2 {
	margin-top: 0.4rem;
}
.div-3{
	margin-left: 0.4rem;
	width: 95%;
	margin: 0 auto;
	/* background-color: red; */
	height: 4.66667rem;
}
.div-3 h4{
	font-size: 0.5rem;
}
.div-3 p{
	font-size: 0.4rem;
	color: #676767;
}
.div-4{
	margin-left: 0.4rem;
	width: 95%;
	margin: 0 auto;
	/* background-color: red; */
	height: 4.66667rem;
}
.div-4 p{
	font-size: 0.4rem;
	color: #676767;
}
.ul-div-4 li{
	font-size: 0.4rem;
	color: #676767;
}
.div-5{
	margin-left: 0.4rem;
	width: 95%;
	margin: 0 auto;
	/* background-color: red; */
	height: 4.66667rem;
}
.ul-div-5 li{
	font-size: 0.4rem;
	color: #676767;
}
.div-6{
	margin-left: 0.4rem;
	width: 95%;
	margin: 0 auto;
	/* background-color: red; */
	height: 3.66667rem;
}
.ul-div-6 li{
	font-size: 0.4rem;
	color: #676767;
}
.div-7{
	margin-left: 0.4rem;
	width: 95%;
	margin: 0 auto;
	/* background-color: red; */
	height: 4.66667rem;
}
.ul-div-7 li{
	font-size: 0.4rem;
	color: #676767;
}
.div-position{
	position: fixed;
	top: 16.6rem;
}
</style>
