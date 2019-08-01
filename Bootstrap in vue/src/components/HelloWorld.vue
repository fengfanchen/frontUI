<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="btn btn-primary" @click="go">点我跳转</button>
  </div>

</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '哈哈'
      }
    },
    methods:{
      go(){
        this.$router.push('/aaa')
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
