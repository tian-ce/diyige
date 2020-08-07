<template>
	<!-- 一千文章 -->
	<div id="main">
		<top></top>
		<div class="div-1">
			<van-nav-bar title="1000+文章" left-text="返回" right-text="按钮" @click-left="fanhui" @click-right="dj()" left-arrow/>
		</div>
		<div class="div-2" @click="yc1()">
			<ul class="ulvan-tabs">
				<li>
					<div style="margin: 0 0 0 0.3rem;">
						<p style="font-size: 20px;">
							<span class="ulvan-tabsspan-2">京东数据库自动化体系建设之路</span>
						</p>
						<div><img src="../../../public/img/43.png" alt="" style="width: 51%;margin: 0.4rem 0 0 0rem;"></div>
					</div>
				</li>
				<li>
					<div style="margin: 0 0 0 0.3rem;">
						<p style="font-size: 20px;">
							<span class="ulvan-tabsspan-2">运维从业人员如何留住健康</span>
						</p>
						<div><img src="../../../public/img/44.png" alt="" style="width: 51%;margin: 0.4rem 0 0 0rem;"></div>
					</div>
				</li>
				<li>
					<div style="margin: 0 0 0 0.3rem;">
						<p style="font-size: 20px;">
							<span class="ulvan-tabsspan-2">没有宫廷内斗，数据库届的延禧攻略</span>
						</p>
						<div><img src="../../../public/img/45.png" alt="" style="width: 51%;margin: 0.4rem 0 0 0rem;"></div>
					</div>
				</li>
				<li>
					<div style="margin: 0 0 0 0.3rem;">
						<p style="font-size: 20px;">
							<span class="ulvan-tabsspan-2">Vue.js 十五分钟入门</span>
						</p>
						<div><img src="../../../public/img/45.png" alt="" style="width: 51%;margin: 0.4rem 0 0 0rem;"></div>
					</div>
				</li>
				<li>
					<div style="margin: 0 0 0 0.3rem;">
						<p style="font-size: 20px;">
							<span class="ulvan-tabsspan-2">老鸟运维下场</span>
						</p>
						<div><img src="../../../public/img/45.png" alt="" style="width: 51%;margin: 0.4rem 0 0 0rem;"></div>
					</div>
				</li>
				<li>
					<div style="margin: 0 0 0 0.3rem;">
						<p style="font-size: 20px;">
							<span class="ulvan-tabsspan-2">阿里云部署Oracle 11g数据库</span>
						</p>
						<div><img src="../../../public/img/45.png" alt="" style="width: 51%;margin: 0.4rem 0 0 0rem;"></div>
					</div>
				</li>
			</ul>
		</div>
		<div class="div-3" id="div-3" v-show="yc">
			<ul class="ulposition">
				<li> 
					<van-icon name="wap-home-o" size="0.5rem" style="vertical-align: middle;"/>
					&nbsp;
					<span class="ulpositionspan">首页</span>
				</li>
				<li>
					<van-icon name="comment-o" size="0.5rem" style="vertical-align: middle;"/>
					&nbsp;
					<span class="ulpositionspan">订阅专栏</span>
				</li>
				<li>
					<van-icon name="envelop-o" size="0.5rem" style="vertical-align: middle;"/>
					&nbsp;
					<span class="ulpositionspan">我的订阅专栏</span>
				</li>
				<li>
					<van-icon name="user-o" size="0.5rem" style="vertical-align: middle;"/>
					&nbsp;
					<span class="ulpositionspan">我的主页</span>
				</li>
				<li>
					<van-icon name="add-o" size="0.5rem" style="vertical-align: middle;"/>
					&nbsp;
					<span class="ulpositionspan">分享有赏</span>
				</li>
			</ul>
		</div>
		<dibu></dibu>
	</div>
</template>

<script>
import { Toast } from 'vant';
import top from '../../components/top/top.vue';
import dibu from '../../components/dibu/dibu.vue';
export default {
	name: 'yiqianwenzhang',
	data(){
		return {
			yc:false
		}
	},
	components: {
		top,
		dibu
	},
	methods:{
		dj(){
			this.yc=true
		},
		yc1(){
			this.yc=false	
		},
		fanhui(){
			this.$router.go(-1);
		}
	}
};
</script>


<style>
	.van-nav-bar__title{
		font-size: 0.35rem;
	}
	.van-nav-bar__text{
		font-size: 0.35rem;
	}
	.van-icon-arrow-left::before{
		font-size: 0.35rem;
	}
</style>
<style scoped>
#main {
	width: 100%;
}
.div-1{
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
	font-size: 0.4rem !important;
}


.div-3{
	position: absolute;
	background-color: #fbfbfb;
	width: 40%;
	top: 1.8rem;
	right: 0;
	z-index: 999;
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
}
.ulvan-tabs p{
	height: 0;
}
.ulvan-tabs li{
	height: 2rem;
	border-bottom: 1px #C2C2C2 solid;
}
.ulposition icon{
	font-size: 0.2rem;
}
.ulpositionspan{
	font-size: 30px;
}
</style>
