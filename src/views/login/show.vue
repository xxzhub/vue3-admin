<template>
  <h1>{{ title }}</h1>
  <el-button @click="handleAdd" type="primary">按钮</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String
    }
  },
  emits: ['update:title'],
  // eslint-disable-next-line space-before-function-paren
  setup(props, context) {
    // eslint-disable-next-line space-before-function-paren
    function handleAdd() {
      console.log(props)
      context.emit('update:title', '1231232131')
    }
    return {
      handleAdd
    }
  }
})
</script>
