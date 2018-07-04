<style scoped>
	.databind button, input{
		    display: inline-block;
	    line-height: 1;
	    white-space: nowrap;
	    background: #fff;
	    border: 1px solid #d8dce5;
	    border-color: #d8dce5;
	    color: #5a5e66;
	    box-sizing: border-box;
	    outline: none;
	    margin: 0;
	    transition: .1s;
	    font-weight: 500;
	    padding: 5px 10px;
	    font-size: 14px;
	    border-radius: 4px;
	}
	.databind button{
		padding: 10px 15px;
		margin-top: 20px;
		background:#409eff;
		color: #fff;
		cursor:pointer;
	}
</style>

<template>
	<div class="databind">
		<input type="text" v-model="textValue" placeholder="请输入文字" />
		<span>{{textValue}}</span>
		<br />
		<button  @click="changeValue">改变文字为"啦啦啦我变了"</button>
	</div>
	
</template>

<script>
	export default{
		data: function(){
			return {
				textValue: ''
			}
		},
		methods: {
			changeValue: function(){
				this.textValue = '啦啦啦我变了'
			}
		}
	}
</script>