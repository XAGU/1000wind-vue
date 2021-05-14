<template>
  <div class="videoStu">
    <el-main class="homeMain">
      <div class="secondPageStu">
        <div class="videoCenter">
          <div class="toptop">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/practiceCenterStu' }"
                >实践中心</el-breadcrumb-item
              >
              <el-breadcrumb-item>视频观看</el-breadcrumb-item>
            </el-breadcrumb>
            <nuxt-link to="/practiceCenterStu"
              ><button class="fr back">返回</button>
            </nuxt-link>
          </div>
          <div class="content">
            <div style="display: flex">
              <div class="video" style="width: 900px">
                <div
                  class="video-player video-player-box"
                  style="width: 100%"
                ></div>
              </div>
              <div class="video-menu" style="width: auto; flex: 1 1 0%">
                <div class="list">
                  <div class="item">
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="Top Center 提示文字"
                      placement="top"
                    >
                      <h2>HTML5 基础实践课程7天 （精品）</h2>
                    </el-tooltip>
                    <ul class="v-ul">
                      <li class="active">
                        <p>
                          <i class="el-icon-video-play"> </i>
                          南山学院第一天HTML之基础标签3.mp4
                        </p>
                      </li>
                      <li>
                        <p>
                          <i class="el-icon-video-play"> </i>
                          南山学院第一天HTML之基础标签3.mp4
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="content1">
            <div class="plTab">
              <span class="active">目录</span>
              <span class="">简介</span>
            </div>
            <div>
              <el-tree
                :data="data"
                :props="defaultProps"
                @node-click="handleNodeClick"
              >
                <span
                  class="custom-tree-node el-row"
                  style="width: 100%"
                  slot-scope="{ node, data }"
                >
                  <div class="el-col el-col-20">
                    HTML5 基础实践课程7天 （精品）
                  </div>
                  <div class="el-col el-col-4"></div>
                </span>
                <div class="el-tree-node__children">
                  <div
                    role="treeitem"
                    tabindex="-1"
                    aria-expanded="true"
                    aria-disabled=""
                    draggable="false"
                    class="el-tree-node is-expanded is-focusable"
                  >
                    <div
                      class="el-tree-node__content"
                      style="padding-left: 18px"
                    >
                      <span
                        class="is-leaf el-tree-node__expand-icon el-icon-caret-right"
                      ></span
                      ><!----><!---->
                      <div class="custom-tree-node el-row" style="width: 100%">
                        <div class="el-col el-col-20">
                          <!---->
                          <span class="icon icon4"></span>
                          <span> [视频] &nbsp;</span>
                          <!---->
                          南山学院第一天HTML之基础标签3.mp4
                        </div>
                        <div class="el-col el-col-4">
                          <button
                            type="button"
                            class="el-button btn1 el-button--primary el-button--mini"
                          >
                            <!----><!----><span>开始学习</span>
                          </button>
                          <!---->
                        </div>
                      </div>
                    </div>
                    <div
                      role="group"
                      aria-expanded="true"
                      class="el-tree-node__children"
                    ></div>
                  </div>
                </div>
              </el-tree>
            </div>
            <div style="clear: both"></div>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signData: [],
    };
  },
  async asyncData({ req, $api }) {
    if (process.server) {
      if (req && req.headers.cookie) {
        $api.setUpCookie(req.headers.cookie);
      }
    }
    let result = await $api.getMyCourse();
    let myCourse = result.data;
    return {
      myCourse: myCourse,
    };
  },
  methods: {
    handleSign(row) {
      this.signData = [];
      this.$api.getCourseSign(row.courseId).then((result) => {
        if (result.code == this.$api.SUCCESS_CODE) {
          this.signData = result.data;
        } else {
          this.$message.error("获取失败");
        }
      });
    },
  },
};
</script>

<style>
.videoStu {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  background: #f3f3fb;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}
.videoStu .homeMain {
  padding: 0 !important;
  height: calc(100% - 60px);
}
.secondPageStu {
  width: 1200px;
}
.videoCenter {
  max-width: 1200px;
}
.videoCenter .toptop {
  height: 64px;
}
.videoCenter .content1 {
  background-color: #fff;
  padding-bottom: 40px;
}
.secondPageStu .el-breadcrumb {
  background: none;
  display: inline-block;
}
.videoCenter .el-breadcrumb__item:first-child {
  font-weight: 500;
}
.videoCenter .el-breadcrumb__item {
  height: 64px;
  line-height: 64px;
  font-size: 24px;
}
.secondPageStu .el-breadcrumb__item {
  height: 64px !important;
  line-height: 54px !important;
  font-size: 22px;
}
.el-breadcrumb__inner {
  color: #606266;
}
.videoCenter .el-breadcrumb__item:first-child {
  font-weight: 500;
}
.videoCenter .back {
  border: none;
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
  background-color: #3a8ee6;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
}
.secondPageStu .back {
  -webkit-transform: translateY(16px) !important;
  transform: translateY(16px) !important;
}
.secondPageStu button {
  outline: none;
}
.fr {
  float: right;
}
.videoCenter .content .novideo,
.videoCenter .content .video {
  position: relative;
  height: 440px;
  float: left;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
}
.videoCenter .content .video-menu {
  position: relative;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  height: 440px;
  width: 300px;
  float: right;
  overflow: hidden;
}
.videoCenter .content .video-menu .list {
  height: 440px;
  overflow-y: auto;
  background: rgba(199, 199, 212, 0.15);
}
.videoCenter .content .video-menu .list .item {
  line-height: 40px;
}
.videoCenter .content .video-menu .list .item h2 {
  background: #f2f2f9;
  color: #3a8ee6;
  padding-left: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.videoCenter .content .video-menu .list .item ul {
  width: 100%;
}
.videoCenter .content .video-menu .list .item ul li {
  padding-left: 20px;
  line-height: 35px;
  overflow: hidden;
  cursor: pointer;
}
.videoCenter .content .video-menu .list .item ul li.active i,
.videoCenter .content .video-menu .list .item ul li.active p {
  color: #3a8ee6;
}
.videoCenter .content .video-menu .list .item ul li p {
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
  line-height: 40px;
  position: relative;
}
.videoCenter .content .video-menu .list .item ul li i {
  float: left;
  width: 20px;
  line-height: 40px;
  font-size: 16px;
  color: #333;
}
.videoCenter .plTab {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(131, 146, 166, 0.2);
  margin-top: 30px;
}
.videoCenter .plTab span.active {
  color: #3a8ee6;
  border-bottom: 2px solid #3a8ee6;
}
.videoCenter .plTab span {
  color: #262c45;
  font-size: 16px;
  display: inline-block;
  font-weight: 500;
  width: 88px;
  text-align: center;
  cursor: pointer;
}
.videoCenter .el-tree-node__content {
  border-top: 1px solid #e6e9ed;
  background-color: #f6f6f6;
}
.videoCenter .el-col,
.videoCenter .el-tree-node__content {
  height: 56px;
  line-height: 56px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #333;
}
.videoCenter .el-col,
.videoCenter .el-tree-node__content {
  height: 56px;
  line-height: 56px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #333;
}
</style>