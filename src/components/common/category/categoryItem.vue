<template>
  <div class="ct-item">
    <div class="ctImg">
      <slot name="cImage"></slot>
    </div>
    <div class="ctSpecies">
      <slot name="species"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.ct-item{
  width: 30%;
  height: 0;
  padding-bottom: 30%;
  float: left;
  margin-left: 2.5%;
  margin-bottom: 2.5%;
  position: relative;
}
.ctSpecies{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 2% 0;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
}
</style>