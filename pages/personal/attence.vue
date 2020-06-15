<template>
  <div class="attence">
    <el-main>
      <el-card>
         <h2>考勤记录</h2>
        <el-table data="" style="margin-top: 20px;" :fit="true" border>
          <el-table-column align="center" prop="createTime" label="序号"></el-table-column>
          <el-table-column align="center" prop="courseName" label="课程名称"></el-table-column>
          <el-table-column align="center" prop="courseName" label="课程讲师"></el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button type="primary" @click="handleSign(scope.$index, scope.row)" round>查看签到</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-main>
  </div>
</template>

<script>
import api from "../../utils/api";
export default {};
</script>

<style scoped>
.attence {
  width: 100%;
  height: 100%;
}
</style>