<template>
	<!-- 京东数据库 -->
	<div id="main">
		<top></top>
		<div class="div-1"><van-nav-bar title="" left-text="返回" right-text="按钮" left-arrow /></div>
		<div class="div-2">
			<p style="height: 1.4rem;">
				<span class="ulvan-tabsspan-1">原创</span>&nbsp;
				<span class="ulvan-tabsspan-2">京东数据库运维自动化体系建设之路</span><span class="ulvan-tabsspan-2">京东</span>
			</p>
			<img src="../../../public/img/48.png" alt="" style="width: 88%;">
			<p class="div-p">
				运维自动化来源于工作中的痛点，京东数据库团队面
				对的是商城成千.上万的研发工程师，这种压力推动我
				们不断变革，然而变革不是一蹴而就，也经历过从手
				工到脚本化、自动化、平台化、智能化的艰难转变,
				所以说是需求在驱动运维体系的建设，而运维自动化
				的真谛在于解放运维人员，促进人率提升，减少人为
				故障，要学会培养自己“懒”这个好习惯。京东的自动
				化运维体系建设始于2012年，下面从两个方 面进行
				介绍。
			</p>
			<p class="div-p">
				1.京东数据库智能运维平台
				京东业务每年都在以爆发的形式在增长，数据库服务
				器的数量众多，产品线也多达上千条，要支持如此庞
				大的业务体系，需要一套完善的运维自动化管理平
				台。目前京东MySQl数据库管理平台简称DBS，主
				要涵盖以下内容:完善的资产管理系统、数据库流程
				管理系统、数据库监控系统、数据库故障管理系统、

			</p>
		</div>
		<div>
			<img src="../../../public/img/49.png" alt="" style="width: 100%;">
		</div>
	</div>
</template>

<script>
import { Toast } from 'vant';
import top from '../../components/top/top.vue';
export default {
	name: 'jingdongshujuku',
	data() {
		return {};
	},
	components: {
		top
	}
};
</script>

<style scoped>
#main {
	width: 100%;
}
.div-1 {
	margin-top: 0.4rem;
	position: relative;
}
.ulvan-tabsspan-1 {
	display: inline-block;
	text-align: center;
	width: 8%;
	border-radius: 0.1rem;
	height: 0.4rem;
	font-size: 0.2rem;
	color: #fa6c3c;
	border: 0.01333rem #fa6c3c solid;
}
.ulvan-tabsspan-2{
	display: inline-block;
/* 	text-align: center; */
	/* width: 8%; */
	/* border-radius: 0.1rem; */
	/* height: 0.4rem; */
	font-size: 0.5rem;
	/* color: #fa6c3c; */
	/* border: 0.01333rem #fa6c3c solid; */
}
.div-2{
	margin: 0 0 0 0.5rem;
}
.div-p{
	font-size: 0.4rem;
}
</style>
