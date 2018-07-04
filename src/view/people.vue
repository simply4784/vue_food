// 人口核查页面

<style scoped>
	.img{
		margin-right:4px;
	}
</style>

<template>
	<div class="container js_container" id="container">
  		<page-head title="返回" @goBack="goBack"></page-head>
		 <div class="page">
		 	<div class="weui_cells weui_cells_access">
		 		<form-list title="房间名称">
		 			<p class="cell-name">{{listData.roomname}}</p>
		 			<span class="required">*</span>
		 		</form-list>
		 		<form-list title="别名">
		 			<p class="cell-name">{{listData.alias}}</p>
		 			<span class="required">*</span>
		 		</form-list>
		 		<form-list title="楼层">
		 			<p class="cell-name">{{listData.floor}}</p>
		 			<span class="required">*</span>
		 		</form-list>
		 		<form-list title="属性">
		 			<p class="cell-name">{{listData.attribute}}</p>
		 			<span class="required">*</span>
		 		</form-list>
		 		<form-list title="业主">
		 			<p class="cell-name">{{listData.alias}}</p>
		 			<span class="required">*</span>
		 		</form-list>
		 		<form-list title="联系电话">
		 			<p class="cell-name">
                		<input type="tel" name="telephone" class="tele" v-model="listData.tel">
                	</p>
                	<span class="required">*</span>
		 		</form-list>
		 		<form-list title="标准地址">
		 			<p class="cell-name">
                		<img class="weui_media_appmsg_thumb img" :src="item" alt="" v-for="(item, index) in listData.address" key="index">
                	</p>
		 		</form-list>
		 		<a href="javascript:;" class="weui_btn weui_btn_disabled weui_btn_default" v-if="!completed" @click="unAdd">确认新增</a>
		 		<a href="javascript:;" class="weui_btn  weui_btn_primary"  @click="addCompleted" v-else>已新增</a>
		 	</div>
		 </div>

		 <alert title="提示" content="联系方式不能为空！" v-show="showRequired" @submit="submit">
		 </alert>
		 <alert title="提示" content="新增成功!" v-show="showCompleted" @submit="submit">
		 </alert>
		 <nav-bottom></nav-bottom>
    </div>
</template>

<script>
import pageHead from '../components/head.vue';
import formList from '../components/formList.vue';
import navBottom from '../components/navBottom.vue';
import alert from '../components/alert.vue';
import Mock from 'mockjs'

export default {
	components: {
  		pageHead,
  		formList,
  		navBottom,
  		alert
  	},
	data () {
	    return {
	    	listData: {},
	    	completed: false,
	    	showRequired: false,
	    	showCompleted: false
	    }
	},
	methods: {
		'goBack': function(historyUrl){
			this.$router.go() 
		},
		'allFalse': function(){
			this.showRequired = false;
 			this.showCompleted = false;
 			this.completed = false;
		},
		'getData': function(){
	 		this.$http.get('http://vuedemo/people/list').then(function(res) {
		 		if(res.status == 200){
		 			this.listData = res.body.data;
		 			if(this.listData.tel != ''){
		 				this.completed = true;
		 			}
		 		}
		 	})
	 	},
	 	'unAdd': function(){  // 点击灰色的“确认新增”按钮
	 		if(this.listData.tel == ''){
	 			this.allFalse();
	 			this.showRequired = true;
	 		}else{
	 			this.allFalse();
	 			this.showCompleted = true;
	 			this.completed = true;
	 		}

	 	},
	 	'addCompleted':function(){  // 点击绿色的"确认新增按钮"
	 		if(this.listData.tel == ''){
	 			this.allFalse();
	 			this.showRequired = true;
	 		}

	 	},
	 	'submit': function(msg){  // 监听alert组件的 "submit"事件
	 		if(msg == '联系方式不能为空！'){
	 			this.showRequired = false;
	 		}else if(msg == '新增成功!'){
	 			this.showCompleted = false;
	 		}
	 	}
	},
	created: function () {
		// 模拟获取表单数据的接口
		Mock.mock('http://vuedemo/people/list', 'get',{
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

		this.getData();
	 }
}
</script>


