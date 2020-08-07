<template>
	<div id="main">
		<div class="div-1">
			<van-tabbar v-model="active">
			  <van-tabbar-item icon="home-o">首页</van-tabbar-item>
			  <van-tabbar-item icon="search">专栏</van-tabbar-item>
			  <van-tabbar-item icon="friends-o">专栏组合</van-tabbar-item>
			  <van-tabbar-item icon="setting-o">关注</van-tabbar-item>
			</van-tabbar>
		</div>
	</div>
</template>

<script>
	export default {
		name:"dibu",
		data(){
			return {
				active:0
			}
		}
	}
</script>

<style scoped>
	*{
		padding: 0px;
		margin: 0px;
	}
	.van-tabbar{
		height: 1rem;
	}
</style>
