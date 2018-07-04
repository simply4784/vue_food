<style>
	.text-input-component{
		padding: 10px 15px;
	    position: relative;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    align-items: center;
	    border-bottom: 1px solid #d9d9d9;
	}
	.text-input-component label{
		width: 80px;
	    word-wrap: break-word;
	    word-break: break-all;
	}
	.text-input-component input{
		-webkit-box-flex: 1;
	    -webkit-flex: 1;
	    flex: 1;
		width: 100%;
	    border: 0;
	    outline: 0;
	    -webkit-appearance: none;
	    background-color: transparent;
	    font-size: inherit;
	    color: inherit;
	    height: 1.41176471em;
	    line-height: 1.41176471;
	}
</style>

<template>
	<div class="text-input-component">
		<label>{{labelText}}</label>
		<input type="text" :placeholder="placeholderText" v-model="value" @change="listenChange" />
	</div>
</template>

<script>
	export default{
		props:['labelText', 'placeholderText', 'keyText'],
		data: function(){
			return {
				value: ''
			}
		},
		methods: {
			listenChange: function(){
				this.$emit('textInputChange', {keyText: this.keyText, value:this.value})
			}
		}
	}
</script>