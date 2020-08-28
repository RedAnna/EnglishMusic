<template>
  <div class="nav-tab">
    <router-link class="nav-router" to="/commentary">解说</router-link>
    <router-link class="nav-router" to="/category">分类</router-link>
    <router-link class="nav-router" to="/mv">MV</router-link>
    <router-link class="nav-router" to="/ranking">排行榜</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-tab{
  height: 5%;
  width: 100%;
  position: absolute;
  top: 8%;
  left: 0;
  right: 0;
  display: table;
}
.nav-tab .nav-router{
  width: 25%;
  height: 100%;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  color: black;
}
.nav-tab .nav-router:active{
  border-bottom: 2px blue solid;
  color: blue;
}
</style>