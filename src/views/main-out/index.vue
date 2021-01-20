<template>
  <div class="test"> 框架外页面</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({

})
</script>

<style scoped>
  .test {
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 50px;
  }
</style>
