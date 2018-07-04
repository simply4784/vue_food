<style scoped>
</style>

<template>
	<div>
		<list-panel :listData="listData"></list-panel> <!-- 父组件，props传递数据 -->
	</div>
</template>

<script>
import listPanel from '../../components/listPanel'
import Mock from 'mockjs'
export default{
	components: {
		listPanel
	},
	data () {
	    return {
	       listData: []
	    }
	 },
	methods: {
		'getData': function(){
	 		this.$http.get('http://vuedemo/list/searchList').then(function(res) {
		 		if(res.status == 200){
		 			this.listData = res.body.data;
		 		}
		 	})
	 	}
	},
	created: function(){
		// 模拟接口及数据
		Mock.mock('http://vuedemo/list/searchList', 'get',{
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