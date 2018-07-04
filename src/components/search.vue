// 搜索组件： 父组件通过提供的props: title

<style scoped>
.searchbar_wrap{
	height: 44px;
    padding: 8px 10px;
    box-sizing: border-box;
    background-color: #efeff4;
}
.search-text{
	text-align: center;
	color: #9b9b9b;
	background: #fff;
	line-height: 28px;
	font-size: 13px;
	position: relative;
}
.search-text .weui_icon_search:before{
	position: relative;
	left:-3px;
	top: -1px;
}
</style>

<template>
	<div class="searchbar_wrap"  @click="gotoSearch()">
		<div class="search-text">
			<i class="weui_icon_search"></i>{{title}}
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
			this.$emit('gotoSearch');
		}
	}
}
</script>
