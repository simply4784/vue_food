<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div class="container js_container" id="container">
  	<page-head title="定位：天河公园建工路4号" @goBack="goBack"></page-head>
	  <div class="page list js_show">
  		<search title="请输入建筑物、整栋、房屋、地址" @gotoSearch="gotoSearch"></search>
  		<div class="weui-tab-wrap">

  			<toggle-menu :datas="menuTitle" @clickMenu="clickMenu"></toggle-menu>
  
  			<div class="weui-list-wrap">
  				<list :datas="listDatas" @gotoDetail="gotoDetail" @infinite="infinite" @refresh="refresh"></list>
  			</div>
  		</div>
  	</div>
  	<nav-bottom></nav-bottom>
  </div>
</template>

<script>

import pageHead from '../components/head.vue';
import search from '../components/search.vue';
import toggleMenu from '../components/toggleMenu.vue';
import list from '../components/list.vue';
import navBottom from '../components/navBottom.vue';
import Mock from 'mockjs'

export default {
  	components: {
  		pageHead,
  		search,
  		toggleMenu,
  		list,
  		navBottom
  	},
	data () {
	    return {
	        menuTitle: ['全部', '在核', '待核', '已核'],
	        listDatas: []
	    }
	 },
	 methods: {
	 	'clickMenu': function(index){
	 		// 对接后台接口，加载不同列表的数据
	 		switch(index){
	 			case 0:		this.getData();		break;
	 			case 1:		this.getData();		break;
	 			case 2:		this.getData();		break;
	 			case 3:		this.getData();		break;
	 		}
	 	},
	 	'gotoSearch': function(){
	 		this.$router.push({ path: '/search' })
	 	},
	 	'gotoDetail': function(){
	 		this.$router.push({ path: '/detail' })
	 	},
	 	'refresh': function(done){	//下拉刷新
	 		clearTimeout(timer)
	 		var timer = setTimeout(() => {
	           this.loadData();
	           done();
	        }, 1500);
	 	},
	 	infinite: function(done) {	// 上拉加载
	 	    clearTimeout(timer)
	 		var timer = setTimeout(() => {
	           this.loadData();
	           done();
	        }, 1500);
	     },
	 	'goBack': function(){

	 	},
	 	getData: function(){
	 		this.$http.get('http://vuedemo/houseList').then(function(res) {
		 		if(res.status == 200){
		 			this.listDatas = res.body.data;
		 		}
		 	})
	 	},
	 	loadData: function(){
	 		Mock.mock('http://vuedemo/houseList/load', 'get',{
				"data|5":[{
					"hosueName" : '佳都',
					"hosueState" : '在核',
					"hosueAdress" : "@city(true)",
					"distance" : '100米'
				}],
			});
			this.$http.get('http://vuedemo/houseList/load').then(function(res) {
		 		if(res.status == 200){
		 			this.listDatas = this.listDatas.concat(res.body.data);
		 			this.$store.dispatch('changeLoad', false);
		 		}
		 	})
	 	}
	 },
	mounted() {
      this.top = 1
      this.bottom = 20
    },
	created: function() {
		// 模拟接口及数据
		Mock.mock('http://vuedemo/houseList', 'get',{
			"data|5":[{
				"hosueName" : '佳都',
				"hosueState" : '在核',
				"hosueAdress" : "@city(true)",
				"distance" : '100米'
			}],
		});

		// 对接接口
		this.getData();
	}
}


</script>


