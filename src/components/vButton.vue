<style>
.button-component .btn{
	margin: 10px 15px;
	padding: 4px 14px;
	text-align: center;
	color: #fff;
	background: #1aad19;
	border-radius: 6px;
}
</style>

<template>
	<div class="button-component">
		<div class="btn" @click="btnClick">{{buttonText}}</div>
	</div>
</template>

<script>
	export default{
		props:['buttonText'],
		data: function(){
			return {
				
			}
		},
		methods: {
			'btnClick': function(){
				this.$emit('btnClick')
			}
		}
	}
</script>