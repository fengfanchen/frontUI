<template>
  <div>
    <div id="draw-shapes"></div>
  </div>
</template>

<script>
  import "JS/two"
  import "JS/mouse"
  import {drawGraphic} from "JS/draw";

  export default {
  name: 'HelloWorld',
  mounted(){

    drawGraphic();
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>

</style>
