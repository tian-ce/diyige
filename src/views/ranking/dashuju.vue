<template>
	<div id="main">
		<div @click="onClickLeft"><img src="../../../public/img/25.png" alt="" style="width:100% ;" /></div>
		<div class="div_1">
			<van-tabs v-model="active">
				<van-tab title="介绍">
					<ul class="ul_1">
						<li><span style="font-size: 0.6rem;">知识图谱精品课</span></li>
						<li>
							<van-rate v-model="value" :size="25" color="#ee0a24" void-icon="star" void-color="#eee" style="width: 20%;" />
							<div style="display: inline-block;">
								<span style="color: #ee0a24;font-size: 0.3rem;padding-left: 1rem;">5.0</span>
								<span style="font-size: 0.3rem;padding-left: 0.2rem;color: #cccccc;">31课时</span>
								<span style="font-size: 0.3rem;padding-left: 0.2rem;color: #cccccc;">272人学习</span>
							</div>
						</li>
						<li><span style="color: #ee0a24;font-size: 0.5rem;">¥99.00</span></li>
					</ul>
					<div class="div_2">
						<div class="div_4">
							<span>VIP会员价：</span>
							<span style="color: #ee0a24;line-height: 52px;">¥19.80</span>
						</div>
						<div class="div_3"><span>开通VIP></span></div>
						<div class="div_5"><img src="../../../public/img/26.png" alt="" style="width: 65%;"></div>
						<div class="div_6">
							
						</div>
					</div>
				</van-tab>
				<van-tab title="目录">内容 2</van-tab>
				<van-tab title="评论">内容 3</van-tab>
				<van-tab title="推荐">内容 4</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
export default {
	name: 'dashuju',
	data() {
		return {
			active: 0,
			value: 5
		};
	},
	methods:{
		onClickLeft(){
			this.$router.push("/ranking")
		}
	}
};
</script>
<style>
.van-rate__item i {
	font-size: 0.3rem !important;
}
</style>
<style scoped>
div,
span,
a,
img,
p {
	margin: 0px;
	padding: 0px;
}
.ul_1 li {
	list-style: none;
}
.ul_1 {
	margin: 0.2rem 0 0 0.5rem;
}
.div_2 {
	width: 92%;
	background-color: #feefea;
	height: 1.2rem;
	margin: 0 auto;
	border-radius: 0.2rem;
	margin-top: 0.6rem;
}
.div_3 {
	width: 22%;
	height: 0.8rem;
	background-image: linear-gradient(#fc383c, #fa6c3c);
	color: #ffffff;
	float: right;
	font-size: 0.3rem;
	border-radius: 0.4rem;
	text-align: center;
	line-height: 60px;
	margin: 0.2rem 0.2rem 0 0;
}
.div_4 {
	font-size: 0.4rem;
	float: left;
	text-align: center;
	line-height: 60px;
	margin-left: 0.3rem;
}
.div_6{
	background-color: #ecf1f7;
	width: 100%;
}
</style>
