<template>
	<div>
		<van-tabbar v-model="active" route>
			<van-tabbar-item replace to="/home" icon="wap-home-o" name="home">
				首页
			</van-tabbar-item>
			<van-tabbar-item replace to="/rengongzhineng" icon="apps-o" name="course">
				课程
			</van-tabbar-item>
			<van-tabbar-item replace to="/study" icon="video-o" name="study" >
				学习
			</van-tabbar-item>
			<van-tabbar-item replace to="/Wode" icon="contact" name="mine" >
				我的
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				active:'home'
			}
		},
		methods:{
			home(){
				this.$router.push("/home")
			},
			mine(){
				this.$router.push("/Wode")
			},
			study(){
				this.$router.push("/study")
			},
			course(){
				this.$router.push("/rengongzhineng")
			}
		}
	}
</script>

<style>
	.van-tabbar-item__icon{
		font-size:40px !important;
	}
</style>

<style scoped>
	.van-tabbar{
		height: 0.9rem;
	}
</style>
