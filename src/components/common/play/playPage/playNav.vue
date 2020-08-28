<template>
  <div class="pt-nav">
      <router-link class="router-link" to="/playPage/playIntroduct"></router-link>
      <router-link class="router-link" to="/playPage/playCenter"></router-link>
      <router-link class="router-link" to="/playPage/playRight"></router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.pt-nav{
  width: 2.85rem;
  height: 5%;
  position: absolute;
  bottom: 15%;
  top: 84%;
  left: 50%;
  transform: translateX(-50%);
}
.router-link{
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.2rem;
  background-color: #fff;
  display: inline-block;
  border-radius: 50%;
}
</style>