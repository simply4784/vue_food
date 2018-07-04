<style scoped>
     .listBox{
        position:relative;
    }
    .delete{
        width:80px;
        height:100%;
        background:red;
        color:#fff;
        text-align:center;
        position:absolute;
        right:-80px;
        top:0;
    }
    .delete span{
        display:block;
        fontsize: 20px;
        height:30px;
        line-height:30px;
        position: relative;
        top:50%;
        transform:translateY(-50%); 
        -webkit-transform:translateY(-50%); 
        -moz-transform:translateY(-50%); 
        -ms-transform:translateY(-50%); 
        -o-transform:translateY(-50%); 
    }
    .list{
        position:relative;
        left:0px;
    }
    .box,left{
        left:-80px;
    }
    .recovery{
        left:0;
    }
    .weui_media_box.weui_media_appmsg .weui_media_appmsg_thumb {
      width: 100%;
      max-height: 100%;
      vertical-align: middle;
  }
</style>

<template>
  <scroller > 

     <div class="updown-wrap" v-for="(item, index) in resultList">
              <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg list" >
                    <div class="weui_media_hd">
                        <img class="weui_media_appmsg_thumb" :src="item.PIC_VEHICLE" alt="">
                    </div>
                    <div class="weui_media_bd">
                        <h4 class="weui_media_title">{{ item.PLATE_NUM }}</h4>
                        <div class="weui_media_desc">
                            <p class="tag-list">
                              <span class="tag status"></span>
                              <span class="tag">{{ item.CAP_TIME }}</span>
                            </p>
                  <p>{{ item.DEVICE_ADDR }}</p>
                        </div>
                    </div>
                    
                </a>
        </div>
    </scroller>
</template>

<script>

export default {
	props:['resultList'],
	data () {
	    return {
            index: -1,
            moveLeft: '0px',
            delWidth: 80
	    }
	},
    methods: {

    }
}   
</script>


