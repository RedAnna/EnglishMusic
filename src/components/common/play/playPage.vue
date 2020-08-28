<template>
  <div class="play-page">
    <playTab/>
    <router-view></router-view>
    <playNav />
    <pagePlay />
  </div>
</template>

<script>
import playTab from "./playPage/playTab"
import playNav from "./playPage/playNav"
import pagePlay from './playPage/pagePlay'
export default {
  components:{
    playTab,
    playNav,
    pagePlay
  }
}
</script>

<style scoped>
.play-page{
  z-index: 99999;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(100, 100, 100);
  color: #fff;
}
</style>