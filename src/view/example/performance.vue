<style scoped>
	li{
		display: inline-block;
		width: 40px;
		height: 40px;
		background: #555;
		color:#fff;
	}
	body,div,ul{
		padding:0;
		margin:0;
	}
</style>

<template>
	<div>
		<ul>
			<li v-for="item in listDatas">{{item}}</li>
		</ul>
		<button @click="start">开始</button>
	</div>
	
</template>

<script>
let array = [];
let i = 0;
export default{
	data () {
	    return {
	        listDatas: []
	    }
	 },
	methods: {
		intervalFun: function(){
			this.listDatas = array;
			clearInterval(timer);
			var timer = setInterval(function(){
				if(i >= 300){
					array.splice(0,1)
				}
				array.push(i)
				i++;
			},0);
		},
		start: function(){
			this.intervalFun();
		}
	}
}
</script>