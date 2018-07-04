<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import '/static/css/weui.min.css';
  @import '/static/css/weui.css';
  @import '/static/css/index.css';

</style>

<template>

  <div class="container js_container" id="container">
  	<div class="weui_header">
		<a href="javascript:history.go(-1);" class="back icon icon-109 f-white"></a>
		<header>定位：天河公园建工路4好</header>
	</div>	
	<div class="page list js_show">
		   		<div class="searchbar_wrap">
		   			<div class="search-text">
		   				<i class="weui_icon_search"></i>请输入建筑物、楼栋、房屋、地址
		   			</div>
		   		</div>
	        	<div class="weui-tab-wrap">
		        	<div class="weui_tab" style="height:44px;" id="tab3">
	    	            <div class="weui_navbar" style="height:44px;">
	    	                <div class="weui_navbar_item">全部</div>
	    	                <div class="weui_navbar_item">在核</div>
	    	                <div class="weui_navbar_item tab-cur">待核</div>
	    	                <div class="weui_navbar_item">已核</div>
	    	            </div>
	    	        </div>
	    	        <div class="weui-list-wrap">
	    	        	<div class="updown-wrap" v-for='msg in msgs()'>
		    	        	<a href="javascript:void(0);" class="weui_media_box weui_media_appmsg">
			                    <div class="weui_media_hd">
			                        <img class="weui_media_appmsg_thumb" src="/static/images/house.png" alt="">
			                    </div>
			                    <div class="weui_media_bd">
			                        <h4 class="weui_media_title">{{ msg.hosueName }}</h4>
			                        <div class="weui_media_desc">
				                        <p class="tag-list">
				                        	<span class="tag status">{{ msg.hosueState }}</span>
				                        	<span class="tag">{{ msg.hosueAdress }}</span>
				                        </p>
										<p>{{ msg.distance }}</p>
			                        </div>
			                    </div>
			                </a>
			                

	    	        	</div>
	    	        </div>
	        	</div>
	        </div>


  </div>
</template>

<script>

export default {

  	name: 'houseVue',
	data () {
	    return {
	      msgs: function () {
	        return [
	          {'hosueName': '佳都新太','hosueState': '在核','hosueAdress': '第十一网格 多体楼 建工路4号','distance':'90米'},
	          {'hosueName': '方圆E时光','hosueState': '在核','hosueAdress': '第十一网格 多体楼 科韵路5号','distance':'58米'}
	        ]
	      }
	    }
	  }

}


</script>


