// 搜索页面

<style scoped>
</style>

<template>
	<div class="container js_container" id="container">
  		<page-head title="定位：天河公园建工路4号" @goBack="goBack"></page-head>
		 <div class="page">
		 	<searching title="请输入建筑物、整栋、房屋、地址"></searching>
		 	<div class="weui-list-wrap">
			 	<scroller 
					  :on-refresh="refresh"
					  :on-infinite="infinite"> 
			 		<list-panel :listData="listData"  @gotoDetail="gotoDetail"></list-panel>
			 	</scroller>
		 	</div>
		 </div>
		 <nav-bottom></nav-bottom>
    </div>
</template>

<script>
import pageHead from '../components/head.vue';
import searching from '../components/searching.vue';
import listPanel from '../components/listPanel.vue';
import navBottom from '../components/navBottom.vue';
import Mock from 'mockjs'

export default {
	components: {
  		pageHead,
  		searching,
  		listPanel,
  		navBottom
  	},
	data () {
	    return {
	    	listData: []
	    }
	},
	methods: {
		'goBack': function(historyUrl){
			// window.history.go(-1);
			this.$router.go();
		},
		'gotoDetail': function(){
	 		this.$router.push({ path: '/detail' })
	 	},
	 	'getData': function(){
	 		this.$http.get('http://vuedemo/searchList').then(function(res) {
		 		if(res.status == 200){
		 			this.listData = res.body.data;
		 		}
		 	})
	 	},
	 	'refresh': function(done){
	 		clearTimeout(timer)
	 		var timer = setTimeout(() => {
	          var start = this.top - 1
	          this.getData();
	          this.top = this.top - 10
	          done()
	        }, 1500)
	 	},
	 	infinite (done) {
	 		clearTimeout(timer)
	 		var timer = setTimeout(() => {
	          var start = this.bottom + 1
	          // 此处模拟对接后台接口
	          for (var i = start; i < start + 5; i++) {
	            this.listData.push({
	            	'name': '建筑物',
		    		'image': '../../static/images/house.png',
		    		'title': 'dddd',
		    		'tags': ['在核','ddd','ddd']
	            })
	          }
	          this.bottom = this.bottom + 10
	          done()
	        }, 1500)
	     },
	},
	mounted() {
      this.top = 1
      this.bottom = 20
    },
	created: function () {
		// 模拟接口及数据
		Mock.mock('http://vuedemo/searchList', 'get',{
			"data|5":[{
				'name': '@word()',
	    		'image': '../../static/images/house.png',
	    		'title': '@word()',
	    		'tags': ['在核','@word()', '@word()']
			}],
		});

		this.getData()
	 }
}
</script>

