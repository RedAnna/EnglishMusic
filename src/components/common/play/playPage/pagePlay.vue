<template>
  <div class="page-play">
    <div class="progress-bar">
      <span>02:38</span>
      <div class="progress">
        <div>
          <i></i>
        </div>
      </div>
      <span>05:14</span>
    </div>
    <div class="play-bar">
      <img src="@/assets/play/previous.svg" alt="" @click="imgPrevious"/>
      <img src="@/assets/play/play.svg" alt=""  @click="imgPlay"/>
      <img src="@/assets/play/next.svg" alt=""  @click="imgNext"/>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    imgPrevious(){
      alert('imgPrevious')
    },
    imgPlay(){
      alert('imgPlay')
    },
    imgNext(){
      alert('imgNext')
    }
  }
}
</script>

<style scoped>
.page-play{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 88%;
}
.progress-bar{
  width: 92%;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
}
.progress-bar span{
  width: 15%;
}

.progress-bar span:last-child{
  text-align: right;
}
.progress-bar > div{
  width: 70%;
  height: 8px;
  display: block;
  background-color: #fff;
  border-radius: 4px;
  margin: 0 auto;
}
.progress-bar div > div{
  width: 40%;
  height: 100%;
  background-color: #1296db;
  border-radius: 4px;
  position: relative;
}
.progress-bar div > div i{
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display:block;
  width: 12px;
  height: 12px;
  background-color: #1296db;
  border-radius: 50%;
}
.play-bar{
  width: 6.5rem;
  margin: 0.1rem auto 0;
}
.play-bar img{
  width: 1.5rem;
}
.play-bar img:nth-child(2){
  margin: 0 1rem;
}
</style>