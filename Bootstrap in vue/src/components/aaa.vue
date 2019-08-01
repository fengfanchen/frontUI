<template>
  <div>我是aaa
    <button @click="back">点我返回</button>
  </div>

</template>

<script>
  export default {
    name: 'aaa',
    /*data () {
      return {
        msg: '哈哈'
      }
    },*/
    methods:{
      back(){
        this.$router.push('/')
      }
    }
  }
</script>
