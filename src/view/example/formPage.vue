<style scoped>
	
</style>

<template>
	<div>
		<!-- 遍历出三个输入框 -->
		<v-input v-for="item in inputText" 
			:labelText="item.labelText" 
			:placeholderText="item.placeholderText" 
			:keyText="item.keyText" 
			@textInputChange="textInputChange">
		</v-input>
		<!-- 单选按钮 -->
		<v-radio :radioText="radioText" @radioChange="radioChange"></v-radio>
		<!-- 普通按钮 -->
		<v-button buttonText="提交" @btnClick="btnClick"></v-button>
	</div>
</template>

<script>
import vInput from '../../components/vInput'
import vRadio from '../../components/vRadio'
import vButton from '../../components/vButton'
	export default{
		components: {
			vInput,
			vRadio,
			vButton
		},
		data: function(){
			return {
				inputText:[{  //输入框渲染数据
					labelText: '输入框一',
					placeholderText: '提示文字一',
					keyText: 'textInput_1'
				},
				{
					labelText: '输入框二',
					placeholderText: '提示文字二',
					keyText: 'textInput_2'
				},
				{
					labelText: '输入框三',
					placeholderText: '提示文字三',
					keyText: 'textInput_3'
				}],
				radioText: [{  //单选框渲染数据
					'labelText': '男生',
					'value': 0
				},{
					'labelText': '女生',
					'value': 1
				}],
				sublimtJson: {}  // 保存表单数据
			}
		},
		methods: {
			'textInputChange': function(msg){
				this.sublimtJson[msg.keyText] = msg.value;
			},
			'radioChange': function(value){
				this.sublimtJson.radioValue = value;
			},
			'btnClick': function(){  //提交
				alert(JSON.stringify(this.sublimtJson))
			}
		}
	}
</script>