<template>
  <div class="play-tab">
    <div class="pt-left" @click="prev">
      <img src="@/assets/play/left.svg" alt />
    </div>
    <div class="pt-right">
      <i>原</i>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    prev(){
      if( window.history.length >= 1){
        this.$router.push({path:'/'})
        return false
      } else{
        this.$router.go(-1)
      }
    }
  }
};
</script>

<style scoped>
.play-tab {
  height: 7%;
  width: 100%;
  background-color: brown;
}
.pt-left {
  float: left;
  width: 10%;
  height: 100%;
  margin-left: 5%;
}
.pt-left img {
  height: 100%;
}
.pt-right {
  float: right;
  height: 100%;
  width: 15%;
  margin-right: 5%;
  position: relative;
}
.pt-right i {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  border: 2px #fff solid;
  border-radius: 50%;
  color: #fff;
  font-size: 0.75rem;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.pt-right ul {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.pt-right ul li {
  width: 5px;
  height: 5px;
  background-color: #fff;
  margin-top: 5px;
}
</style>