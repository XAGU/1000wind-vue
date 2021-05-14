<template>
  <div class="attence">
    <el-main>
      <el-card>
        <h2>考勤记录</h2>
        <el-table :data="myCourse" style="margin-top: 20px;" :fit="true" border>
          <el-table-column align="center" prop="courseName" label="课程名称"></el-table-column>
          <el-table-column align="center" prop="teacher.realName" label="课程讲师"></el-table-column>
          <el-table-column align="center" prop="createTime" label="创建时间"></el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-popover placement="left" width="400" trigger="click">
                <el-table :data="signData">
                  <el-table-column property="signTime" label="时间"></el-table-column>
                  <el-table-column label="签到情况"><span style="color: rgb(0, 255, 0);">已签到</span></el-table-column>
                </el-table>
                <el-button slot="reference" type="primary" @click="handleSign(scope.row)" round>查看签到</el-button>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signData: []
    };
  },
  async asyncData({ req,$api }) {
    if (process.server) {
      if (req && req.headers.cookie) {
        $api.setUpCookie(req.headers.cookie);
      }
    }
    let result = await $api.getMyCourse();
    let myCourse = result.data;
    return {
      myCourse: myCourse
    };
  },
  methods: {
    handleSign(row) {
      this.signData = [];
      this.$api.getCourseSign(row.courseId).then(result => {
        if (result.code == this.$api.SUCCESS_CODE) {
          this.signData = result.data;
        } else {
          this.$message.error("获取失败");
        }
      });
    }
  }
};
</script>

<style scoped>
.attence {
  width: 100%;
  height: 100%;
}
</style>