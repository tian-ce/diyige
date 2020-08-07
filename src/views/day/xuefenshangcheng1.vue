<template>
	<!-- 学分商城1 -->
	<div id="main" style="position: relative;background-color: #f8f8f8;height: 20rem;">
		<div class="div-1">
			<van-nav-bar title="学分商城" left-text="返回" left-arrow @click-left="fanhui">
				<template #left>
					<van-icon name="arrow-left" size="22" />
				</template>
			</van-nav-bar>
		</div>
		<div class="div-2">
			<img src="../../../public/img/61.png" alt="" style="width: 100%;">
		</div>
		<div class="div-3" align="center" @click="dj1()">
			确认兑换
		</div>
	</div>
</template>

<script>
	export default {
		name:"xuefenshangcheng1",
		methods:{
			dj1(){
				alert("亲，您的学分不足，果断去赚学分兑换礼包吧！")
			},
			xuefenshangcheng(){
				this.$router.push("/xuefenshangcheng")
			},
			fanhui(){
				this.$router.push("/xuefenshangcheng")
			}
		}
	}
</script>

<style scoped>
	.div-2{
		background-color: #f6f6f6;
		margin: -0.2rem 0rem 0 -0.1rem;
	}
	.div-3{
		background-color: #cccccc;
		width: 37%;
		line-height: 1rem;
		height: 1rem;
		border-radius: 5rem;
		margin-left: 3rem;
		font-size: 0.3rem;
		color: #FFFFFF;
		text-align: center;
	}
</style>
