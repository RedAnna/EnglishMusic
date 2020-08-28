<template>
  <div class="category">
    <div class="category-list clearfix">
      <categoryItem class="ct-item">
        <img src="../../assets/play/1.jpg" slot="cImage" alt="">
        <p slot="species">欧美风</p>
      </categoryItem>
      <categoryItem class="ct-item">
        <img src="../../assets/play/1.jpg" slot="cImage" alt="">
        <p slot="species">欧美风</p>
      </categoryItem>
      <categoryItem class="ct-item">
        <img src="../../assets/play/1.jpg" slot="cImage" alt="">
        <p slot="species">欧美风</p>
      </categoryItem>
      <categoryItem class="ct-item">
        <img src="../../assets/play/1.jpg" slot="cImage" alt="">
        <p slot="species">欧美风</p>
      </categoryItem>
      <categoryItem class="ct-item">
        <img src="../../assets/play/1.jpg" slot="cImage" alt="">
        <p slot="species">欧美风</p>
      </categoryItem>
     
    </div>
  </div>
</template>

<script>
import categoryItem from "../../components/common/category/categoryItem.vue";
export default {
  components: {
    categoryItem,
  },
};
</script>

<style scoped>
.category {
  background-color: rgb(243, 242, 242);
  position: absolute;
  top: 13%;
  bottom: 10%;
  left: 0;
  right: 0;
  overflow: scroll;
}
.category-list {
  padding-top: 5%;
}
.ct-item{
  overflow: hidden;
}
.ct-item img{
  width: 100%;
  height: 100%;
}
</style>