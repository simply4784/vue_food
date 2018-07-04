// 菜单组件 

<style scoped>
.weui_navbar_item:after{
	content:'';
	display:none;
	posiiton:absolute;
}
.active{
	color:#23c78a;
	border-bottom: 3px solid #23c78a;
}
</style>

<template>
	<div class="weui_tab" id="tab3">
        <div class="weui_navbar" style="height:44px;">
        	<div class="weui_navbar_item" v-for="(item,index) in datas" v-bind:class="{weui_navbar_item: true, active: index == activeIndex}" v-on:click="toggleMenu(index)">{{item}}</div>
        </div>
    </div>
</template>

<script>

export default {
	props:['datas'],
	data () {
	    return {
	    	activeIndex:0,
	    }
	},
	methods: {
		toggleMenu: function(index){
			this.activeIndex = index;
			// 派发被点击的菜单的index
			 this.$emit('clickMenu', this.activeIndex)
		}
	}
}
</script>
