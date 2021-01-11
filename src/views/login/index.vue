<!--
 * @Author: your name
 * @Date: 2021-01-06 22:29:13
 * @LastEditTime: 2021-01-10 17:50:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-admin\src\views\login\index.vue
-->
<template>
  <div class="login">
    <div class="logon-form">
      <div>111</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  components: {
  },
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      a: '123'
    }
  },
  beforeCreate () {
    console.log(2)
  },
  created () {
    console.log(4)
  },
  mounted () {
    console.log(3)
  },
  // eslint-disable-next-line space-before-function-paren
  setup() {
    const name = ref('何平')
    onMounted(() => {
      console.log(1)
    })

    return {
      name
    }
  }
})
</script>
<style lang="scss" scoped></style>
