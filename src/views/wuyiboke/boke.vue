<template>
	<div id="main">
		<top></top>
		<div class="div-1">
			<van-nav-bar title="" left-text="" left-arrow>
				<template #right>
					<van-icon name="search" size="18" />
				</template>
			</van-nav-bar>
		</div>
		<div class="div-2">
			<img src="../../../public/img/46.png" alt="" style="width: 100%;margin-top: 0.2rem;">
		</div>
		<div class="div-3">
			<div align="center"><img src="../../../public/img/47.png" alt="" style="width: 50%;margin-top: 2rem;"></div>
		</div>
		<dibu></dibu>
	</div>
</template>

<script>
import top from '../../components/top/top.vue';
import dibu from '../../components/dibu/dibu.vue';
export default {
	name: 'boke',
	components: {
		top,
		dibu
	}
};
</script>

<style scoped>
.div-1 {
	margin: 0.3rem 0 0 0;
}
.div-2{
	background-color: #FFFFFF;
	width: 100%;
	height: 4rem;
}
.div-3{
	background-color: #f5f5f5;
	width: 100%;
	height:11rem;
}
</style>
