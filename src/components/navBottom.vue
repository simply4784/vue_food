// 底部导航
<style scoped>

</style>

<template>
	<div class="weui_tabbar " @click="switchPage">
          <router-link to="/house" class="weui_tabbar_item"  data-id="list">
            <div class="weui_tabbar_icon">
                <img src="/static/images/icon_nav_button.png" alt="">
            </div>
              <p class="weui_tabbar_label">房屋核查</p>
          </router-link>

          <router-link to="/people" class="weui_tabbar_item" data-id="people">
              <div class="weui_tabbar_icon">
                  <img src="/static/images/icon_nav_msg.png" alt="">
              </div>
              <p class="weui_tabbar_label">人口核查</p>
          </router-link>

          <router-link to="/message" class="weui_tabbar_item">
              <div class="weui_tabbar_icon">
                  <img src="/static/images/icon_nav_article.png" alt="">
              </div>
              <p class="weui_tabbar_label">事件上报</p>
          </router-link>
          <a href="javascript:;" class="weui_tabbar_item">
              <div class="weui_tabbar_icon">
                  <img src="/static/images/icon_nav_cell.png" alt="">
              </div>
              <p class="weui_tabbar_label">更多</p>
          </a>             
      </div>
</template>

<script>

export default {
  methods: {
    'switchPage': function(){

    }
  }
}
</script>


