<template>
  <div id="app">
    <router-view />
<!--    <div>{{res.data}}</div>-->
  </div>
</template>

<script>
  export default {
    // data () {
    //   return {
    //     res: 'asdfasdf'
    //   }
    // },
    // mounted () {
    //   this.axios.get('/screen/data').then((res) => {
    //     console.log(res)
    //     this.res = res
    //   })
    // }
  }
</script>

<style lang="scss">
  html, body, #app{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
