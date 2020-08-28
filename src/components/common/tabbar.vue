<template>
  <div class="tabbar clearfix">
    <div class="tabbar-left"  @click="mineClick">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="tabbar-center">
      <h1>听歌学英语</h1>
    </div>
    <div class="tabbar-right" @click="searchClick">
      <a href="#"></a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tabShow: false
    }
  },
  methods:{
    mineClick(){
      this.tabShow = !this.tabShow
      this.$emit('mineClick' , this.tabShow)
    },
    searchClick(){
      this.$emit('searchClick')
    }
  }
};
</script>

<style scoped>
.tabbar {
  width: 100%;
  height: 100%;
}
.tabbar div {
  float: left;
}
.tabbar-left {
  width: 15%;
  height: 100%;
  position: relative;
}
.tabbar-left ul{
  width: 70%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
}
.tabbar-left ul li{
  width: 100%;
  height: 10%;
  background-color: white;
  margin-top: 15%;
}
.tabbar-left ul li:first-child{
  width: 50%;
  transform: translate(-15%, 100%) rotateZ(-45deg) ;
}
.tabbar-left ul li:last-child{
  width: 50%;
  transform: translate(-15%, -100%) rotateZ(45deg);
}
.tabbar-center {
  width: 70%;
  height: 100%;
  display: table;
}
.tabbar-center h1{
  display: table-cell;
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
}
.tabbar-right {
  width: 15%;
  height: 100%;
  position: relative;
}
.tabbar-right a{
  display: block;
  height: 70%;
  width: 70%;
  background-image: url("../../assets/tabbar/soushuo.svg");
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50% , -50%);
}
</style>  