<template>
  <div class="studentIndex">
    <main class="el-main">
      <div class="el-row">
        <div class="hot-course">
          <el-carousel :interval="4000" type="card" height="300px">
            <el-carousel-item v-for="(item,index) in hotCourse" :key="index">
              <el-image :src="item.courseCover" fit="cover" class="course-cover">
                <div slot="placeholder" class="image-slot">
                  加载中
                  <span class="dot">...</span>
                </div>
              </el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="el-col el-col-15">
          <el-card class="message-card" body-style="height:182px;padding:10px">
            <h2>学习通知</h2>
            <ul>
              <li v-for="(item,index) in message" :key="index">
                <span class="float-left pot">●</span>
                <span class="float-left tip">[公告]</span>

                <span class="float-left title title2">{{item.messageName}}</span>
                <span
                  class="float-right time"
                  style="color: rgb(90, 106, 126); margin-right: 20px;"
                >{{item.createTime}}</span>
              </li>
            </ul>
          </el-card>
          <el-card style="height:212px">
            <h2>待办事项</h2>
            <img src="../../assets/no_data.375fae4.png" alt class="noData" />
            <p class="noDataText">暂无待办...</p>
          </el-card>
        </div>
        <div class="el-col el-col-9">
          <el-card class="box-card">
            <h2>每日打卡</h2>
            <client-only>
              <el-calendar style="height:360px">
                <template slot="dateCell" slot-scope="{date, data}">
                  <p
                    :class="data.isSelected ? 'is-selected' : ''"
                  >{{ (new Date().getDate()>data.day.split('-')[2]&&new Date().getMonth()+1==data.day.split('-')[1]) ? '✔️' : data.day.split('-').slice(2).join('-')}}</p>
                </template>
              </el-calendar>
            </client-only>
          </el-card>
        </div>
      </div>
      <el-container class="my-course-container">
        <el-main>
          <el-card>
            <h2 style="margin-bottom: 20px;">我的课堂</h2>
            <div class="courses" v-for="(item,index) in myCourse" :key="index">
              <div class="course-item">
                <!---->
                <img
                  src="data:image/png;base64,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"
                  class="pic"
                />
                <div class="item-img">
                  <img :src="item.courseCover" />
                </div>
                <div class="item-content">
                  <h2>{{item.courseName}}</h2>
                  <h3>简介: {{item.courseInfo}}</h3>
                  <div class="b">
                    <div class="label">
                      <span>{{item.subjectType.subjectName}}</span>
                    </div>
                    <div class="label gkrs">已学习: {{item.courseClick}}人</div>
                    <p class="ls">讲师:{{item.teacher.realName}}</p>
                  </div>
                  <div class="entryBtn">
                    <a
                      href="/stuTranscribe?id=901"
                      class
                      style="position: absolute; top: 50px; right: 0px;"
                    >
                      <el-button type="primary" round size="small" class="start-study">开始学习</el-button>
                    </a>
                    <a
                      href="/stuTranscribe?id=901"
                      style="position: absolute; top: 100px; right: 0px;"
                    >
                      <el-button type="success" round size="small" class="start-study">课程详情</el-button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </el-main>
      </el-container>
      <div class="el-card"></div>
    </main>
  </div>
</template>

<script>
import api from "../../utils/api";
export default {
  layout: "default",
  beforeMount() {
    this.$store.commit("setCurrentActive", "studentIndex");
  },
  async asyncData({ req }) {
    if (process.server) {
      if (req && req.headers.cookie) {
        api.setUpCookie(req.headers.cookie);
      }
    }
    let result = await api.getMessages();
    let message = result.data;
    result = await api.getHotCourse();
    let hotCourse = result.data;
    result = await api.getMyCourse();
    let myCourse = result.data;
    return {
      message: message,
      hotCourse: hotCourse,
      myCourse: myCourse
    };
  },
  mounted() {
    // let res = api.login("admin", "admin", "on").then(result => {
    //   console.log(result);
    // });
  }
};
</script>

<style>
.studentIndex {
  width: 1200px;
  margin: 0 auto;
  min-height: 100%;
}

.el-carousel__item .course-cover {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 300px;
  width: 100%;
  text-align: center;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-image__error,
.el-image__inner,
.el-image__placeholder {
  width: 100%;
  height: 300px;
}

.hot-course {
  margin-top: 20px;
  margin-bottom: 20px;
}

.image-slot {
  width: 500px;
  height: 100%;
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

/* 轮播图结束 */

/* 通知 */

.el-card,
.el-message {
  border-radius: 4px;
  overflow: hidden;
}

.studentIndex .el-main .el-card {
  margin: 8px !important;
  border-radius: 6px !important;
  position: relative;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

.message-card h2 {
  color: #262c45;
  font-size: 16px;
  margin: 0 10px;
}

.studentIndex .el-main .el-card h2 {
  color: #262c45;
  font-size: 16px;
  margin: 0 10px;
}

.studentIndex .el-main .message-card ul {
  margin-top: 10px;
  padding: 0px;
}

li,
ul {
  list-style: none;
}
.studentIndex .el-main .el-card ul li:nth-child(odd) {
  background: #f7f8fa;
}
.studentIndex .el-main .el-card ul li {
  padding: 0 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 36px;
  line-height: 36px;
  list-style: none;
  border-radius: 2px;
  cursor: pointer;
}
.studentIndex .el-main .el-card ul li .pot {
  min-width: 40px;
  text-align: center;
  color: #00c9a7;
  font-size: 8px;
  height: 100%;
}
.studentIndex .el-main .el-card ul li .tip {
  font-size: 14px;
  color: #409eff;
  margin: 0 10px 0 0;
}
.studentIndex .el-main .el-card ul li .title {
  font-size: 14px;
  color: #333;
}
.studentIndex .el-main .el-card ul li .title:hover {
  color: #409eff;
}
.studentIndex .el-main .el-card ul li .time {
  font-size: 14px;
  color: #6b6b80;
}

/* 待办事件 */
.studentIndex .el-main .el-card .noData {
    display: block;
    width: 120px;
    margin: 20px auto 0;
}

.studentIndex .el-main .el-card .noDataText {
    text-align: center;
    color: #999;
}


/* 热门课程 */
.el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0 0 15px;
}
.el-tabs__nav-wrap {
  overflow: hidden;
  margin-bottom: -1px;
  position: relative;
}
.el-tabs__nav-scroll {
  overflow: hidden;
}
.el-tabs__nav {
  white-space: nowrap;
  position: relative;
  transition: -webkit-transform 0.3s;
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  float: left;
  z-index: 2;
  width: 80px;
  transform: translateX(0px);
}
.studentIndex .el-main .el-card .el-tabs .el-tabs__active-bar {
  background: none !important;
}
.el-tabs__active-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: #409eff;
  z-index: 1;
  -webkit-transition: -webkit-transform 0.3s
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  list-style: none;
}
.studentIndex .el-main .el-card .el-tabs .el-tabs__item.is-active {
  color: #409eff;
}
.studentIndex .el-main .el-card .el-tabs .el-tabs__item {
  width: 80px;
  transform: translateX(0px);
  font-size: 16px;
  color: #262c45;
  font-weight: 500;
}
.el-tabs--bottom .el-tabs__item.is-bottom:last-child,
.el-tabs--bottom .el-tabs__item.is-top:last-child,
.el-tabs--top .el-tabs__item.is-bottom:last-child,
.el-tabs--top .el-tabs__item.is-top:last-child {
  padding-right: 0;
}
.el-tabs__item:hover {
  color: #409eff;
  cursor: pointer;
}
.el-tabs__item:focus,
.el-tabs__item:focus:active {
  outline: 0;
}
.el-tabs__item {
  text-align: center;
  padding: 0 20px;
  height: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  position: relative;
}

.studentIndex .el-main .el-card ul li.header {
  background: #e8e7f7;
}
.studentIndex .el-main .el-card ul li .name {
  width: 290px !important;
  text-align: center;
}
.studentIndex .el-main .el-card ul li .num {
  width: 50px !important;
  text-align: center;
}
.studentIndex .el-main .el-card ul li .rank {
  width: 30px !important;
  text-align: center;
}
.studentIndex .el-main .el-card ul li.header span {
  font-size: 14px;
  color: #302f41;
}
.studentIndex .el-main {
  padding: 0 !important;
}

/* 日历 */
.el-calendar-table .el-calendar-day {
  box-sizing: border-box;
  padding: 8px;
  height: 40px;
}

/* 我的课程 */
.el-card .el-card__body {
  padding: 10px;
}

.my-course-container .courses .course-item {
  background: #fafafa;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  zoom: 1;
  padding: 15px;
  margin-bottom: 20px;
}
.my-course-container .courses .course-item .pic {
  position: absolute;
  top: -3px;
  left: 0;
  width: 80px;
  height: 80px;
}
.my-course-container .courses .course-item .item-img {
  float: left;
  width: 260px;
  height: 148px;
  cursor: pointer;
}
.my-course-container .courses .course-item .item-img img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.my-course-container .courses .course-item .item-content {
  float: left;
  margin-left: 30px;
  width: 730px;
}
.my-course-container .courses .course-item .item-content h2 {
  font-size: 16px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: #262c45;
  margin-left: 0;
}
.my-course-container .courses .course-item .item-content h3 {
  margin-top: 18px;
  font-size: 14px !important;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400 !important;
  color: #666;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 94%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.my-course-container .courses .course-item .item-content .b {
  position: absolute;
  left: 304px;
  bottom: 18px;
  width: 100%;
  overflow: hidden;
}
.my-course-container .courses .course-item .item-content .b .label {
  width: 120px;
  float: left;
  color: #6b6b80;
  font-size: 12px;
}
.my-course-container .courses .course-item .item-content .b .label span {
  line-height: 20px;
  padding: 0 10px;
  background: #c2c8d0;
  color: #fff;
  border-radius: 15px;
  font-size: 12px;
  text-align: center;
  width: auto;
}
.my-course-container .courses .course-item .item-content .b .gkrs {
  background: url(data:image/png;base64,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)
    no-repeat 0;
  background-size: 16px 16px;
  padding-left: 30px;
  width: 90px;
  height: 16px;
  line-height: 16px;
  padding-top: 2px;
}
.my-course-container .courses .course-item .item-content .b .label {
  width: 120px;
  float: left;
  color: #6b6b80;
  font-size: 12px;
}
.my-course-container .courses .course-item .item-content .b .ls {
  background: url(data:image/png;base64,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)
    no-repeat 0;
  background-size: 16px 16px;
  padding-left: 30px;
  width: 370px;
  height: 16px;
  line-height: 16px;
  float: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-top: 2px;
}
.my-course-container .courses .course-item .item-content .b p {
  float: left;
  color: #6b6b80;
  font-size: 12px;
  width: 590px;
}
.my-course-container .courses .course-item .item-content .entryBtn {
  width: 120px;
  height: 100%;
  position: absolute;
  right: 20px;
  top: 0;
  text-align: center;
}
a {
  text-decoration: none;
  color: #409eff;
}
.my-course-container .courses .course-item .item-content .el-button {
  height: 32px;
  width: 100px;
  border: none;
  border-radius: 16px;
}
</style>

