<template>
  <div class="mine">
    <div class="mine-header">
      <div class="left">
        <img src="../../assets/mine/m.jpg" alt="head">
      </div>
      <div class="right">
        <p>瓶子里的秋天</p>
        <table border="0">
          <tr>
            <td>收藏：0</td>
            <td>关注：0</td>
          </tr>
          <tr>
            <td>粉丝：0</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>

    <div class="mine-body">
      <ul>
        <li><i><img src="../../assets/mine/qiandao.svg" alt=""></i>签到<span></span></li>
        <li><i><img src="../../assets/mine/xiaoxi1.svg" alt=""></i>消息<span></span></li>
        <li><i><img src="../../assets/mine/faxian.svg" alt=""></i>发现<span></span></li>
        <li><i><img src="../../assets/mine/gerenzhongxin.svg" alt=""></i>个人中心<span></span></li>
        <li><i><img src="../../assets/mine/settings.svg" alt=""></i>设置<span></span></li>
        <li><i><img src="../../assets/mine/yejian.svg" alt=""></i>夜间模式<span></span></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  props:{
    isShow: false
  },
  watch:{
    'isShow': function(){
      var mine = document.getElementsByClassName("mine")[0]
      // if(this.isShow){
      //    mine.style.transform = "translateX(0)"
      // }else{
      //   mine.style.transform = "translateX(-100%)"
      // }
      this.isShow ? mine.style.transform = "translateX(0)" : mine.style.transform = "translateX(-100%)"
    }
  },
  components:{
  }
}
</script>

<style scoped>
.mine{
  height: 92%;
  width: 75%;
  border-right: grey 1px solid;
  position: absolute;
  left: 0;
  top: 8%;
  bottom: 0;
  background-color: white;
  transition: all .3s ease-in-out;
  transform: translateX(-100%);
  z-index: 9999;
}
.mine-header{
  height: 15%;
  border-bottom: grey 1px solid;
}
.mine-header .left{
  width: 35%;
  height: 100%;
  float: left;
  position: relative;
}
.mine-header .left img{
  height: 70%;
  border-radius: 50%;
  border: solid 1px rgb(0,150,255);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.mine-header .right{
  float: left;
  text-align: left;
}
.mine-header p{
  margin-top: 10%;
  font-size: 16px;
  line-height: 25px;
  color: rgb(0,150,255);
}
.mine-header table{
  font-size: 12px;
  color: #2c2c2c;
}
.mine-header tr td{
  padding-right: 15px;
}

.mine-body{
  height: 85%;
}
.mine-body ul li{
  font-size: 14px;
  text-align: left;
  padding: 10px 0px 10px 10px;
  position: relative;
}
.mine-body i{
  display: inline-block;
  font-style: normal;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 5px;
  margin-bottom: 3px;
}
.mine-body i img{
  width: 100%;
  height: 100%;
}
.mine-body ul li span{
  background-image: url("../../assets/mine/you.svg");
  background-size: 15px;
  display: inline-block;
  width: 15px;
  height: 15px;
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
}
</style>