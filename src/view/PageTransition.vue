<template>
  <div>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
    beforeRouteUpdate (to, from, next) {
      let isBack = this.$router.isBack
      const toPath = to.path.substr(1);
      const fromPath = from.path.substr(1);
      if((fromPath == 'house' && (toPath =='people' || toPath == 'message')) || 
         (fromPath == 'people' && (toPath =='house' || toPath == 'message')) ||
         (fromPath == 'message' && (toPath =='people' || toPath == 'house'))){
        this.transitionName = 'fade'
      }else{
        if (isBack) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
        this.$router.isBack = false
      }
     
      next()
    }
  }
</script>

<style scoped>
  .child-view {
    position: absolute;
    width:100%;
    height:100%;
    transition: all .16s;
    -webkit-transition: all .16s;
  }
  .slide-left-enter, .slide-right-leave-active {
     opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(100%, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
