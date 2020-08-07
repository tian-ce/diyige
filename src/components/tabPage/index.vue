<template>
	<div>
		<div class="top">
			<div class="top-left">
				<van-tabs v-model="tabName">
				<van-tab title="精选" name="jingxuan"></van-tab>
				<!-- <template>
					<router-link to="/zhuanti" tag="div">
						<van-tab title="专题" name="zhuanti"></van-tab>
					</router-link>
				</template> -->
				<div @click="zhuanti()">
					<van-tab title="专题" name="zhuanti"></van-tab>
				</div>
				<van-tab title="微职位" name="weizhiwei"></van-tab>
				</van-tabs>
			</div>
			<div class="top-right">
				<van-icon name="search"/>
				<van-icon name="clock-o" />
				<van-icon name="chat-o" />
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tabName:'jingxuan'
			}
		},
		methods:{
			zhuanti(){
				this.$router.push("/zhuanti")
			}
		}
	}
</script>


<style>
	.van-tab__text--ellipsis{
		font-size: 0.3rem;
		font-weight: bold;
	}
	.van-tabs__line{
		background-color: #0086ff !important;
	}
</style>

<style scoped>
	.top{
		background-color: white;
	}
	.top-left{
		display: inline-block;
	}
	.top-right{
		margin-left: 260px;
		display: inline-block;
		width: 3rem;
	}
	.top-right i{
		font-size: 37px;
		margin-left: 25px;
	}
	.van-tabs{
		width: 3.5rem;
	}
</style>
