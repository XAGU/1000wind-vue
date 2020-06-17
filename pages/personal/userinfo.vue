<template>
  <div class="userinfo">
    <el-main>
      <el-card>
        <h2>个人信息</h2>
        <el-form :rules="rules" :model="myself" size="mini" :inline="true">
          <el-form-item label="昵称" prop="username" label-width="70px" style="width: 45%;">
            <el-input v-model="myself.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" label-width="70px" style="width: 45%;">
            <el-input v-model="myself.realName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="phoneNum" label-width="70px" style="width: 45%;">
            <el-input v-model="myself.phoneNum" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱  " prop="email" label-width="70px" style="width: 45%;">
            <el-input v-model="myself.email" autocomplete="off"></el-input>
          </el-form-item>
          <div class="desc">
            <el-form-item label="个人介绍" prop="desc" label-width="70px" style="width: 100%;">
              <el-input
                v-model="myself.desc"
                type="textarea"
                :autosize="{minRows: 5, maxRows: 20}"
                :rows="10"
                maxlength="600"
                show-word-limit
                style="width: 100%;min-height: 99px;"
              ></el-input>
            </el-form-item>
          </div>
          <el-button
            type="primary"
            @click.native="submit(myself)"
            class="saveInfo"
            style="width: 290px; margin-left: 150px;"
          >修改</el-button>
        </el-form>
      </el-card>
    </el-main>
  </div>
</template>

<script>
import api from "../../utils/api";
import { validEmail, validPhone } from "../../utils/validates";
export default {
  data() {
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        if (!validEmail(value)) {
          callback(new Error("邮箱格式错误！"));
        }
      }
    };
    var validatePhone = (rule, value, callback) => {
      console.log("aaaaaaaa");
      console.log(value);
      if (value === "") {
        callback(new Error("请输入电话"));
      } else {
        if (!validPhone(value)) {
          callback(new Error("手机格式错误！"));
        }
      }
    };
    return {
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        email: [{ validator: validateEmail, trigger: "blur" }],
        phoneNum: [{ validator: validatePhone, trigger: "blur" }]
      }
    };
  },
  asyncData({ req }) {
    if (process.server) {
      if (req && req.headers.cookie) {
        api.setUpCookie(req.headers.cookie);
      }
    }
    return api.getLoginInfo().then(result => {
      if (result.code === api.SUCCESS_CODE) {
        let myself = result.data;
        return {
          myself: myself
        };
      }
    });
  },
  methods: {
    submit(myself) {
      api
        .updateSelfInfo(
          myself.username,
          myself.realName,
          myself.phoneNum,
          myself.email,
          myself.desc
        )
        .then(result => {
          if (result.code == api.SUCCESS_CODE) {
            console.log("aaaaaaaaaa")
            this.$message({
              message: "修改成功",
              type: "success"
            });
          } else{
               console.log("aaaaaaaaaa")
            this.$message.error('修改失败');
          }
        });
    }
  }
};
</script>

<style>
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
.userinfo .desc .el-form-item--mini .el-form-item__content,
.userinfo .desc .el-form-item--mini .el-form-item__label {
  width: 100%;
}
.saveInfo {
  margin-top: 20px;
}
</style>