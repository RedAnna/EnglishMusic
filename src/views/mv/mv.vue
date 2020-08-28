<template>
  <div class="mv-roll">
    <roll>
      <roll-item class="roll-item">
        <img src="../../assets/play/1.jpg" slot="rollImg" />
        <p class="RLeftp" slot="rollImg">2020-8-15</p>
        <div class="itemC" slot="rollContent">
          <p>13岁天使与恶魔丹妮莉娅13岁天使与恶魔丹妮莉娅13岁天使与恶魔丹妮莉娅</p>
          <p>13岁天使与恶魔丹妮莉娅13岁天使与恶魔丹妮莉娅13岁天使与恶魔丹妮莉娅13岁天使与恶魔丹妮莉娅</p>
          <p>播放量 8888</p>
        </div>
      </roll-item>
    </roll>
  </div>
</template>

<script>
import roll from "../../components/common/roll/roll.vue";
import rollItem from "../../components/common/roll/rollItem.vue";

export default {
  components: {
    roll,
    rollItem,
  },
};
</script>

<style scoped>
.mv-roll {
  background-color: rgb(243, 242, 242);
  position: absolute;
  top: 13%;
  bottom: 10%;
  left: 0;
  right: 0;
  overflow: scroll;
}

.roll-item img {
  height: 100%;
  width: 100%;
}
.RLeftp {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
}
.itemC {
  font-size: 1rem;
  color: black;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding: 3%;
  padding-top: 4%;
}
.itemC p {
  width: 100%;
  position: relative;
}
.itemC p:first-child {
  font-size: 1.5rem;
  color: blue;
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
  line-height: 2rem;
}
.itemC p:nth-child(2){
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5rem;
}
.itemC p:last-child{
  text-align: right;
  color: grey;
  font-size: 1.2rem;
  line-height: 2rem;
}
</style>