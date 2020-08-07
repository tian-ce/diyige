<template>
	<!-- 排行榜 -->
	<div id="main">
		<div style="padding-top: 3px;">
			<van-nav-bar title="课程排行榜" left-arrow @click-left="onClickLeft">
				<template #right>
					<van-icon name="search" size="20" color="black"/>
				</template>
			</van-nav-bar>
		</div>
		<!-- tab标签页 -->
		<van-tabs v-model="active">
			<van-tab title="课程销量榜">
				<div>
					<van-dropdown-menu>
						<van-dropdown-item title="人工智能:全部" ref="item">
							<van-tree-select height="55vw" :items="items" :main-active-index.sync="active1">
								<template #content>
									<div v-if="active1 === 0">
										<ul class="ul_1">
											<li>深度学习</li>
											<li>机器学习</li>
											<li>自然语言处理</li>
											<li>图像识别处理</li>
											<li>机器视觉</li>
											<li>推荐算法</li>
											<li>量化交易</li>
											<li>其他</li>
										</ul>
									</div>
									<div v-if="active1 === 1">
										<ul class="ul_1">
											<li>全部</li>
											<li>区块链底层开发</li>
											<li>区块链算法原理</li>
											<li>DAPP智能合约开发</li>
										</ul>
									</div>
									<div v-if="active1 === 2">
										<ul class="ul_1">
											<li>全部</li>
											<li>Hadoop</li>
											<li>Spark</li>
											<li>Storm</li>
											<li>数据分析</li>
											<li>数据挖掘</li>
											<li>其他</li>
										</ul>
									</div>
									<div v-if="active1 === 3">
										<ul class="ul_1">
											<li>全部</li>
											<li>Docker</li>
											<li>OpenStack</li>
											<li>虚拟化</li>
											<li>云平台</li>
											<li>Office 365</li>
											<li>云服务</li>
											<li>其他</li>
										</ul>
									</div>
									<div v-if="active1 === 4">
										<ul class="ul_1">
											<li>全部</li>
											<li>软考</li>
											<li>PMP</li>
											<li>华为认证</li>
											<li>思科认证</li>
											<li>红帽认证</li>
											<li>微软认证</li>
											<li>百度认证</li>
										</ul>
									</div>
									<div v-if="active1 === 5">
										<ul class="ul_1">
											<li>全部</li>
											<li>Python</li>
											<li>Java</li>
											<li>C/C++/C#</li>
											<li>PHP</li>
											<li>Net</li>
											<li>Ruby</li>
											<li>OC/Swift</li>
										</ul>
									</div>
									<div v-if="active1 === 6">
										<ul class="ul_1">
											<li>全部</li>
											<li>Html/CSS</li>
											<li>JavaScript</li>
											<li>Vue.js</li>
											<li>React.JS</li>
											<li>Angular</li>
											<li>Node.js</li>
											<li>jQuery</li>
										</ul>
									</div>
								</template>
							</van-tree-select>
						</van-dropdown-item>
						<van-dropdown-item title="筛选" ref="item">
							<div class="div_1">
								<van-button class="another-btn">周榜</van-button>
								<van-button>月榜</van-button>
								<van-button>年榜</van-button>
							</div>
						</van-dropdown-item>
					</van-dropdown-menu>
				</div>
				<div style="margin: 0.3rem 0 0 0.3rem;">
					<ul class="ul_2">
						<li @click="details()">
							<img src="../../../public/img/10.png" alt="" style="width: 50%;" />
							<div class="div_2">
								<p style="font-size: 0.4rem;">知识图谱精品课</p>
								<p style="font-size: 0.35rem;color: #cccccc;">DataSir 31课时 258人学习</p>
								<div>
									<span class="div_3">2折</span>
									<span class="div_3">会员限时折扣</span>
								</div>
								<p style="font-size: 0.4rem;color: #f06165;font-weight: bold;">￥19.80</p>
							</div>
						</li>
						 <li class="another-li">
							<img src="../../../public/img/11.png" alt="" style="width: 50%;" />
							<div class="div_2">
								<p style="font-size: 0.4rem;">MATLAB图像处理案例</p>
								<p style="font-size: 0.35rem;color: #cccccc;">博云教育 74课时 11540...</p>
								<p style="font-size: 0.4rem;color: #f06165;font-weight: bold;">￥50.80</p>
							</div>
						</li>
						<li>
							<img src="../../../public/img/12.png" alt="" style="width: 50%;"/>
							<div class="div_2">
								<p style="font-size: 0.4rem;">深度学习(387集22小时9大模块彻底搞懂深度学习)</p>
								<p style="font-size: 0.35rem;color: #cccccc;">人民邮点出版社已... 398课时</p>
								<p style="font-size: 0.4rem;color: #f06165;font-weight: bold;">￥300</p>
							</div>
						</li>
						<li>
							<img src="../../../public/img/13.png" alt="" style="width: 50%;" />
							<div class="div_2">
								<p style="font-size: 0.4rem;">100分钟搞定数学基础</p>
								<p style="font-size: 0.35rem;color: #cccccc;">老羊快跑 4课时 59人学习</p>
								<div>
									<span class="div_3">5折</span>
									<span class="div_3">新课5折</span>
								</div>
								<p style="font-size: 0.4rem;color: #f06165;font-weight: bold;">￥2.50</p>
							</div>
						</li>
						<li>
							<img src="../../../public/img/14.png" alt="" style="width: 50%;" />
							<div class="div_2">
								<p style="font-size: 0.4rem;">WindowsYOLOv4目标检测实战：训练自己数据集</p>
								<p style="font-size: 0.35rem;color: #cccccc;">白勇 22课时 444人学习</p>
								<p style="font-size: 0.4rem;color: #f06165;font-weight: bold;">￥68.00</p>
							</div>
						</li>
					</ul>
				</div>
			</van-tab>
			<van-tab title="学习人数榜">
				<div>
					<van-dropdown-menu>
						<van-dropdown-item title="人工智能:全部" ref="item">
							<van-tree-select height="55vw" :items="items" :main-active-index.sync="active1">
								<template #content>
									<div v-if="active1 === 0">
										<ul class="ul_1">
											<li>深度学习</li>
											<li>机器学习</li>
											<li>自然语言处理</li>
											<li>图像识别处理</li>
											<li>机器视觉</li>
											<li>推荐算法</li>
											<li>量化交易</li>
											<li>其他</li>
										</ul>
									</div>
									<div v-if="active1 === 1">
										<ul class="ul_1">
											<li>全部</li>
											<li>区块链底层开发</li>
											<li>区块链算法原理</li>
											<li>DAPP智能合约开发</li>
											<li>EOS智能合约</li>
											<li>超级账本</li>
											<li>区块链投资</li>
											<li>其他</li>
										</ul>
									</div>
									<div v-if="active1 === 2">
										<ul class="ul_1">
											<li>全部</li>
											<li>Hadoop</li>
											<li>Spark</li>
											<li>Storm</li>
											<li>Hive</li>
											<li>Yarm</li>
											<li>数据分析</li>
											<li>数据挖掘</li>
										</ul>
									</div>
									<div v-if="active1 === 3">
										<ul class="ul_1">
											<li>全部</li>
											<li>Docker</li>
											<li>OpenStack</li>
											<li>虚拟化</li>
											<li>云平台</li>
											<li>Office 365</li>
											<li>云服务</li>
											<li>其他</li>
										</ul>
									</div>
									<div v-if="active1 === 4">
										<ul class="ul_1">
											<li>全部</li>
											<li>软考</li>
											<li>PMP</li>
											<li>华为认证</li>
											<li>思科认证</li>
											<li>红帽认证</li>
											<li>微软认证</li>
											<li>百度认证</li>
										</ul>
									</div>
									<div v-if="active1 === 5">
										<ul class="ul_1">
											<li>全部</li>
											<li>Python</li>
											<li>Java</li>
											<li>C/C++/C#</li>
											<li>PHP</li>
											<li>Net</li>
											<li>Ruby</li>
											<li>OC/Swift</li>
										</ul>
									</div>
									<div v-if="active1 === 6">
										<ul class="ul_1">
											<li>全部</li>
											<li>Html/CSS</li>
											<li>JavaScript</li>
											<li>Vue.js</li>
											<li>React.JS</li>
											<li>Angular</li>
											<li>Node.js</li>
											<li>jQuery</li>
										</ul>
									</div>
								</template>
							</van-tree-select>
						</van-dropdown-item>
						<van-dropdown-item title="筛选" ref="item">
							<div class="div_1">
								<van-button class="another-btn">周榜</van-button>
								<van-button>月榜</van-button>
								<van-button>年榜</van-button>
							</div>
						</van-dropdown-item>
					</van-dropdown-menu>
				</div>
				<div style="margin: 0.5rem 0 0 0.5rem;">
					<ul class="ul_2">
						<li>
							<img src="../../../public/img/20.png" />
							<div class="div_2">
								<p>人工智能-必备数学基础视频课程</p>
								<p>唐宇迪 128课时 25855人...</p>
								<p style="font-size: 0.4rem;color: #f06165;font-weight: bold;">￥298.80</p>
							</div>
						</li>
						<li style="line-height: 25px !important;">
							<img src="../../../public/img/21.png" />
							<div class="div_9">
								<p>Goole算法工程师易成带你深度学习数据结构</p>
								<p>唐宇迪 128课时 25855人...</p>
								<div>
									<span class="div_3">1折</span>
									<span class="div_3">会员限时折扣</span>
								</div>
								<p style="font-size: 0.4rem;color: #f06165;font-weight: bold;">￥298.80</p>
							</div>
						</li>
						<li style="line-height: 28px !important;">
							<img src="../../../public/img/22.png"/>
							<div class="div_9">
								<p>从零开始学Scrapy网络爬虫(14个项目实战实例...</p>
								<p>terry 55课时 2517人学习</p>
								<div>
									<span class="div_3">7折</span>
								</div>
								<p style="font-size: 0.4rem;color: #f06165;font-weight: bold;">￥21.00</p>
							</div>
						</li>
						<li>
							<img src="../../../public/img/23.png" />
							<div class="div_9">
								<p>YOLOv3目标检测：原理与源码解析</p>
								<p>白勇 39课时 1234人学习</p>
								<p style="font-size: 0.4rem;color: #000;font-weight: bold;">￥78.00</p>
							</div>
						</li>
						<li>
							<img src="../../../public/img/24.png"/>
							<div class="div_9">
								<p>OpenCV图像处理视频课程</p>
								<p>贾志刚 35课时 326565人学习</p>
								<p style="font-size: 0.4rem;color: #000;font-weight: bold;">￥99.00</p>
							</div>
						</li>
					</ul>
				</div>
			</van-tab>
			<van-tab title="课程受欢迎榜">
				<div>
					<van-dropdown-menu>
						<van-dropdown-item title="人工智能:全部" ref="item">
							<van-tree-select height="55vw" :items="items" :main-active-index.sync="active1">
								<template #content>
									<div v-if="active1 === 0">
										<ul class="ul_1">
											<li>深度学习</li>
											<li>机器学习</li>
											<li>自然语言处理</li>
											<li>图像识别处理</li>
											<li>机器视觉</li>
											<li>推荐算法</li>
											<li>量化交易</li>
											<li>其他</li>
										</ul>
									</div>
									<div v-if="active1 === 1">
										<ul class="ul_1">
											<li>全部</li>
											<li>区块链底层开发</li>
											<li>区块链算法原理</li>
											<li>DAPP智能合约开发</li>
										</ul>
									</div>
									<div v-if="active1 === 2">
										<ul class="ul_1">
											<li>全部</li>
											<li>Hadoop</li>
											<li>Spark</li>
											<li>Storm</li>
											<li>数据分析</li>
											<li>数据挖掘</li>
											<li>其他</li>
										</ul>
									</div>
									<div v-if="active1 === 3">
										<ul class="ul_1">
											<li>全部</li>
											<li>Docker</li>
											<li>OpenStack</li>
											<li>虚拟化</li>
											<li>云平台</li>
											<li>Office 365</li>
											<li>云服务</li>
											<li>其他</li>
										</ul>
									</div>
									<div v-if="active1 === 4">
										<ul class="ul_1">
											<li>全部</li>
											<li>软考</li>
											<li>PMP</li>
											<li>华为认证</li>
											<li>思科认证</li>
											<li>红帽认证</li>
											<li>微软认证</li>
											<li>百度认证</li>
										</ul>
									</div>
									<div v-if="active1 === 5">
										<ul class="ul_1">
											<li>全部</li>
											<li>Python</li>
											<li>Java</li>
											<li>C/C++/C#</li>
											<li>PHP</li>
											<li>Net</li>
											<li>Ruby</li>
											<li>OC/Swift</li>
										</ul>
									</div>
									<div v-if="active1 === 6">
										<ul class="ul_1">
											<li>全部</li>
											<li>Html/CSS</li>
											<li>JavaScript</li>
											<li>Vue.js</li>
											<li>React.JS</li>
											<li>Angular</li>
											<li>Node.js</li>
											<li>jQuery</li>
										</ul>
									</div>
								</template>
							</van-tree-select>
						</van-dropdown-item>
						<van-dropdown-item title="筛选" ref="item">
							<div class="div_1">
								<van-button class="another-btn">周榜</van-button>
								<van-button>月榜</van-button>
								<van-button>年榜</van-button>
							</div>
						</van-dropdown-item>
					</van-dropdown-menu>
				</div>
				<div style="margin: 0.5rem 0 0 0.5rem;">
					<ul class="ul_2">
						<li>
							<img src="../../../public/img/12.png" />
							<div class="div_9">
								<p>深度学习(387集22小时9分大模块彻底搞懂深度学习</p>
								<p>人民邮点出版社异...  398课时</p>
								<p style="font-size: 0.4rem;font-weight: bold;">￥300</p>
							</div>
						</li>
						<li style="line-height: 28px !important;">
							<img src="../../../public/img/21.png" />
							<div class="div_9">
								<p>Google算法工程师易成带你深度学习数据结构与算</p>
								<p>尹成 128课时 14073人...</p>
								<div>
									<span class="div_3">1折</span>
									<span class="div_3">会员限时折扣</span>
								</div>
								<p style="font-size: 0.4rem;color: #f06165;font-weight: bold;">￥298.80</p>
							</div>
						</li>
						<li>
							<img src="../../../public/img/20.png">
							<div class="div_9">
								<p>人工智能-必备数学基础视频课程</p>
								<p>唐宇迪 128课时 25855人...</p>
								<p style="font-size: 0.4rem;color: #f06165;font-weight: bold;">￥298.80</p>
							</div>
						</li>
						<li>
							<img src="../../../public/img/10.png"/>
							<div class="div_9">
								<p>知识图谱精品课</p>
								<p>DataSir 31课时 258人学习</p>
								<div>
									<span class="div_3">2折</span>
									<span class="div_3">会员限时折扣</span>
								</div>
								<p style="font-size: 0.4rem;color: #f06165;font-weight: bold;">￥19.80</p>
							</div>
						</li>
						<li>
							<img src="../../../public/img/24.png"/>
							<div class="div_9">
								<p>OpenCV图像处理视频课程</p>
								<p>贾志刚 35课时 326565人学习</p>
								<p style="font-size: 0.4rem;color: #000;">￥99.00</p>
							</div>
						</li>
					</ul>
				</div>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
export default {
	name: 'ranking',
	data() {
		return {
			items: [{ text: '人工智能' }, { text: '区链接' }, { text: '大数据' }, { text: '云计算' }, { text: '考试认证' }, { text: '后端开发' }, { text: '前端开发' }],
			active: 0,
			active1: 0
		}
	},
	methods:{
		onClickLeft(){
			this.$router.push("../home")
		},
		details(){
			this.$router.push("/dashuju")
		}
	}
}
</script>

<style>
	.van-nav-bar__title{
		font-size: 0.3rem;
		font-weight: bold;
	}
	.van-nav-bar .van-icon{
		font-size: 0.4rem;
		color: black;
	}
	.van-tabs--line .van-tabs__wrap{
		height: 0.75rem;
	}
	.van-dropdown-menu__title{
		font-size: 0.3rem;
	}
	.van-sidebar-item__text{
		padding: 0px 20px;
	}
	.van-dropdown-menu__bar{
		padding: 15px 0px !important;
	}
	.van-sidebar-item{
		line-height: 0.8rem;
		font-size: 0.35rem;
	}
	.van-tree-select{
		font-size: 0.35rem;
	}
</style>

<style scoped>
	div,a,p,span,i,img{
		padding: 0px;
		margin: 0px;
	}
	.ul_1 li {
		list-style: none;
		margin: 0.3rem 0 0 0.2rem;
	}
	.ul_2 img{
		float: left;
		margin-right: 15px;
		width: 50%;
	}
	.ul_2 li{
		line-height: 55px;
		margin-bottom: 20px;
	}
	.another-li{
		line-height: 70px !important;
	}
	.div_1 button{
		margin:20px;
		width: 140px;
		height: 50px;
		background-color: #f2f5fa;
		font-size: 0.28rem;
	}
	.div_2 p:first-of-type{
		font-size: 0.4rem;
	}
	.div_2 p:nth-of-type(2){
		font-size: 0.35rem;
		color: #cccccc;
	}
	.another-btn{
		background-color: #0086ff !important;
		color: white;
	}
	.ul_3 li {
		list-style: none;
		padding-top: 0.2rem;
	}
	.div_3{
		padding: 3px 5px;
		border: 2px #ea9b4e solid;
		border-radius: 0.1rem;
		font-size: 0.3rem;
		color: #ea9b4e;
		margin-right: 15px;
	}
		.div_9 p:first-of-type{
		font-size: 0.4rem;
	}
	.div_9 p:nth-of-type(2){
		font-size: 0.35rem;
		color: #cccccc;
	}
.div_9{
	line-height: 50px;
}
</style>
