<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :unique-opened="true"
    :router="true"
    background-color=" #fff"
    text-color="#999999"
    active-text-color="#000000"
  >
    <el-menu-item  v-for="(item,index) in menuData" :key="item.path" :index="item.path" >
      <span >{{ item.name }}</span>
    </el-menu-item>
    
  </el-menu>
</template>

<script>
export default {
  name: 'Aside',
  props:['route22'],
  data() {
    return {
      // route22:,
      menuData: ''
    }
  },
  created(){
    console.log(this.route22)
    this.specifyRoute(this.route22)
  },
  methods: {

    specifyRoute(path) {
      let specificRoute=this.$router.options.routes.filter(item => item.path===path)
      this.menuData=specificRoute[0].children
    },
  },
}
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100vh;
}
</style>
