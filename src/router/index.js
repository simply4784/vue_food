import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import people from '@/view/people'
import house from '@/view/house'
import message from '@/view/message'
import detail from '@/view/detail'
import search from '@/view/search'
import PageTransition from '@/view/PageTransition'
import listPage from '@/view/example/listPage'
import formPage from '@/view/example/formPage'
import performance from '@/view/example/performance'
import exampleHome from '@/view/exampleHome'
import dataBind from '@/view/example/dataBind/dataBind'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageTransition', 
      component: PageTransition, // 引入页面切换组件
      children: [{
        path: '/',
        name: 'housePage',
        component: house
      },
      {
        path: '/people',
        name: 'peoplePage',
        component: people
      },
      {
        path: '/message',
        name: 'messagePage',
        component: message
      },
       {
        path: '/detail',
        name: 'detailPage',
        component: detail
      },
      {
        path: '/search',
        name: 'searchPage',
        component: search
      },
       {
        path: '/listPage',
        name: 'listPage',
        component: listPage
      },{
        path: '/formPage',
        name: 'formPage',
        component: formPage
      },{
        path: '/performance',
        name: 'performance',
        component: performance
      },
      {
        path: '/exampleHome',
        name: 'exampleHome',
        component: exampleHome
      },
      {
        path: '/dataBind',
        name: 'dataBind',
        component: dataBind
      },
      {
        path: '/house',
        name: 'housePage',
        component: house
      }
      ]
    }
  ]
})
/*

export default new Router({
  routes: [
    {
      path: '/',
      name: 'listTest',
      component: house
    },
    {
      path: '/people',
      name: 'peopleVue',
      component: people
    },
    {
      path: '/house',
      name: 'houseVue',
      component: house
    },
    {
      path: '/message',
      name: 'messageVue',
      component: message
    },
     {
      path: '/detail',
      name: 'detailVue',
      component: detail
    },
    {
      path: '/search',
      name: 'searchVue',
      component: search
    }
  ]
})
*/