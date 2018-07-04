
// 该文件的引入有问题
// require('../static/css/weuix.min.css');
require('../static/css/weui.css');
require('../static/css/index.css');

import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource';
import VueScroller from 'vue-scroller';
import VueTouch from 'vue-touch';
import Vuex from 'vuex'

Vue.use(VueScroller);
Vue.use(Resource);
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(Vuex)

// store 处理，暂时搁这！！
var store =  new Vuex.Store({
	state: {
		isLoading: false,
		index: -1
	},
	getters: {
		getLoad(state){
			return state.isLoading;
		},
		getId(state){
			return state.index;
		}
	},
	mutations: {  // 同步
		clearPan(state, index){
			state.index = index;
		},
		paned(state,index){
			state.index = index;
		},
		changeLoad(state,isLoad){
			state.isLoading = isLoad;
		}
	},
	actions: {  //异步
		clearPan(context,index){
			context.commit('clearPan', index);
		},
		paned(context,index){
			context.commit('paned', index);
		},
		changeLoad(context,isLoad){
			context.commit('changeLoad', isLoad);
		}
	}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

