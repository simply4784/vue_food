<style>
.radio-component input{
	width: 14px;
	height: 14px;
	vertical-align: middle;
}
.radio-component .radio-cell{
	display: inline-block;
	margin-right: 20px;
	padding: 10px 15px;
}
</style>

<template>
	<div class="radio-component">
		<div v-for="item in radioText" class="radio-cell">
			<input type="radio" v-model="radioValue" :value="item.value" @change="radioChange"/>
			<label>{{item.labelText}}</label>
		</div>
	</div>
</template>

<script>
	export default{
		props:['radioText'],
		data: function(){
			return {
				radioValue: false
			}
		},
		methods: {
			'radioChange': function(){
				this.$emit('radioChange', this.radioValue)
			}
		}
	}
</script>