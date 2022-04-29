<template>
  <el-row class="header">
    <el-col :span="16" class="headerLogo">
      <ul class="headerLeft">
        <li>
          <router-link  to="">Upaly</router-link>
        </li>
        <li>
          <router-link to="">购买</router-link>
        </li>
        <li>
          <router-link to="">出售</router-link>
        </li>
        <li>
          <router-link to="">我的广告</router-link>
        </li>
        <li>
          <router-link to="">帮助</router-link>
        </li>
      </ul>
    </el-col>
    <el-col :span="8" class="rightSection">
      <div class="grid-content bg-purple-light">
        <ul>
          <li>
            <router-link to="/">个人中心</router-link>
          </li>
          <li>
            <router-link to="">钱包</router-link>
          </li>
          <li>
            <router-link to="">订单</router-link>
          </li>
          <li>
            <router-link to="">注册</router-link>
          </li>
          <li>
            <router-link to="/login">登录</router-link>
          </li>
          
        </ul>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    //退出
    signout() {
      this.$confirm('退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.$router.push({ path: '/' })
      })
    },
  },
}
</script>

<style scoped>
.header {
  background: #212121;
  color: #fff;
}
.header ul li {
  display: inline-block;
  text-align: center;
  margin-right: 30px;
  font-size: 20px;
}

.headerLogo {
  line-height: 60px;
}
.rightSection {
  line-height: 60px;
  text-align: center;
}

.header ul li a{
  color: aliceblue;
}
</style>
