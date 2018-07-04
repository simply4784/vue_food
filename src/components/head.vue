
<style scoped>
  .back{
  	color: #fff;
  }
</style>

<template>
	<div class="weui_header">
		<a href="javascript:history.go(-1);" class="back icon icon-109 f-white" v-on:click="goBack()"><</a>
		<header v-on:click="goBack()">{{title}}</header>
	</div>	
</template>

<script>

export default {
	props:['title'],
	data () {
	    return {
	    	
	    }
	},
	methods: {
		'goBack': function(){
			this.$emit('goBack');
		}
	}
}
</script>


