<template>
  <div>
    <!-- 顶部 -->
    <div id="header">
      <div class="center-box clear-fix">
        <div class="header-logo float-left">
          <a href="/studentIndex">
            <img src="../assets/logo.png" alt />
          </a>
        </div>
        <div class="header-menu float-right">
          <ul class="float-left">
            <nuxt-link to="/studentIndex">
              <li :class="$store.state.currentActive==='studentIndex'?'menu-active':''">学习中心</li>
            </nuxt-link>
            <nuxt-link to="/practiceCenterStu">
              <li :class="$store.state.currentActive==='practiceCenterStu'?'menu-active':''">实践中心</li>
            </nuxt-link>
            <nuxt-link to="/personal/message">
              <li :class="$store.state.currentActive==='stuMyInformation'?'menu-active':''">个人中心</li>
            </nuxt-link>
          </ul>
          <div class="header-user-info float-left">
            <div>
              <el-avatar
                icon="el-icon-user-solid"
                :src="myself.headImg"
                @error.native="onHeadImgError()"
                size="small"
              ></el-avatar>
              <el-dropdown>
                <span class="el-dropdown-link">
                  {{myself.username}}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="logout()">
                    <i class="el-icon-switch-button"></i> 退出
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nuxt />
    <!-- 底部 -->
    <!-- 底部 -->
    <div id="footer">
      <div class="center-box clear-fix">
        <div class="footer-link clear-fix">
          <ul>
            <li>如来佛主</li>
            <li>项目源码</li>
            <li>后台管理</li>
            <li>常见问题</li>
            <li>联系我们</li>
          </ul>
        </div>
        <div class="size-info">
          <p>&COPY; 2019 rlfz.kwind.top 鄂IPC备 8888888号-11 code by 如来佛组</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import api from "../utils/api";
export default {
  data() {
    return {
      myself: {
        headImg: "http://localhost:8080/upload/img/default_head.jpg",
        username: "未登录"
      }
    };
  },
  created() {
    api.getLoginInfo().then(result => {
      console.log(result.code);
      if (result.code === api.SUCCESS_CODE) {
        this.myself = result.data;
      } else {
        this.$router.push("/userLogin");
      }
    });
  },
  methods: {
    onHeadImgError() {
      this.myself.headImg = "http://localhost:8080/upload/img/default_head.jpg";
      return false;
    },
    logout() {
      console.log("aaa");
      api.logout().then(result => {
        if (result.code === api.SUCCESS_CODE) {
          this.$message({
            message: "退出成功",
            type: "success"
          });
          this.$router.replace("/userLogin");
        } else {
          this.$message.error(result.msg);
          this.$router.replace("/userLogin");
        }
      });
    }
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

* {
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
}

li,
ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #409eff;
}
body {
  background-color: #f3f3fb;
}

.float-left {
  float: left;
}

.float-right {
  float: right;
}

.clear-fix {
  zoom: 1;
  overflow: auto;
}

.header-user-info {
  margin-top: 14px;
  height: 32px;
  margin-left: 16px;
}

.header-user-info .el-dropdown {
  float: right;
  line-height: 30px;
  margin-left: 12px;
}

.header-user-info .el-dropdown span {
  color: #ffffff;
  font-size: 14px;
}

.header-user-info .el-dropdown span .el-icon--right {
  margin-left: 10px;
}

#header {
  box-shadow: 0px 5px 10px #d4d4d4;
  background: linear-gradient(135deg, #409eff, #2b78e4);
  height: 60px;
  padding: 0 20px;
  margin-bottom: 8px;
}

.header-menu li:hover,
.menu-active {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.11);
  background: linear-gradient(237deg, #19e5b2, #1dc4e9) !important;
}

.header-menu li {
  cursor: pointer;
  color: #ffffff;
  font-size: 14px;
  float: left;
  margin: 0 10px;
  height: 32px;
  line-height: 30px;
  margin-top: 14px;
  text-align: center;
  width: 110px;
  border-radius: 22px;
  background: rgba(199, 199, 212, 0.25);
}

.header-menu ul {
  list-style: none;
}

.center-box {
  width: 1200px;
  margin: 0 auto;
}

.header-logo a img {
  cursor: pointer;
  width: 156px;
  height: 56px;
}

/* footer */
#footer .center-box {
  padding-top: 20px;
  padding-bottom: 20px;
}

.footer-link {
  text-align: center;
}

.size-info {
  color: #ffffff;
  text-align: center;
  line-height: 30px;
}

.footer-link ul {
  display: inline-block;
  padding: 0px;
  list-style: none;
}

.footer-link li {
  float: left;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 30px;
}

#footer {
  background: linear-gradient(135deg, #409eff, #2b78e4);
}
</style>

