<template>
  <div class="play-wrapper" >
    <router-link to="/playPage">
      <div class="play-img">
        <img src="../../../assets/play/1.jpg" />
      </div>
      <div class="play-title" to="/playPage">
        <div>
          <h2>Going Home</h2>
          <p>sophine</p>
        </div>
      </div>
    </router-link>
    <div class="play-btn" @click="PlayBtn">
      <img src="../../../assets/play/play.svg" alt="" srcset="">
    </div>
    <div class="play-list">
      <img src="../../../assets/play/list.svg" />
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isplay: false,//播放
    }
  },
  methods:{
    PlayBtn(){
      this.isPlay = !this.isPlay
    }
  }
}
</script>

<style scoped>
.play-wrapper div{
  float: left;
  color: black;
}
.play-img,
.play-btn,
.play-list{
  width: 20%;
  height: 100%;
  position: relative;
}
.play-img img,
.play-btn img,
.play-list img{
  height: 85%;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate( -50% ,-50%);
}
.play-title{
  width: 40%;
  height: 100%;
  position: relative;
}
.play-title > div{
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate( -50% ,-50%);
}
.play-title h2{
  font-size: 18px;
}
.play-title p{
  font-size: 16px;
}
.play-btn img {
  height: 70%;
}
.play-list img{
  height: 70%;
  border-radius: 0;
}
</style>