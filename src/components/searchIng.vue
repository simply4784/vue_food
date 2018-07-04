// 搜索组件(鼠标焦点聚焦)： 父组件通过提供的props: title

<style scoped>
</style>

<template>
	<div class="searchbar_wrap">
		<div class="input-box">
			<input type="search" name="search" id="search" autofocus="autofocus" placeholder="请输入建筑物、楼栋、房屋、地址"/>
			<i class="weui_icon_search"></i>
			<a href="javascript:" class="weui_icon_clear"></a>
		</div>
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
		'gotoSearch': function(){
			localStorage.setItem('historyUrl', this.$route.path);
			this.$emit('gotoSearch');
		}
	}
}
</script>
