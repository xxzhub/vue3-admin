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
      <el-button @click="handleToUser">跳转</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {},
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      a: '123'
    }
  },
  beforeCreate () {
    console.log('选项式-------beforeCreate')
  },
  created () {
    console.log('选项式------created')
  },
  beforeMount () {
    console.log('选项式-------beforeMount')
  },
  mounted () {
    console.log('选项式-------mounted')
  },
  beforeUpdate () {
    console.log('选项式-------beforeUpdate')
  },
  updated () {
    console.log('选项式-------updated')
  },
  beforeUnmount () {
    console.log('选项式-------beforeUnmount')
  },
  unmounted () {
    console.log('选项式-------unmounted')
  },
  errorCaptured () {
    console.log('选项式-------errorCaptured')
  },
  renderTracked () {
    console.log('选项式-------renderTracked')
  },
  renderTriggered () {
    console.log('选项式-------renderTriggered')
  },
  // eslint-disable-next-line space-before-function-paren
  setup() {
    const name = ref('何平')
    const router = useRouter()
    console.log('123')
    onBeforeMount(() => {
      console.log('组合式-------onBeforeMount')
    })
    onMounted(() => {
      console.log('组合式-------onMounted')
    })
    onBeforeUpdate(() => {
      console.log('组合式-------onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('组合式-------onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('组合式-------onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('组合式-------onUnmounted')
    })
    function handleToUser (): void {
      router.push('/user')
    }

    return {
      name,
      handleToUser
    }
  }
})
</script>
<style lang="scss" scoped></style>
