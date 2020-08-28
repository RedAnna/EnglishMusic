<template>
  <div class="rollitem">
    <div class="item-left">
      <div class="il">
        <slot name="rollImg"></slot>
      </div>
    </div>
    <div class="item-right">
        <slot name="rollContent"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.rollitem {
  height: 3.5rem;
  width: 95%;
  margin: 3% auto;
  border-radius: 10px;
  box-shadow: 0 1px 5px 0px grey;
  overflow: hidden;
}
.item-left {
  float: left;
  width: 30%;
  height: 100%;
  overflow: hidden;
  text-align: center;
}
.item-left .il {
  width: 90%;
  height: 90%;
  display: inline-block;
  *display:inline;
  *zoom:1;
  vertical-align:middle;  
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.item-right {
  float: left;
  width: 70%;
  height: 100%;
}
</style>