<template>
  <div class="hello">
    <h2>MESSAGE LWBING</h2>
    <ul v-for='msg in msgs()'><li>{{ msg.name }}</li> </ul> 
    
  </div>
</template>

<script>
export default {
  name: 'messageVue',
  data () {
    return {
      msgs: function () {
        return [
          {'name': 'lwb'},
          {'name': 'wxk'}
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
