<template>
  <div class="studentHome">
    <el-main class="homeMain">
      <el-container class="stuInformationList">
        <el-header class="stuInfo clear-fix" style="height: 100px; background: rgb(255, 255, 255);">
          <el-avatar src class="float-left" style="height: 50px; width: 50px; line-height: 50px;"></el-avatar>
          <ul class="float-left">
            <li>XAGU</li>
            <li style="font-size: 12px; color: rgb(107, 107, 128);"></li>
          </ul>
        </el-header>
        <el-container style="min-height: 400px;">
          <el-aside style="width: 160px;">
            <div class="myQuestionMenu">
              <div class="openMenu">
                <div class="title">个人中心</div>
                <ul calss="closeMenu">
                  <nuxt-link to="message">
                    <li class="active">我的消息</li>
                  </nuxt-link>
                  <nuxt-link to="attence">
                    <li class>我的考勤</li>
                  </nuxt-link>

                  <nuxt-link to="userinfo">
                    <li class>个人资料</li>
                  </nuxt-link>
                  <nuxt-link to="resetpwd">
                    <li class>修改密码</li>
                  </nuxt-link>
                </ul>
              </div>
            </div>
          </el-aside>
          <nuxt-child />
        </el-container>
      </el-container>
    </el-main>
  </div>
</template>

<script>
import api from "../utils/api";
export default {
  layout: "default",
  fetch({ store, params }) {
    store.commit("setCurrentActive", "stuMyInformation");
  },
  async asyncData({ req }) {
    if (process.server) {
      if (req && req.headers.cookie) {
        api.setUpCookie(req.headers.cookie);
      }
    }
    // let result = await api.getMessages();
    // let message = result.data;
    // return {
    //   message: message
    // };
  }
};
</script>


<style>
.studentHome {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  background: #f3f3fb;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  min-height: 759px;
}
.studentHome .homeMain {
  padding: 0 !important;
  height: calc(100% - 60px);
}
.el-footer,
.el-main {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.boxHome .el-header {
  width: 100%;
  height: 80px;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #4c67ff, #5635df);
  -webkit-box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.29);
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.29);
}
.stuInformationList .el-header {
  padding: 26px 14px 14px 50px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.el-container.is-vertical {
  -ms-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
.el-main,
.el-main .el-container,
.el-main .el-container .el-aside {
  height: 100%;
}
.stuInformationList .el-aside {
  height: calc(100% - 60px);
  margin-top: 9px;
}
.studentHome .el-aside {
  background: #fff;
}
/* 名字 */
.stuInformationList .el-header ul {
  margin-left: 20px;
  margin-top: 4px;
}
.stuInformationList .el-header ul li {
  margin-bottom: 6px;
}
.stuInformationList .el-header {
  width: 100%;
  height: 80px;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #4c67ff, #5635df);
  -webkit-box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.29);
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.29);
}
/* 左侧 */
.myQuestionMenu {
  width: 160px;
  height: 100%;
}
.myQuestionMenu .openMenu {
  position: absolute;
  background: #fff;
  width: 160px;
  left: 0;
  height: calc(100% - 60px);
  z-index: 100;
}
.myQuestionMenu .openMenu .title {
  cursor: pointer;
  font-size: 16px;
  color: #262c45;
  text-align: center;
  padding: 20px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(131, 146, 166, 0.2);
}

.myQuestionMenu .openMenu ul {
  margin-top: 10px;
  margin: 10px;
}
.myQuestionMenu .openMenu ul a {
  color: #333;
  display: block;
  line-height: 40px;
  text-align: center;
}
.myQuestionMenu .openMenu ul li.active,
.myQuestionMenu .openMenu ul li:hover {
  color: #409eff;
}
.myQuestionMenu .openMenu ul li {
  height: 38px;
  line-height: 38px;
  margin: 10px 0;
  font-size: 14px;
  color: #333;
  border-radius: 6px;
  text-align: center;
  list-style: none;
  cursor: pointer;
}
/* 消息 */
.studentHome .el-main {
  padding: 0 !important;
}
.stuInformationList .el-main {
  height: 100%;
}
.stuInformationList .el-card {
  margin-right: 0 !important;
  padding: 14px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 20px !important;
}
.stuInformationList .el-card h2 {
  font-size: 16px;
  color: #262c45;
  margin: 14px 0;
}
.el-card {
  border-radius: 0 !important;
  -webkit-box-shadow: 0 !important;
  box-shadow: 0 !important;
  margin: 8px !important;
}
.el-card .el-card__body {
  padding: 10px;
}

</style>