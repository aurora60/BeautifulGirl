<template>
  <div>
    <div class="">
      <p>欢迎您来到Upaly</p>
      <p>正在创建您的账户</p>
    </div>
    <div class="box" v-show="cestbonone">
      <el-tabs @tab-click="handleClick" v-model="activeName">
        <el-tab-pane label="手机注册" name="first">
          <el-form label-width="80px">
            <div class="aa">
              <div class="boxtow" @click="dialogChange">
                <img class="dex-imgSize" :src="img1" />
                +123
                <i class="el-icon-arrow-down"></i>
              </div>
              <el-input
                placeholder="请输入你的手机号"
                prefix-icon="el-icon-phone-outline"
                v-model="mobile"
                clearable
                type="number"
              >
              </el-input>
            </div>

            <el-input
              placeholder="设置登录密码"
              prefix-icon="el-icon-key"
              v-model="password"
              clearable
              show-password
              maxlength="12"
              style="margin-top: 30px"
            >
            </el-input>
          </el-form>
          <p class="titleone">注册即视为您已阅读并同意<a>《用户协议》</a></p>
          <el-button
            type="primary"
            @click="register"
            style="width: 100%; margin-top: 20px"
            >注册</el-button
          >
          <p style="text-align: center; margin-top: 30px">
            已有账户?<a style="text-decoration: underline">去登录</a>
          </p>
        </el-tab-pane>

        <el-tab-pane label="邮箱注册" name="second">
          <el-form label-width="80px">
            <div class="aa">
              <el-input
                placeholder="请输入你的邮箱"
                prefix-icon="el-icon-notebook-2"
                v-model="mobile"
                clearable
                type="number"
              >
              </el-input>
            </div>
            <el-input
              placeholder="设置登录密码"
              prefix-icon="el-icon-key"
              clearable
              v-model="password"
              show-password
              maxlength="12"
              style="margin-top: 30px"
            >
            </el-input>
          </el-form>
          <p class="titleone">注册即视为您已阅读并同意<a>《用户协议》</a></p>
          <el-button
            type="primary"
            @click="register"
            style="width: 100%; margin-top: 20px"
            >注册</el-button
          >
          <p style="text-align: center; margin-top: 30px">
            已有账户?<a style="text-decoration: underline">去登录</a>
          </p>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 验证码弹框 -->
    <el-dialog :visible.sync="open" v-if="open" width="500px">
      <p>注册验证</p>
      <p>请输入注册手机号收到的短信验证码</p>
      <el-form ref="form" label-width="80px">
        <el-input
          placeholder="验证码"
          prefix-icon="el-icon-chat-line-round"
          v-model="sms"
          clearable
        >
          <template slot="append">
            <span class="sms" @click="send_sms">{{ sms_interval }}</span>
          </template>
        </el-input>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="determine">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 国际电话号码 -->
    <el-dialog :visible.sync="opentow" v-if="opentow" width="500px">
      <el-input
        v-model="input"
        placeholder="搜索国家或手机号"
        prefix-icon="el-icon-search"
      ></el-input>
        <div style="max-height: 300px; overflow-y: scroll;">
      <div class="International">
        <div class="security">
          <img :src="img1" />
        </div>
        <div class="content">
          <span style="margin-left: 10px">中国</span>
          <span style="margin-left: 300px">+86</span>
        </div>
      </div>
      </div>
    </el-dialog>

  </div>
</template>
<script>
export default {
  data() {
    return {
      //验证码弹出框
      open: false,
      //国际号码弹出框
      opentow: false,
      //注册
      cestbonone: true,
      activeName: "first",
      mobile: "",
      password: "",
      sms: "",
      sms_interval: "获取验证码",
      is_send: false, //点击发送功能的条件
      img1: require("@/views/Register/images/oat.png"),
      input: "",
    };
  },
  mounted: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //注册
    register() {
      if (!(this.mobile && this.password)) {
        this.$message({
          message: "手机号，密码不能为空",
          type: "error",
        });
        return false;4 
      } else if (!this.mobile.match(/^1[3-9][0-9]{9}$/)) {
        this.$message({
          message: "手机号有误",
          type: "warning",
          duration: 1000,
          // onClose: () => {
          //     this.mobile = '';
          // }
        });
        return false;
      } else if (this.password.length < 6) {
        this.$message({
          message: "密码最少6位",
          type: "error",
        });
        return false;
      }
      this.open = true;
      this.is_send = true;
      return true;
    },

    //验证码
    send_sms() {
      if (!this.is_send) return;
      this.is_send = false;
      let sms_interval_time = 60;
      this.sms_interval = "发送中...";
      let timer = setInterval(() => {
        if (sms_interval_time <= 1) {
          clearInterval(timer);
          this.sms_interval = "获取验证码";
          this.is_send = true; // 重新回复点击发送功能的条件
        } else {
          sms_interval_time -= 1;
          this.sms_interval = `${sms_interval_time}秒后再发`;
        }
      }, 1000);

      this.$http
        .get(this.$BASE_URL + "user/send_sms/?phone=" + this.mobile)
        .then((res) => {
          console.log(res.data);
          if (res.data.code == 100) {
            this.$message({
              message: "短信发送成功",
              type: "success",
            });
          } else {
            this.$message({
              message: "短信发送失败，请稍后再试。。。",
              type: "error",
            });
          }
        });
    },
    //点击确定
    determine() {
      if (!this.sms) {
        this.$message({
          message: "验证码不能为空",
          type: "error",
        });
        return false;
      }
    },

    dialogChange() {
      this.opentow = true;
    },
  },
};
</script>
