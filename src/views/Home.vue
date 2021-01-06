<template>
  <div class="home">
    <login></login>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { defineAsyncComponent } from 'vue'
@Options({
  components: {
    login: defineAsyncComponent({
      loader: () => import('../views/login/index.vue'),
      timeout: 50000,
      delay: 2000
    })
  }
})
export default class Home extends Vue {}
</script>
