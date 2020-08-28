<template>
  <div class="roll-list">
    <slot></slot>
  </div>
</template>

<script>
import rollItem from './rollItem.vue'

export default {
  components:{
    rollItem
  }
}
</script>

<style scoped>
.roll-list{
  width: 100%;
  height: 100%;
  overflow: scroll;
}

</style>