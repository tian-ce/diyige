<template>
	<div class="main">
		<div class="top">
			<van-nav-bar title="会员课程" left-arrow @click-left="onClickLeft">
				<template #right>
					<van-icon name="search" size="20" color="black"/>
				</template>
			</van-nav-bar>
		</div>
		<div>
			<van-dropdown-menu>
				<van-dropdown-item title="全部商品">
					<van-tree-select height="55vw" :items="items" :main-active-index.sync="active1">
						<template #content>
							<div v-if="active1 === 1" class="ul-one">
								<ul>
									<li>全部</li>
									<li>深度学习</li>
									<li>机器学习</li>
									<li>自然语言处理</li>
									<li>图像识别处理</li>
									<li>语音识别</li>
									<li>机器视觉</li>
									<li>推荐算法</li>
								</ul>
							</div>
							<div v-if="active1 === 2" class="ul-one">
								<ul>
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
							<div v-if="active1 === 3" class="ul-one">
								<ul>
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
							<div v-if="active1 === 4" class="ul-one">
								<ul>
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
							<div v-if="active1 === 5" class="ul-one">
								<ul>
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
							<div v-if="active1 === 6" class="ul-one">
								<ul>
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
							<div v-if="active1 === 7" class="ul-one">
								<ul>
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
				<van-dropdown-item title="综合排序" v-model="sort" :options="sortOption"></van-dropdown-item>
				<van-dropdown-item title="筛选" class="chose">
					<p>难度</p>
					<van-button class="another-btn">全部</van-button>
					<van-button>初级</van-button>
					<van-button>中级</van-button>
					<van-button>高级</van-button>
					<p>条件</p>
					<van-button>全部</van-button>
					<van-button>免费课程</van-button>
					<van-button class="another-btn">会员课程</van-button>
					<van-button>会员限免</van-button>
					<van-button>会员折扣</van-button>
					<van-divider style="margin: 10px 0px;"/>
					<div style="margin-bottom: 20px;">
						<van-button class="another-btn sure">确认</van-button>
					</div>
				</van-dropdown-item>
			</van-dropdown-menu>
		</div>
		<div class="content">
			<div class="same">
				<img src="../../../public/img/15.png">
				<div class="same-text">
					<p>JavaScript秘密花园</p>
					<p>
						<span>袁龙</span>
						<span>60课时</span>
						<span>138640人学习</span>
					</p>
					<p>会员免费</p>
				</div>
			</div>
			<div class="same">
				<img src="../../../public/img/16.png">
				<div class="same-text">
					<p>想学习框架得先学习JavaWeb附新闻系统实战</p>
					<p>
						<span>张晨光</span>
						<span>90课时</span>
						<span>917学习</span>
					</p>
					<p>会员免费</p>
				</div>
			</div>
			<div class="same">
				<img src="../../../public/img/17.png">
				<div class="same-text">
					<p>Linux高级架构师：企业线上服务器运维实战</p>
					<p>
						<span>高俊峰</span>
						<span>24课时</span>
						<span>2920学习</span>
					</p>
					<p>会员免费</p>
				</div>
			</div>
			<div class="same">
				<img src="../../../public/img/18.png">
				<div class="same-text">
					<p>Linux从入门到项目实战客车</p>
					<p>
						<span>陈魁</span>
						<span>61课时</span>
						<span>3488学习</span>
					</p>
					<p>会员免费</p>
				</div>
			</div>
			<div class="same">
				<img src="../../../public/img/19.png">
				<div class="same-text">
					<p>大数据高级工程师：Spark 2.X实战应用系列之正确理...</p>
					<p>
						<span>老汤</span>
						<span>18课时</span>
						<span>18144学习</span>
					</p>
					<p>会员免费</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"vipcourse",
		data(){
			return{
				activeKey:0,
				items: [{ text: '全部' },{ text: '人工智能' }, { text: '区链接' },{ text: '大数据' },
						{ text: '云计算' },{ text: '考试认证' },{ text: '后端开发' },{ text: '前端开发' }],
				active1:0,
				sort:'0',
				sortOption:[
					{text:'综合排序',value:0},
					{text:'人气最高',value:1},
					{text:'最新排序',value:2},
					{text:'好评率',value:3},
					{text:'价格由高到低',value:4},
					{text:'价格由低到高',value:5}
				]
			}
		},
		methods:{
			onClickLeft(){
				this.$router.push("../home")
			},
			onConfirm() {
			    this.$refs.item.toggle();
			}
		}
	}
</script>


<style>
	.van-nav-bar__title{
		font-size: 0.35rem;
		font-weight: bold;
	}
	.van-nav-bar .van-icon{
		font-size: 30px;
		color: black;
	}
	.van-dropdown-menu__title{
		font-size: 0.35rem;
		line-height: 1.2rem;
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
	.van-sidebar-item__text{
		padding: 0px 20px;
	}
	.van-cell{
		font-size: 0.30rem;
		line-height: 0.43rem;
	}
</style>

<style scoped>
	div,ul,li,a,p,span,i{
		padding: 0px;
		margin: 0px;
	}
	.top{
		padding: 10px 0px 0px 10px;
	}
	.ul-one{
		padding: 15px 0px;
	}
	.ul-one ul li{
		list-style: none;
		padding: 11px 15px;
	}
	.ul-one ul li:first-of-type{
		color: #0074D9;
	}
	.chose p{
		font-size: 0.35rem;
		margin: 20px 0px 0px 10px;
	}
	.chose button{
		margin-top: -40px;
		margin: 0px 20px;
		width: 140px;
		height: 50px;
		background-color: #f2f5fa;
		font-size: 0.28rem;
	}
	.another-btn{
		background-color: #0086ff !important;
		color: white;
	}
	.sure{
		margin-top: -20px !important;
		margin-left: 75% !important;
	}
	.same{
		padding: 25px 30px;
		margin: 15px 0px;
	}
	.same img{
		float: left;
		margin-right: 4%;
		width: 40%;
	}
	.same-text{
		line-height: 47px;
	}
	.same-text p:first-of-type{
		font-size: 0.4rem;
		font-weight: bold;
	}
	.same-text p:nth-of-type(2) span{
		font-size: 0.35rem;
		color: #999999;
		margin-right: 15px;
	}
	.same-text p:last-of-type{
		font-size: 0.45rem;
		font-weight: bold;
		color: #fc5b60;
	}
</style>
