<template>
	<!-- 查看全部头部 -->
	<div id="main">
		<div class="div_top">
			<van-icon name="arrow-left" size="0.6rem" class="text_1" @click="tiaozhuan()"/>
			<span style="font-size: 0.4rem;margin-left: 2rem;">51CTO博客，随你移动</span>
			<van-icon name="share" size="0.6rem" class="text_2"/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'top',
	methods:{
		tiaozhuan(){
			this.$router.go(-1)
		}
	}
};
</script>

<style scoped>
	*{
		padding: 0px;
		margin: 0px;
	}
	.div_top {
		margin-left: 0.25rem;
		margin-top: 0.2rem;
		margin-bottom: 0.1rem;
	}
	.text_1{
		vertical-align: middle;
	}
	.text_2{
		vertical-align: middle;
		margin-left: 2rem;
	}
</style>
