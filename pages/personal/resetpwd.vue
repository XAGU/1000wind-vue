<template>
  <div class="resetpwd">
    <el-main>
      <el-card>
        <el-form ref="form" :model="userinfo" size="small">
          <el-form-item label="手机号：" label-width="110px">
            <span class="content" style="font-weight: 700;">15572766407</span>
          </el-form-item>
          <el-form-item label="图形验证码：" label-width="110px" :autofocus="true">
            <el-input v-model="aaa" placeholder="请输入图形验证码" autocomplete="off"></el-input>
            <div class="right">
              <div>
                <img
                  src="data:image/jpg;base64,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"
                  class="code"
                />
              </div>
            </div>
          </el-form-item>
          <el-form-item label="邮箱验证码：" label-width="110px">
            <el-input v-model="aaaa" placeholder="请输邮箱验证码" autocomplete="off"></el-input>
            <div class="fl">
              <el-button type="primary" class="getPhoneCode">获取短信验证码</el-button>
            </div>
          </el-form-item>
          <el-form-item label="新密码：" label-width="110px" :required="true">
            <el-input v-model="aaaa" placeholder="请输新密码" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认新密码：" label-width="110px" :required="true">
            <el-input v-model="aaaa" placeholder="请确认新密码码" autocomplete="off"></el-input>
          </el-form-item>
          <el-button type="primary" class="submitBtn" style="width: 290px; margin-left: 110px;">修改密码</el-button>
        </el-form>
      </el-card>
    </el-main>
  </div>
</template>

<script>
export default {};
</script>

<style>
.resetpwd {
  width: 100%;
  height: 100%;
}
.resetpwd .el-form {
  width: 500px;
  margin: 52px auto;
  color: #333;
}
.resetpwd .el-form .el-form-item {
  margin-bottom: 30px;
  height: 44px;
  line-height: 44px;
}
.resetpwd .el-form .el-form-item .el-form-item__content {
  width: 100%;
  height: 100%;
  line-height: 40px;
}
.resetpwd .el-form .el-form-item .el-form-item__content .el-input {
  height: 100%;
  line-height: 100%;
  background: none;
  width: 290px;
  float: left;
}
.resetpwd .el-form .el-form-item .el-form-item__content .el-input {
  height: 38px !important;
  line-height: 38px !important;
  margin-top: 2px;
}
.resetpwd
  .el-form
  .el-form-item
  .el-form-item__content
  .el-input
  .el-input__inner {
  border-radius: 20px;
}
.resetpwd .el-form .el-form-item .el-form-item__content .el-input input {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  height: 100%;
  line-height: 100%;
  overflow: hidden;
  border: 1px solid #ccc;
  background: none;
  font-size: 15px;
  padding-left: 20px;
  font-size: 14px !important;
}
.resetpwd .el-form .el-form-item .el-form-item__content .right {
  float: left;
  width: 108px;
  height: 38px;
  border: 1px solid #ccc;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #fff;
  margin-top: 2px;
  font-size: 14px;
  border-radius: 19px;
  margin-left: 10px;
  position: relative;
}
.resetpwd .el-form .el-form-item .el-form-item__content .right img {
  border-radius: 100px;
  height: 78%;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 4px;
  cursor: pointer;
}
.resetpwd .el-form .el-form-item .el-form-item__content .getPhoneCode {
  width: 84px;
  height: 38px !important;
  font-size: 12px;
  font-weight: 400;
  background: #fff;
  border: 1px solid #409eff;
  color: #409eff;
  line-height: 38px !important;
  border-radius: 20px;
  padding: 0;
  margin-top: 2px;
}
.resetpwd .el-form .el-form-item .el-form-item__content .el-button {
  width: 120px;
  height: 44px;
}
.resetpwd .el-form .el-form-item .el-button {
  margin-left: 10px;
  padding: 12px 10px;
}
.resetpwd .submitBtn {
    width: 110px;
    height: 38px;
    line-height: 38px;
    padding: 0;
    border: none;
    border-radius: 22px;
}
</style>