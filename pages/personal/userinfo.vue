<template>
  <div class="userinfo">
    <el-main>
      <el-card>
        <h2>个人信息</h2>
        <el-form ref="form" :model="userinfo" size="mini" inline="true">
          <el-form-item label="昵称" label-width="70px" style="width: 45%;">
            <el-input v-model="aaa" autocomplete="off" suffix-icon="“xxxx”"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" label-width="70px" style="width: 45%;">
            <el-input v-model="aaa" autocomplete="off" suffix-icon="“xxxx”"></el-input>
          </el-form-item>
          <el-form-item label="手机" label-width="70px" style="width: 45%;">
            <el-input v-model="aaaa" autocomplete="off" suffix-icon="“xxxx”"></el-input>
          </el-form-item>
          <el-form-item label="邮箱  " label-width="70px" style="width: 45%;">
            <el-input v-model="aaaa" autocomplete="off" suffix-icon="“xxxx”"></el-input>
          </el-form-item>
          <el-form-item label="个人介绍" prop="desc" label-width="70px">
            <el-input
              type="textarea"
              autosize
              maxlength="60"
              show-word-limit
              style="width: 100%;min-height: 99px;"
            ></el-input>
          </el-form-item>
        </el-form>
      </el-card>
    </el-main>
  </div>
</template>

<script>
import api from "../../utils/api";
export default {};
</script>

<style scoped>
.userinfo {
  width: 100%;
  height: 100%;
}
.userinfo .el-form {
  margin: 0;
  padding: 40px 200px;
  background: #f7f8fa;
}
.userinfo .el-form .el-form-item {
  margin-bottom: 14px;
  width: 50%;
}
.userinfo .el-form .el-form-item .el-form-item__label {
  color: #666;
  font-size: 14px;
  text-align: right;
  width: 60px;
}
</style>