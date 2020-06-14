<template>
  <div class="studentHome">
    <el-main>
      <div class="practiceStudent">
        <div class="practiceCenter">
          <h2 class="title">实习实训</h2>
          <el-card>
            <h3 class="title">
              <span class="line"></span>
              实训方案
            </h3>
            <el-tabs v-model="activeId" @tab-click="handleClick" style="padding:16px">
              <el-tab-pane
                v-for="(item,index) in subjects"
                :key="index"
                :label="item.subjectName"
                :name="item.subjectId+''"
              >
                <div class="el-row">
                  <div
                    class="el-col el-col-6 float-left practice-item practical-item"
                    v-for="(item,index) in practical"
                    :key="index"
                    @click="downLoadPractical(item.practicalUrl,item.practicalId)"
                  >
                    <div class="item">
                      <img :src="item.practicalCover" />

                      <el-tooltip effect="dark" :content="item.practicalName" placement="top">
                        <p class="black">{{item.practicalName}}</p>
                      </el-tooltip>
                      <p class="sta">
                        <span># Java</span>
                        <span>
                          <i class="el-icon-user"></i>
                          {{item.practicalClick}}
                        </span>
                        <span class="float-right">千峰科技</span>
                      </p>
                      <div
                        class="btn"
                        @click="downLoadPractical(item.practicalUrl,item.practicalId)"
                      >
                        <i class="el-icon-download"></i> 实训方案下载
                      </div>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-card>
          <h2 class="title">实战进阶</h2>
          <el-card>
            <el-tabs v-model="activeId" @tab-click="handleClick" style="padding:16px">
              <el-tab-pane
                v-for="(item,index) in subjects"
                :key="index"
                :label="item.subjectName"
                :name="item.subjectId+''"
              >
                <div class="el-row">
                  <div
                    class="el-col el-col-6 float-left practice-item"
                    v-for="(item,index) in practical"
                    :key="index"
                  >
                    <div class="item">
                      <img :src="item.practicalCover" />
                      <el-tooltip effect="dark" :content="item.practicalName" placement="top">
                        <p class="black">{{item.practicalName}}</p>
                      </el-tooltip>
                      <div class="videoPlay">
                        <img
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <p class="sta">
                        <span># Java</span>
                        <span>
                          <i class="el-icon-user"></i>
                          {{item.practicalClick}}
                        </span>
                        <span class="float-right">千峰科技</span>
                      </p>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-card>
          <h2 class="title">技术公开课</h2>
          <el-card>
            <el-tabs v-model="activeId" @tab-click="handleClick" style="padding:16px">
              <el-tab-pane
                v-for="(item,index) in subjects"
                :key="index"
                :label="item.subjectName"
                :name="item.subjectId+''"
              >
                <div class="el-row">
                  <div
                    class="el-col el-col-6 float-left practice-item"
                    v-for="(item,index) in practical"
                    :key="index"
                  >
                    <div class="item">
                      <img :src="item.practicalCover" />
                      <el-tooltip effect="dark" :content="item.practicalName" placement="top">
                        <p class="black">{{item.practicalName}}</p>
                      </el-tooltip>
                      <div class="videoPlay">
                        <img
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <p class="sta">
                        <span># Java</span>
                        <span>
                          <i class="el-icon-user"></i>
                          {{item.practicalClick}}
                        </span>
                        <span class="float-right">千峰科技</span>
                      </p>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-card>
          <h2 class="title">毕设指导</h2>
          <el-card>
            <div class="guide">
              <h3 class="title">
                <span class="line"></span>
                毕设项目
              </h3>
              <el-tabs v-model="activeId" @tab-click="handleClick" style="padding:16px">
                <el-tab-pane
                  v-for="(item,index) in subjects"
                  :key="index"
                  :label="item.subjectName"
                  :name="item.subjectId+''"
                >
                  <div class="el-row">
                    <div
                      class="el-col el-col-6 float-left practice-item"
                      v-for="(item,index) in practical"
                      :key="index"
                    >
                      <div class="item">
                        <img :src="item.practicalCover" />
                        <el-tooltip effect="dark" :content="item.practicalName" placement="top">
                          <p class="black">{{item.practicalName}}</p>
                        </el-tooltip>
                        <div class="videoPlay">
                          <img
                            src="data:image/png;base64,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"
                          />
                        </div>
                        <p class="sta">
                          <span># Java</span>
                          <span>
                            <i class="el-icon-user"></i>
                            {{item.practicalClick}}
                          </span>
                          <span class="float-right">千峰科技</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-card>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
import api from "../../utils/api";
export default {
  layout: "default",
  beforeMount() {
    this.$store.commit("setCurrentActive", "practiceCenterStu");
  },
  async asyncData({ req }) {
    if (process.server) {
      if (req && req.headers.cookie) {
        api.setUpCookie(req.headers.cookie);
      }
    }
    let result = await api.getSubjects();
    let subjects = result.data;
    subjects.unshift({ subjectId: "0", subjectName: "全部" });
    result = await api.getCourseBySubjects(0);
    let practical = result.data;
    return {
      subjects: subjects,
      activeId: "0",
      practical: practical
    };
  },
  methods: {
    handleClick(tab, event) {
      api.getCourseBySubjects(this.activeId).then(result => {
        if (result.code == api.SUCCESS_CODE) {
          this.practical = result.data;
          if (this.practical.length > 0) {
            this.$notify({
              title: "成功",
              message: "载入数据成功，共" + this.practical.length + "条数据",
              type: "success",
              duration: 2000
            });
          } else {
            this.$notify({
              title: "对不起",
              message: "该分类下暂时还没有实训方案",
              type: "warning",
              duration: 2000
            });
          }
        } else {
          this.$notify.error({
            title: "错误",
            message: "加载数据失败",
            duration: 2000
          });
        }
      });
    },
    downLoadPractical(url, practicalId) {
      api.addPracticalClick(practicalId);
      window.open(url, "_blank");
    }
  },
  mounted() {}
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
}
.studentHome {
  overflow-y: hidden;
}
.studentHome .el-main {
  padding: 0 !important;
  height: calc(100% - 60px);
}

.practiceStudent {
  width: 100%;
}
.practiceCenter {
  width: 100%;
}
.practiceCenter h2.title {
  height: 64px;
  line-height: 64px;
  font-size: 22px;
  font-weight: 500;
}
.practiceCenter h3 {
  margin-bottom: 14px;
}

.practiceCenter h3.title {
  height: 30px;
  line-height: 30px;
  font-size: 18px;
}

.practiceCenter h3.title span.line {
  display: inline-block;
  width: 3px;
  height: 16px;
  background-color: #409eff;
  -webkit-transform: translateY(2px);
  transform: translateY(2px);
  margin-right: 2px;
}
.practical {
  padding-left: 15px;
  padding-right: 15px;
}
.practiceCenter .el-col {
  margin-top: 24px;
}
.practiceCenter .practice-item .item {
  background-color: #fff;
  padding-bottom: 22px;
  cursor: pointer;
}
.practiceCenter .practice-item .item:hover {
  -webkit-box-shadow: 0 3px 17px 0 rgba(86, 54, 224, 0.17);
  box-shadow: 0 3px 17px 0 rgba(86, 54, 224, 0.17);
}
.practiceCenter .practice-item .item img {
  width: 100%;
  height: 150px;
}
.practiceCenter .practice-item .item .black {
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  color: #333;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.practiceCenter .practice-item .item .sta {
  padding: 0 20px;
}
.practiceCenter .practice-item .item .sta span {
  color: #999;
}
.practiceCenter .practice-item .item .sta span:nth-child(2) {
  margin-left: 18px;
}
.practiceCenter .practice-item .item .sta span:nth-child(2) i {
  display: inline-block;
  width: 14px;
  height: 12px;
}
.practiceCenter .practice-item .item .btn {
  width: 100%;
  height: 42px;
  line-height: 42px;
  text-align: center;
  background-color: #efefef;
  border: 1px solid #efefef;
  color: #333;
  margin-top: 20px;
  cursor: pointer;
  -webkit-transform: translate(-1px);
  transform: translate(-1px);
}
.practiceCenter .practice-item .item .btn i {
  display: inline-block;
  width: 15px;
  height: 15px;
  -webkit-transform: translateY(2px);
  transform: translateY(2px);
}
.practiceCenter .practice-item {
  padding-left: 15px;
  padding-right: 15px;
}
.practiceCenter .practice-item .item .btn:hover {
  background-color: #409eff;
  border: 1px solid #409eff;
  color: #fff;
}
.practiceCenter .practical-item .item {
  cursor: pointer;
  position: relative;
  padding-bottom: 0;
}
.practiceCenter .practice-item .item .videoPlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background-color: #000;
  opacity: 0.4;
  display: none;
  text-align: center;
}
.practiceCenter .practice-item .item .videoPlay img {
  width: 36px;
  height: 36px;
  margin-top: 57px;
}
.practiceCenter .practice-item .item:hover .videoPlay {
  display: inline;
}
.practiceCenter .practice-item .item {
  cursor: pointer;
  position: relative;
}
</style>

