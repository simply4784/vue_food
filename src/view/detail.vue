// 首页列表的详情页

<style scoped>
</style>

<template>
	<div class="container js_container" id="container">
  		<page-head title="定位：天河公园建工路4号" @goBack="goBack"></page-head>
		 <div class="page">
		 	<div class="weui_cells weui_cells_access">
		 		<form-list title="整栋名称">
		 			<p class="cell-name"></p>
		 			<p class="detail"><span class="tag">待核</span></p>
		 		</form-list>
		 		<form-list title="所属网络">
		 			<p class="cell-name">第十三网格</p>
		 		</form-list>
		 		<form-list title="所属建筑">
		 			<p class="cell-name">景湖春天大厦</p>
		 		</form-list>
		 		<form-list title="标准地址">
		 			<p class="cell-name">广州市天河区员村街三横路66号景湖春天大厦</p>
		 		</form-list>
		 		<form-list title="建筑名称">
		 			<p class="cell-name">景湖春天大厦</p>
		 		</form-list>
		 		<form-list title="编码">
		 			<p class="cell-name">4413521460</p>
		 		</form-list>
		 		<form-list title="类型">
		 			<p class="cell-name">单体楼</p>
		 		</form-list>
		 		<form-list title="图片">
		 			<p class="cell-name">
                		<img class="weui_media_appmsg_thumb" src="../../static/images/house.png" alt="">
                		<img class="weui_media_appmsg_thumb" src="../../static/images/house.png" alt="">
                		<img class="weui_media_appmsg_thumb" src="../../static/images/house.png" alt="">
                	</p>
		 		</form-list>
		 	</div>
		 </div>
    </div>
</template>

<script>
import pageHead from '../components/head.vue';
import formList from '../components/formList.vue';
import Mock from 'mockjs'

export default {
	components: {
  		pageHead,
  		formList
  	},
	data () {
	    return {
	    }
	},
	methods: {
		'goBack': function(){
			// window.history.go(-1);
			this.$router.go();
		}
	},
	created: function () {
		// 模拟获取表单数据的接口
		Mock.mock('http://vuedemo/detail', 'get',{
			"data":{
				'roomname': '@word()',
	    		'alias': 'A-315',
	    		'floor': '三层',
	    		'attribute': '自住房',
	    		'owner': '张三',
	    		'tel':'',
	    		'address|1-3': ['../../static/images/house.png']
			},
		});

		// 获取更新表单数据的接口

	 }
}
</script>


