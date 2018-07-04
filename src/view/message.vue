<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="container js_container" id="container">
    <car-list :resultList="resultList"></car-list>
    <nav-bottom></nav-bottom>
  </div>
</template>

<script>
import navBottom from '../components/navBottom.vue';
import carList from '../components/carList.vue';

export default {
  components: {
     navBottom,
     carList
    },
  data () {
    return {
      resultList: null,
      params: {
        "pageNo":1,
        "pageSize":10,
        "BEGINTIME":"2017-11-14 00:00:00",
        "ENDTIME":"2017-11-14 23:59:59",
        "KEYWORDS":""
      }
    }
  },
  created: function(){
    this.getData()
  },
  methods: {
    getData: function(){
      this.$http.post('/web/viid/parkingCar/carQuery',this.params).then(function(res) {
        if(res.body){
          this.resultList = res.body.data.records;
        }
      })
    }

  }
}
</script>
