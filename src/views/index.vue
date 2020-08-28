<template>
  <div class="index" >
    <div id="nav">
      <tabbar @mineClick="getShow"
              @searchClick="getSearch"/>
    </div>
    <nav-tab />
    <mine :isShow="mineShow" />
    <router-view></router-view>
    <play id="play"/>
  </div>
</template>

<script>
import mine from "./mine/mine.vue";
import commentary from "./commentary/commentary.vue";
import tabbar from "../components/common/tabbar.vue";
import play from "../components/common/play/play.vue";
import navTab from "../components/common/navTab.vue";

export default {
  data(){
    return{
      mineShow: false
    }
  },
  components: {
    mine,
    commentary,
    tabbar,
    play,
    navTab,
  },
  methods:{
    getShow(tabShow){
      this.mineShow = tabShow
    },
    getSearch(){
      console.log("搜索")
    }
  }
};
</script>

<style scoped>
.index{
  height: 100vh;
  position: relative;
  left: 0;
  right: 0;
  font-size: 16px;
}
#nav {
  height: 8%;
  color: white;
  background-color: rgb(0, 150, 255);
}
#play {
  position: absolute;
  top: 90%;
  bottom: 0px;
  left: 0;
  right: 0;
  box-shadow: 0 0 10px 0 gray;
}
</style>