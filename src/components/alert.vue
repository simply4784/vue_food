
<style scoped>
.dialog_mask{
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
    z-index:1000;
    background:rgba(0,0,0,0.6);
    text-align:center;
    font-size:0;
}
.dialog_mask:after{
    content:"";
    display:inline-block;
    height:100%;
    vertical-align:middle;
}
.dialog{
    border-radius:4px;
    font-size:16px;
    background:#fff;
    display:inline-block;
    vertical-align:middle;
    text-align:left;
    width:86%;
}
.dialog_title{
    padding:4px 15px 0px;
    text-align:center;
    margin:20px 0 7px;
}
.dialog_title p{
    font-size:14px;
    height:20px;
    line-height:20px;
    margin-top:2px;
    font-weight: 400;
    font-size: 17px;
}
.dialog_body{
    padding: 10px 14px 18px;
}
.dialog_body p{
	text-align:center;
	padding: 0 20px;
    font-size: 15px;
    color: #888;
    word-wrap: break-word;
    word-break: break-all;
}
.confirmBtn{
    border-top:1px solid #eae8e8;
    background:#fff;
    font-size:17px;
    font-weight:400;
    padding:0;
    text-align:center;
    height:42px;
    line-height:42px;
    width:100%;
    margin:0;
    color:#0bb20c;
    cursor:pointer;
}
.mask .dialog_title{
    text-align:center;
}
</style>

<template>
	 <div class="dialog_mask ng-hide" ng-show="receiveToggle">
        <div class="dialog">
            <div class="dialog_title">
                <p>{{title}}</p>
            </div>
            <div class="dialog_body">
              	<p>{{content}}</p>
            </div>
            <div class="dialog_btns">
                <div class="confirmBtn" @click="submit">确定</div>
            </div>
        </div>
    </div>	
</template>

<script>

export default {
	props:['title', 'content'],
	data () {
	    return {
	    	
	    }
	},
	methods: {
		'submit': function(){
			this.$emit('submit',this.content)
		}
	}
}
</script>


