<template>
  <div class="ranking">
    <categoryItem class="ct-item">
      <img src="../../assets/play/1.jpg" slot="cImage" alt />
      <p slot="species">排行榜</p>
    </categoryItem>
    <categoryItem class="ct-item">
      <img src="../../assets/play/1.jpg" slot="cImage" alt />
      <p slot="species">欧美风</p>
    </categoryItem>
    <categoryItem class="ct-item">
      <img src="../../assets/play/1.jpg" slot="cImage" alt />
      <p slot="species">欧美风</p>
    </categoryItem>
    <categoryItem class="ct-item">
      <img src="../../assets/play/1.jpg" slot="cImage" alt />
      <p slot="species">欧美风</p>
    </categoryItem>
    <categoryItem class="ct-item">
      <img src="../../assets/play/1.jpg" slot="cImage" alt />
      <p slot="species">欧美风</p>
    </categoryItem>
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
.ranking {
  position: absolute;
  top: 13%;
  right: 0;
  left: 0;
  bottom: 10%;
  padding-top: 2%;
  overflow: scroll;
  background-color: rgb(243, 242, 242);
}
.ct-item {
  width: 95%;
  height: 0;
  padding-bottom: 95%;
  overflow: hidden;
}
.ct-item img {
  width: 100%;
  height: 100%;
}
</style>