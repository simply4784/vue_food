<style scoped>

</style>

<template>
    <div>
        <div v-for="(item,index) in listData" key="index" class="search-result-wrap">
            <p class="search-title">{{item.name}}</p>
            <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg">
                <div class="weui_media_hd">
                    <img class="weui_media_appmsg_thumb" :src="item.image" alt="">
                </div>
                <div class="weui_media_bd">
                    <h4 class="weui_media_title">{{item.title}}</h4>
                    <div class="weui_media_desc">
                        <p class="tag-list">
                            <span :class="{ tag: true, 'status': index==0 }" v-for="(i,index) in item.tags" >{{i}}</span>
                        </p>
                        <p>0米</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
	props:['listData'],
    methods: {
    },
    data () {
        return {}
    }
}
</script>


