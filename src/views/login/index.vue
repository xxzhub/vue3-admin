<template>
  <div class="login">
    <div class="logon-form">
      <div>111</div>
      <show v-model:title="a"></show>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Show from './show.vue'
export default defineComponent({
  components: {
    Show
  },
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      a: '123'
    }
  },
  // eslint-disable-next-line space-before-function-paren
  setup() {
    const b = '123'
    return {
      b
    }
  }
})
</script>
<style lang="scss" scoped></style>
