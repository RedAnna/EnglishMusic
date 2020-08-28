<template>
    <div class="pt-content">
      <div class="pt-header">
          <div>Going Home</div>
          <div><span></span><p>歌手：kkkk</p><span></span></div>
      </div>
      <div class="pt-body">
        <div>
          <img src="@/assets/play/2.jpg" alt="" srcset="">
        </div>
      </div>
    </div>

</template>

<script>
export default {
}
</script>

<style scoped>

.pt-content{
  height: 76%;
  width: 92%;
  margin: 0 auto;
}

.pt-header{
  height: 2rem;
  padding-top: 0.5rem;
}
.pt-header > div{
  width: 100%;
  font-size: 1rem;
  line-height: 1rem;
  text-align: center;
}
.pt-header > div p{
  display: inline-block;
  margin: 0 0.5rem;
  font-size: 0.5rem;
}
.pt-header span{
  display: inline-block;
  width: 1rem;
  height: 0.05rem;
  background-color: #fff;
}
.pt-body{
  position: relative;
}
.pt-body div{
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: .5rem grey solid;
  background-color: chartreuse;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 2rem;
  animation: 5s rotatePlay linear infinite;
  animation-play-state: paused;
  /* animation-play-state: running; */
}
.pt-body div img{
  width: 100%;
}
@keyframes rotatePlay{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>