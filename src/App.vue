<template>
  <div id="app">
    <leftside></leftside>
    <topmenu></topmenu>
    <mainContent></mainContent>
  </div>
</template>

<script>
import leftside from '@/components/leftside'
import mainContent from '@/components/mainContent'
import topmenu from '@/components/topmenu'

export default {
  name: 'App',
  components:{
    leftside,
    mainContent,
    topmenu
  }
}
</script>
<style>
body{margin: 0;font-family: -apple-system, "PingFang SC", "Hiragino Sans GB", Arial, "Microsoft YaHei", "Helvetica Neue", sans-serif;}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-left:180px;
}
@media screen and (max-width: 768px) {
    #app{padding-left: 0;}
}
</style>
