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
</style>

<template>
  <scroller 
      :on-refresh="refresh"
      :on-infinite="infinite"> 

        <div class="updown-wrap" v-for="(item, index) in datas">
           <!--  <v-touch v-on:swipeleft ="onSwipeLeft(index)"
                    v-on:swiperight ="onSwiperight(index)"
                    v-on:panleft ="onPanLeft"
                    v-on:panright ="onPanRight"
                    v-on:panstart  ="onPanStart(index)"
                    v-on:panmove ="onPanMove"
                    v-on:panend ="onPanEnd"
                    v-on:panup ="onPanUp"
                    v-on:pandown ="onPanDown"> -->

            	<a href="javascript:void(0);" class="weui_media_box weui_media_appmsg list"  @click="gotoDetail()" :id="index" ref="list" :style="{left: currentId == index? moveLeft: 0}" >
                    <div class="weui_media_hd">
                        <img class="weui_media_appmsg_thumb" src="/static/images/house.png" alt="">
                    </div>
                    <div class="weui_media_bd">
                        <h4 class="weui_media_title">{{ item.hosueName }}</h4>
                        <div class="weui_media_desc">
                            <p class="tag-list">
                            	<span class="tag status">{{ item.hosueState }}</span>
                            	<span class="tag">{{ item.hosueAdress }}</span>
                            </p>
        					<p>{{ item.distance }}</p>
                        </div>
                    </div>
                    <div class="delete" ref="del" @click.stop="deleteList"><span>删除</span></div>
                </a>

            <!-- </v-touch> -->
        </div>

    </scroller>
</template>

<script>

export default {
	props:['datas','id'],
	data () {
	    return {
            index: -1,
            moveLeft: '0px',
            delWidth: 80
	    }
	},
    computed: {
        currentId: function(){
            return this.$store.getters.getId
        },
        isLoading: function(){  // 控制如果上拉/下拉，则不允许列表左右拖拽
             return this.$store.getters.getLoad
        }
    },
    methods: {
        gotoDetail: function(){
            this.$emit('gotoDetail');
        },
        move: function(msg){
            this.$nextTick( () => {
                const direction = msg.deltaX >0 ? 1: -1;
                if(direction == -1){  //向左滑
                    if(Math.abs(msg.deltaX) > this.delWidth){
                        this.moveLeft = this.delWidth*direction +'px';
                    }else if(Math.abs(msg.deltaX) < this.delWidth){
                         this.moveLeft = msg.deltaX +'px';
                    }
                }else{  //向右滑动
                    if(msg.deltaX> this.delWidth){
                        this.moveLeft =  0 +'px';
                    }else if(msg.deltaX < this.delWidth){
                        this.moveLeft = (msg.deltaX-this.delWidth) +'px';
                    }
                }
                this.$refs.list[this.index].style.left = this.moveLeft;
            })
            this.$store.dispatch('paned', this.index);
        },
        panMoveLeft: function(index){
            this.index = index;
            this.$nextTick( () => {
                this.$refs.list[this.index].style.left = -this.delWidth +'px';
            })
            this.$store.dispatch('paned', this.index);
        },
        panRecovery: function(index){
          /*  this.index = index;
            this.$nextTick(() => {
                    this.$refs.list[this.index].style.left = 0 +'px';
            })
            this.$store.dispatch('paned', this.index); */
        },
        onPanStart: function(index){  // 拖动开始
           this.index = index;
           this.$store.dispatch('paned', this.index);
        },
        onPanMove: function(msg){  //拖动过程
            // 解决： 上拉/下拉加载时候，有list被左右拖拽移动

            // delataX : 在X轴上偏移的距离
            // 注意： ref不能获取动态DOM元素，所以需要借助nextTick()确保DOM变化后再执行操作！！！！
            
            
        },
        onPanEnd: function(msg){  // 拖动结束
            // 注意： ref不能获取动态DOM元素，所以需要借助nextTick()确保DOM变化后再执行操作！！！！
            // panleft 或panright
            console.log(JSON.stringify(msg))
            if(!this.isLoading){
                this.$nextTick( () => {
                    const direction = msg.deltaX>0 ? 1: -1;
                    if(direction == -1){  //向左滑
                        this.moveLeft = -this.delWidth +'px';
                    }else{  //向右滑动
                        this.moveLeft = 0 +'px';
                    }
                    this.$refs.list[this.index].style.left = this.moveLeft;
                })
                this.$store.dispatch('paned', this.index); 
            }
            this.$store.dispatch('changeLoad', false);
        },
        onPanLeft: function(msg){  // 向左拖动
            if(!this.isLoading )
            this.move(msg);
        },
        onPanRight: function(msg){  // 向右拖动
            if(!this.isLoading )
            this.move(msg);
        },
        onSwipeLeft: function(index){  //快速向左滑动
          // this.panMoveLeft(index);
        },
        onSwiperight: function(index){  //快速向右滑动
           // this.panRecovery(index);
        },
        onPanUp:function(){
            this.$store.dispatch('clearPan');
            this.$store.dispatch('changeLoad', true);
        },
        onPanDown:function(){
            this.$store.dispatch('clearPan');
            this.$store.dispatch('changeLoad', true);
        },
        deleteList: function(){
            alert("删除成功")
        },
        'refresh': function(done){  //下拉刷新
            this.$store.dispatch('clearPan');
            this.$store.dispatch('changeLoad', true);
            this.$emit('refresh', done);
        },
        infinite (done) {   // 上拉加载
            this.$store.dispatch('clearPan');
            this.$store.dispatch('changeLoad', true);
            this.$emit('infinite',done);
        }
    }
}   
</script>


