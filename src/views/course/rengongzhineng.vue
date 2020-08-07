<template>
	<div id="main">
		<menubar></menubar>
		<!-- 头部 -->
		<div class="div_top">
			<input type="text" class="div_top_text" placeholder="搜索你感兴趣的课程/讲师" />
			<van-icon name="search" size="0.7rem" class="van" />
			<van-icon name="clock-o" size="0.7rem" class="van" />
		</div>
		<!-- 中间 -->
		<div class="div_2">
			<div>
				<ul class="ul_1">
					<li id="li1" @click="li1()">人工智能</li>
					<li id="li2" @click="li2()">区块链</li>
					<li id="li3" @click="li3()">大数据</li>
					<li id="li4" @click="li4()">云计算</li>
					<li id="li5" @click="li5()">考试认证</li>
					<li id="li6" @click="li6()">后端开发</li>
					<li id="li7" @click="li7()">前端开发</li>
					<li id="li8">移动开发</li>
					<li id="li9">游戏开发</li>
					<li id="li10">测试</li>
					<li id="li11">研发/架构</li>
					<li id="li12">系统/运维</li>
				</ul>
			</div>
			<div class="div_position" id="position1">
				<img src="../../../public/img/27.png" alt="" style="width: 94%;height: 103px;" />
				<div class="div_position_1"><img src="../../../public/img/28.png" alt="" style="width: 98%;height: 73px;margin-top: 0.6rem;" /></div>
				<div class="div_3">
					<div class="div_4">全部</div>
					<div class="div_4" style="margin-left: 0.25rem;">深度学习</div>
				</div>
				<div class="div_3">
					<div class="div_4">机器学习</div>
					<div class="div_4" style="margin-left: 0.25rem;">自然语言处理</div>
				</div>
				<div class="div_3">
					<div class="div_4">图像识别处理</div>
					<div class="div_4" style="margin-left: 0.25rem;">语言识别</div>
				</div>
				<div class="div_3">
					<div class="div_4">机器视觉</div>
					<div class="div_4" style="margin-left: 0.25rem;">推荐算法</div>
				</div>
				<div class="div_3">
					<div class="div_4">自动驾驶</div>
					<div class="div_4" style="margin-left: 0.25rem;">机器人</div>
				</div>
				<div class="div_3">
					<div class="div_4">量化交易</div>
					<div class="div_4" style="margin-left: 0.25rem;">机器人</div>
				</div>
				<div>
					<span style="color: #656668;font-size: 0.4rem;">微职位</span>&nbsp;
					<span style="color: #99999b;font-size: 0.3rem;">6个月，从0起步成为优秀工程师</span>
				</div>
				<img src="../../../public/img/29.png" alt="" style="width: 94%;height: 103px;" />
			</div>
			<div class="div_position" id="position2" style="display: none;">
				<img src="../../../public/img/30.png" alt="" style="width: 94%;height: 103px;" />
				<div class="div_position_1"><img src="../../../public/img/28.png" alt="" style="width: 98%;height: 73px;margin-top: 0.6rem;" /></div>
				<div class="div_3">
					<div class="div_4">全部</div>
					<div class="div_4" style="margin-left: 0.25rem;">区块链底开发</div>
				</div>
				<div class="div_3">
					<div class="div_4">区块链算法原理</div>
					<div class="div_4" style="margin-left: 0.25rem;">DAPP智能合约</div>
				</div>
				<div class="div_3">
					<div class="div_4">EOS智能合约</div>
					<div class="div_4" style="margin-left: 0.25rem;">超级账本</div>
				</div>
				<div class="div_3">
					<div class="div_4">区块链投资</div>
					<div class="div_4" style="margin-left: 0.25rem;">其他</div>
				</div>
				<div>
					<span style="color: #656668;font-size: 0.4rem;">微职位</span>&nbsp;
					<span style="color: #99999b;font-size: 0.3rem;">6个月，从0起步成为优秀工程师</span>
				</div>
				<img src="../../../public/img/29.png" alt="" style="width: 94%;height: 103px;" />
			</div>
			<div class="div_position" id="position3" style="display: none;">
				<img src="../../../public/img/31.png" alt="" style="width: 94%;height: 103px;" />
				<div class="div_position_1"><img src="../../../public/img/28.png" alt="" style="width: 98%;height: 73px;margin-top: 0.6rem;" /></div>
				<div class="div_3">
					<div class="div_4">全部</div>
					<div class="div_4" style="margin-left: 0.25rem;">Hadoop</div>
				</div>
				<div class="div_3">
					<div class="div_4">Spark</div>
					<div class="div_4" style="margin-left: 0.25rem;">Storm</div>
				</div>
				<div class="div_3">
					<div class="div_4">Hive</div>
					<div class="div_4" style="margin-left: 0.25rem;">Yarm</div>
				</div>
				<div class="div_3">
					<div class="div_4">数据分析</div>
					<div class="div_4" style="margin-left: 0.25rem;">数据挖掘</div>
				</div>
				<div class="div_3">
					<div class="div_4">其他</div>
				</div>
				<div>
					<span style="color: #656668;font-size: 0.4rem;">微职位</span>&nbsp;
					<span style="color: #99999b;font-size: 0.3rem;">6个月，从0起步成为优秀工程师</span>
				</div>
				<img src="../../../public/img/29.png" alt="" style="width: 94%;height: 103px;" />
			</div>
			<div class="div_position" id="position4" style="display: none;">
				<img src="../../../public/img/32.png" alt="" style="width: 94%;height: 103px;" />
				<div class="div_position_1"><img src="../../../public/img/28.png" alt="" style="width: 98%;height: 73px;margin-top: 0.6rem;" /></div>
				<div class="div_3">
					<div class="div_4">全部</div>
					<div class="div_4" style="margin-left: 0.25rem;">Docker</div>
				</div>
				<div class="div_3">
					<div class="div_4">OpenStack</div>
					<div class="div_4" style="margin-left: 0.25rem;">虚拟化</div>
				</div>
				<div class="div_3">
					<div class="div_4">云平台</div>
					<div class="div_4" style="margin-left: 0.25rem;">Office 365</div>
				</div>
				<div class="div_3">
					<div class="div_4">云服务</div>
					<div class="div_4" style="margin-left: 0.25rem;">其他</div>
				</div>
			</div>
			<div class="div_position" id="position5" style="display: none;">
				<img src="../../../public/img/33.png" alt="" style="width: 94%;height: 103px;" />
				<div class="div_position_1"><img src="../../../public/img/28.png" alt="" style="width: 98%;height: 73px;margin-top: 0.6rem;" /></div>
				<div class="div_3">
					<div class="div_4">全部</div>
					<div class="div_4" style="margin-left: 0.25rem;">软考</div>
				</div>
				<div class="div_3">
					<div class="div_4">PMP</div>
					<div class="div_4" style="margin-left: 0.25rem;">华为认证</div>
				</div>
				<div class="div_3">
					<div class="div_4">思科认证</div>
					<div class="div_4" style="margin-left: 0.25rem;">红帽认证</div>
				</div>
				<div class="div_3">
					<div class="div_4">微软认证</div>
					<div class="div_4" style="margin-left: 0.25rem;">百度认证</div>
				</div>
				<div class="div_3">
					<div class="div_4">Oracle</div>
					<div class="div_4" style="margin-left: 0.25rem;">等级考试</div>
				</div>
				<div class="div_3">
					<div class="div_4">H3C认证</div>
					<div class="div_4" style="margin-left: 0.25rem;">计算机考研</div>
				</div>
				<div class="div_3">
					<div class="div_4">医考</div>
					<div class="div_4" style="margin-left: 0.25rem;">教师资格证</div>
				</div>
				<div class="div_3">
					<div class="div_4">其他</div>
					<div class="div_4" style="margin-left: 0.25rem;">教师资格证</div>
				</div>
			</div>
			<div class="div_position" id="position6" style="display: none;">
				<img src="../../../public/img/34.png" alt="" style="width: 94%;height: 103px;" />
				<div class="div_position_1"><img src="../../../public/img/28.png" alt="" style="width: 98%;height: 73px;margin-top: 0.6rem;" /></div>
				<div class="div_3">
					<div class="div_4">全部</div>
					<div class="div_4" style="margin-left: 0.25rem;">Python</div>
				</div>
				<div class="div_3">
					<div class="div_4">Java</div>
					<div class="div_4" style="margin-left: 0.25rem;">C/C++/C#</div>
				</div>
				<div class="div_3">
					<div class="div_4">PHP</div>
					<div class="div_4" style="margin-left: 0.25rem;">.Net</div>
				</div>
				<div class="div_3">
					<div class="div_4">Puby</div>
					<div class="div_4" style="margin-left: 0.25rem;">OC/Swift</div>
				</div>
				<div class="div_3">
					<div class="div_4">R语言</div>
					<div class="div_4" style="margin-left: 0.25rem;">Go语言</div>
				</div>
				<div class="div_3">
					<div class="div_4">Qt</div>
					<div class="div_4" style="margin-left: 0.25rem;">VB</div>
				</div>
				<div class="div_3">
					<div class="div_4">Delphi</div>
					<div class="div_4" style="margin-left: 0.25rem;">少儿编程</div>
				</div>
				<div class="div_3">
					<div class="div_4">其他</div>
				</div>
				<img src="../../../public/img/29.png" alt="" style="width: 94%;height: 103px;" />
			</div>
			<div class="div_position" id="position7" style="display: none;">
				<img src="../../../public/img/35.png" alt="" style="width: 94%;height: 103px;" />
				<div class="div_position_1"><img src="../../../public/img/28.png" alt="" style="width: 98%;height: 73px;margin-top: 0.6rem;" /></div>
				<div class="div_3">
					<div class="div_4">全部</div>
					<div class="div_4" style="margin-left: 0.25rem;">Html/CSS</div>
				</div>
				<div class="div_3">
					<div class="div_4">JavaScript</div>
					<div class="div_4" style="margin-left: 0.25rem;">Vue.js</div>
				</div>
				<div class="div_3">
					<div class="div_4">React.JS</div>
					<div class="div_4" style="margin-left: 0.25rem;">Angular</div>
				</div>
				<div class="div_3">
					<div class="div_4">Node.js</div>
					<div class="div_4" style="margin-left: 0.25rem;">jQuery</div>
				</div>
				<div class="div_3">
					<div class="div_4">Bootstrap</div>
					<div class="div_4" style="margin-left: 0.25rem;">Sass/Less</div>
				</div>
				<div class="div_3">
					<div class="div_4">WebApp</div>
					<div class="div_4" style="margin-left: 0.25rem;">前端工具</div>
				</div>
				<div class="div_3">
					<div class="div_4">其他</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import menubar from '../../components/menubar/menubar.vue'
	export default {
		name: 'rengongzhineng',
		components:{
			menubar
		},
		data() {
			return {};
		},
		methods:{
			li1(){
				document.getElementById('li1').style.background="#edf0f7"
				document.getElementById('li2').style.background="#FFFFFF"
				document.getElementById('li3').style.background="#FFFFFF"
				document.getElementById('li4').style.background="#FFFFFF"
				document.getElementById('li5').style.background="#FFFFFF"
				document.getElementById('li6').style.background="#FFFFFF"
				document.getElementById('li7').style.background="#FFFFFF"
				document.getElementById('li8').style.background="#FFFFFF"
				document.getElementById('li9').style.background="#FFFFFF"
				document.getElementById('li10').style.background="#FFFFFF"
				document.getElementById('li11').style.background="#FFFFFF"
				document.getElementById('li12').style.background="#FFFFFF"
				document.getElementById('position1').style.display="inline-block"
				document.getElementById('position2').style.display="none"
				document.getElementById('position3').style.display="none"
				document.getElementById('position4').style.display="none"
				document.getElementById('position5').style.display="none"
				document.getElementById('position6').style.display="none"
				document.getElementById('position7').style.display="none"
			},
			li2(){
				document.getElementById('li1').style.background="#FFFFFF"
				document.getElementById('li2').style.background="#edf0f7"
				document.getElementById('li3').style.background="#FFFFFF"
				document.getElementById('li4').style.background="#FFFFFF"
				document.getElementById('li5').style.background="#FFFFFF"
				document.getElementById('li6').style.background="#FFFFFF"
				document.getElementById('li7').style.background="#FFFFFF"
				document.getElementById('li8').style.background="#FFFFFF"
				document.getElementById('li9').style.background="#FFFFFF"
				document.getElementById('li10').style.background="#FFFFFF"
				document.getElementById('li11').style.background="#FFFFFF"
				document.getElementById('li12').style.background="#FFFFFF"
				document.getElementById('position1').style.display="none"
				document.getElementById('position2').style.display="inline-block"
				document.getElementById('position3').style.display="none"
				document.getElementById('position4').style.display="none"
				document.getElementById('position5').style.display="none"
				document.getElementById('position6').style.display="none"
				document.getElementById('position7').style.display="none"
			},
			li3(){
				document.getElementById('li1').style.background="#FFFFFF"
				document.getElementById('li2').style.background="#FFFFFF"
				document.getElementById('li3').style.background="#edf0f7"
				document.getElementById('li4').style.background="#FFFFFF"
				document.getElementById('li5').style.background="#FFFFFF"
				document.getElementById('li6').style.background="#FFFFFF"
				document.getElementById('li7').style.background="#FFFFFF"
				document.getElementById('li8').style.background="#FFFFFF"
				document.getElementById('li9').style.background="#FFFFFF"
				document.getElementById('li10').style.background="#FFFFFF"
				document.getElementById('li11').style.background="#FFFFFF"
				document.getElementById('li12').style.background="#FFFFFF"
				document.getElementById('position1').style.display="none"
				document.getElementById('position2').style.display="none"
				document.getElementById('position3').style.display="inline-block"
				document.getElementById('position4').style.display="none"
				document.getElementById('position5').style.display="none"
				document.getElementById('position6').style.display="none"
				document.getElementById('position7').style.display="none"
			},
			li4(){
				document.getElementById('li1').style.background="#FFFFFF"
				document.getElementById('li2').style.background="#FFFFFF"
				document.getElementById('li3').style.background="#FFFFFF"
				document.getElementById('li4').style.background="#edf0f7"
				document.getElementById('li5').style.background="#FFFFFF"
				document.getElementById('li6').style.background="#FFFFFF"
				document.getElementById('li7').style.background="#FFFFFF"
				document.getElementById('li8').style.background="#FFFFFF"
				document.getElementById('li9').style.background="#FFFFFF"
				document.getElementById('li10').style.background="#FFFFFF"
				document.getElementById('li11').style.background="#FFFFFF"
				document.getElementById('li12').style.background="#FFFFFF"
				document.getElementById('position1').style.display="none"
				document.getElementById('position2').style.display="none"
				document.getElementById('position3').style.display="none"
				document.getElementById('position4').style.display="inline-block"
				document.getElementById('position5').style.display="none"
				document.getElementById('position6').style.display="none"
				document.getElementById('position7').style.display="none"
			},
			li5(){
				document.getElementById('li1').style.background="#FFFFFF"
				document.getElementById('li2').style.background="#FFFFFF"
				document.getElementById('li3').style.background="#FFFFFF"
				document.getElementById('li4').style.background="#FFFFFF"
				document.getElementById('li5').style.background="#edf0f7"
				document.getElementById('li6').style.background="#FFFFFF"
				document.getElementById('li7').style.background="#FFFFFF"
				document.getElementById('li8').style.background="#FFFFFF"
				document.getElementById('li9').style.background="#FFFFFF"
				document.getElementById('li10').style.background="#FFFFFF"
				document.getElementById('li11').style.background="#FFFFFF"
				document.getElementById('li12').style.background="#FFFFFF"
				document.getElementById('position1').style.display="none"
				document.getElementById('position2').style.display="none"
				document.getElementById('position3').style.display="none"
				document.getElementById('position4').style.display="none"
				document.getElementById('position5').style.display="inline-block"
				document.getElementById('position6').style.display="none"
				document.getElementById('position7').style.display="none"
			},
			li6(){
				document.getElementById('li1').style.background="#FFFFFF"
				document.getElementById('li2').style.background="#FFFFFF"
				document.getElementById('li3').style.background="#FFFFFF"
				document.getElementById('li4').style.background="#FFFFFF"
				document.getElementById('li5').style.background="#FFFFFF"
				document.getElementById('li6').style.background="#edf0f7"
				document.getElementById('li7').style.background="#FFFFFF"
				document.getElementById('li8').style.background="#FFFFFF"
				document.getElementById('li9').style.background="#FFFFFF"
				document.getElementById('li10').style.background="#FFFFFF"
				document.getElementById('li11').style.background="#FFFFFF"
				document.getElementById('li12').style.background="#FFFFFF"
				document.getElementById('position1').style.display="none"
				document.getElementById('position2').style.display="none"
				document.getElementById('position3').style.display="none"
				document.getElementById('position4').style.display="none"
				document.getElementById('position5').style.display="none"
				document.getElementById('position6').style.display="inline-block"
				document.getElementById('position7').style.display="none"
			},
			li7(){
				document.getElementById('li1').style.background="#FFFFFF"
				document.getElementById('li2').style.background="#FFFFFF"
				document.getElementById('li3').style.background="#FFFFFF"
				document.getElementById('li4').style.background="#FFFFFF"
				document.getElementById('li5').style.background="#FFFFFF"
				document.getElementById('li6').style.background="#FFFFFF"
				document.getElementById('li7').style.background="#edf0f7"
				document.getElementById('li8').style.background="#FFFFFF"
				document.getElementById('li9').style.background="#FFFFFF"
				document.getElementById('li10').style.background="#FFFFFF"
				document.getElementById('li11').style.background="#FFFFFF"
				document.getElementById('li12').style.background="#FFFFFF"
				document.getElementById('position1').style.display="none"
				document.getElementById('position2').style.display="none"
				document.getElementById('position3').style.display="none"
				document.getElementById('position4').style.display="none"
				document.getElementById('position5').style.display="none"
				document.getElementById('position6').style.display="none"
				document.getElementById('position7').style.display="inline-block"
			}
		}
	};
</script>

<style scoped>
div,span,a,p,img {
	margin: 0px;
	padding: 0px;
}
#main {
	width: 100%;
}
.div_top {
	width: 100%;
	background-color: red;
	border: 1px white solid;
	height: 1.3rem;
}
.div_top_text {
	width: 70%;
	border-radius: 1.06667rem;
	background-color: #ecf1f7;
	border: 1px #ffffff solid;
	height: 0.6rem;
	font-size: 0.3rem;
	text-indent: 0.5rem;
	color: #cccccc;
	margin: 0 0 0 0.5rem;
}
.van {
	vertical-align: middle;
	margin: 0.3rem 0 0 0;
	padding: 0 0.2rem;
}
.div_2 {
	background-color: #edf0f7;
	width: 100%;
	height:22rem;
}
.ul_1 li {
	list-style: none;
	background-color: #ffffff;
	width: 30%;
	height: 1.6rem;
	/* padding: 0.1rem 0; */
	font-size: 0.3rem;
	margin: 0.03rem 0;
	line-height: 1.9rem;
	text-align: center;
	position: relative;
}
.ul_1 li:nth-last-of-type(12) {
	background-color: #edf0f7;
}
.div_position {
	position: absolute;
	top: 1.4rem;
	left: 3.2rem;
}
.div_position_1 {
	width: 94%;
	height: 2.8rem;
	background-color: #ffffff;
}
.div_3 {
	margin: 0.2rem 0 0 0;
}
.div_4 {
	width: 45%;
	background-color: #ffffff;
	line-height: 1.5rem;
	font-size: 0.4rem;
	display: inline-block;
	/* margin: 0 0.1rem; */
	height: 100px;
	text-align: center;
	border-radius: 0.1rem;
}
</style>
