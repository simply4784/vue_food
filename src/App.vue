<template>
  <div id="app">
    <keep-alive>
      <transition :name="transitionName" mode="in-out">
       <router-view></router-view>
      </transition>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      transitionName: 'fade'
    }
  }
}
</script>

<style>
#app {
  width:100%;
  height:100%;
}


</style>