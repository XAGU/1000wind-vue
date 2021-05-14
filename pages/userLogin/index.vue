<template>
  <div class="login-page">
    <div class="container">
      <div class="login-main">
        <h3 class="lg-title">登录</h3>
        <el-form
          ref="loginForm"
          :rules="rules"
          :model="loginForm"
          class="login-form"
          autocomplete="on"
          label-position="left"
        >
          <el-form-item prop="username">
            <el-input
              ref="username"
              v-model="loginForm.username"
              placeholder="用户名"
              name="username"
              type="text"
              tabindex="1"
              prefix-icon="el-icon-user"
              autocomplete="on"
            />
          </el-form-item>

          <el-tooltip
            v-model="capsTooltip"
            content="键盘大写已开启"
            placement="right"
            manual
          >
            <el-form-item prop="password">
              <el-input
                ref="password"
                v-model="loginForm.password"
                placeholder="密码"
                name="password"
                prefix-icon="el-icon-lock"
                tabindex="2"
                autocomplete="on"
                :show-password="true"
                @keyup.native="checkCapslock"
                @blur="capsTooltip = false"
                @keyup.enter.native="handleLogin"
              />
            </el-form-item>
          </el-tooltip>

          <el-checkbox class="remember-me" v-model="rememberme"
            >记住密码</el-checkbox
          >
          <el-button
            :loading="loading"
            type="primary"
            style="width: 100%; margin-bottom: 30px"
            class="login-button"
            @click.native.prevent="handleLogin"
            >登录</el-button
          >
          <a
            href="javaScript:void(0)"
            onclick="toRegister()"
            class="register float-left"
            >新用户注册</a
          >
          <a
            href="javaScript:void(0)"
            onclick="otherLogin(2)"
            class="forget float-right"
            >忘记密码</a
          >
        </el-form>
        <p class="Agreement">
          登录即表示同意平台
          <a target="_blank">《隐私政策》</a>和
          <a target="_blank">《用户协议》</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../utils/api";
export default {
  layout: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      capsTooltip: false,
      loading: false,
      rememberme: true,
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 3, message: "用户名长度应大于3", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    if (this.loginForm.username === "") {
      this.$refs.username.focus();
    } else if (this.loginForm.password === "") {
      this.$refs.password.focus();
    }
  },
  methods: {
    checkCapslock(e) {
      const { key } = e;
      this.capsTooltip = key && key.length === 1 && key >= "A" && key <= "Z";
    },
    handleLogin() {
      this.$refs["loginForm"].validate((valid) => {
        if (valid) {
          this.loading = true;
          const form = {
            username: this.loginForm.username,
            password: this.loginForm.password,
            client_secret: "client-secret-8888",
            grant_type: "password",
            client_id: "app-client",
            scope: "all",
          };
          const formLogin = Object.keys(form)
            .map(
              (a) => encodeURIComponent(a) + "=" + encodeURIComponent(form[a])
            )
            .join("&");
          this.$auth
            .loginWith("social", {
              data: formLogin,
              headers: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8",
              },
            })
            .then(() => {
              this.loading = false;
              this.$message({message: "恭喜你，登录成功",type: "success"});
            })
            .catch((err) => {
              this.loading = false;
              this.$message.error("登录失败");
            });
        } else {
          return false;
        }
      });
    },
  },
};
</script>


<style>
.login-page {
  height: 100%;
  background: url(../../assets/background.svg);
}
.container {
  position: relative;
  height: 100%;
  border-top: 1px solid #f2f4f7;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.container .login-main {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 5;
  margin: 0 auto;
}
.login-main {
  padding: 68px 90px 51px;
  width: 900px;
  height: 584px;
  overflow: hidden;
  box-shadow: 0 0 20px 0 rgba(175, 187, 204, 0.15);
  background: #ffffff;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
  position: relative;
}
.login-page .lg-title {
  font-weight: normal;
  color: #181e33;
  font-size: 20px;
  margin-bottom: 44px;
}

.login-page .login-form {
  position: relative;
  width: 520px;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
}

.login-page .tips {
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
}
.login-page .el-input__inner {
  width: 100%;
  height: 48px;
  vertical-align: top;
  background: #ffffff;
  border: 1px solid #e3e8f0;
  outline: none;
  font-size: 14px;
  color: #181e33;
  -webkit-border-radius: 24px;
  border-radius: 24px;
  padding: 0 24px 0 54px;
  box-sizing: border-box;
}

.login-page .login-button {
  width: 360px;
  height: 48px;
  background: linear-gradient(135deg, #409eff, #2b78e4);
  background-size: cover;
  box-shadow: 0 3px 12px 0 rgba(39, 125, 255, 0.3);
  border-radius: 24px;
  font-size: 18px;
  color: #ffffff;
  outline: none;
  margin-top: 40px;
  cursor: pointer;
  border: none;
}

.login-page .el-input__icon {
  width: 50px;
}

.el-form-item__error {
  left: 20px;
}

.login-page .el-input--prefix .el-input__inner {
  padding-left: 60px;
}

.register,
.forget {
  text-decoration: none;
  color: #409eff;
}

.Agreement {
  text-align: center;
  font-size: 12px;
  color: #a8a8b3;
  position: relative;
  left: 0px;
  bottom: -90px;
}
.remember-me {
  color: #409eff;
  font-size: 14px;
  margin-left: 24px;
  margin-top: -40px;
}
</style>