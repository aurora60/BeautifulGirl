<template>
  <el-container class="container">
    <!-- <el-header class="header" style="height:62px">
      <Header />
    </el-header> -->
    <el-container>
      <el-aside class="aside" >
        <Aside ref="aaaa" :route22="routePath" />
      </el-aside>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from '@/components/Aside/index.vue'
export default {
  name: 'Home',
  data(){
    return{
      routePath:'/',
    }
  },
  components: {
    Aside,
  },
}
</script>

<style scoped>
.container {
  height: 110vh;
  font-size: 15px;
}

.aside {
  height: 100vh;
  /* background: #3a3a3a; */
  /* color: #fff; */
}
.main {
  color: #212121;
}
</style>
