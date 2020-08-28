<template>
  <div id="app">
    <index />
  </div>
</template>

<script>


import index from "./views/index.vue";

export default {
  components: {
    index,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  overflow: hidden;
}
li {
  list-style: none;
}
.clearfix {
  *zoom: 1;
}
a {
  text-decoration: none;
}
i{
  font-style: normal;
}
@media screen and (min-width: 320px){
  html{
    font-size: 25px; /**375/15 */
  }
}
@media screen and (min-width: 750px){
  html{
    font-size: 50px; /**750/15 */
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  max-width: 750px;
  min-width: 320px;
  margin: 0 auto;
  overflow: hidden;
  height: 100vh;
  position: relative;
  left: 0;
  right: 0;
  font-size: 16px;
}

</style>
