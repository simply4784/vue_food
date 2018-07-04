export default {
	state: {
		totalPrice:0,
	},
	getters: {
		getTotal(state){
			return state.totalPrice;
		}
	},
	mutations: {  // 同步
		increment(state,price){
			state.totalPrice += price;
		},
		decrement(state, price){
			state.totalPrice -= price;
		}
	},
	actions: {  //异步
		increase(context, price){
			context.commit('increment',price);
		}
	}
}