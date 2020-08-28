<template>
    <div class="pt-content">
      <div class="pt-header">
        <div class="pth-left">
          <img src="@/assets/play/1.jpg">
        </div>
        <div class="pth-right">
          <p>Going Home</p>
          <p>歌手：kkkk</p>
          <p>播音：leo</p>
        </div>
      </div>
      <div class="pt-body">
        <p>内容概要</p>
        <p>使用场景:在项目开发过程中经常需要引入各种文件,例img,css,js等,我们可以在vue-cli中给不同目录设置别名,方便我们使用
2.vue-cli 2x 配置 // 在 webpack.base.config.js中的 ...
3.vue-cli 3x 配置 // 在根目录下创建vue.config.js var ...</p>
      </div>
    </div>

</template>

<script>
import playTab from "./playTab.vue"
import playNav from "./playNav"
export default {
  components:{
    playTab,
    playNav
  }
}
</script>

<style scoped>

.pt-content{
  height: 76%;
  width: 92%;
  margin: 0 auto;
  overflow: scroll;
  font-size: 0.5rem;
}
.pt-content::-webkit-scrollbar{
  display: none;
}
.pt-header{
  height: 7.5rem;
}
.pth-left{
  float: left;
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
}
.pth-left img{
  width: 5rem;
  height: 5rem;
}
.pth-right{
  float: left;
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.5rem;
}
.pth-right p:first-child,
.pt-body p:first-child{
  font-size: 1rem;
  color:#1296db;
}
.pt-body p:first-child{
  margin: 10px 0;
}
.pt-body{
  line-height: 1.5rem;
}
</style>