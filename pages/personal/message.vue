<template>
  <div class="message">
    <el-main>
      <el-card>
        <h2>我的消息</h2>
        <el-tabs>
          <el-tab-pane label="消息列表">
            <div class="cardItem" v-for="(item,index) in message" :key="index">
              <i class="el-icon-bell typeIcon" style="background: rgb(255, 149, 0);"></i>
              <div class="clear-fix">
                <span class="tip float-left" style="color: rgb(255, 149, 0);">[公告]</span>
                <h2>{{item.messageName}}</h2>
                <i class="el-icon-delete float-right"></i>
                <div class="content">
                  <p>{{item.messageContent}}</p>
                </div>
                <span class="time float-left">{{item.createTime}}</span>
              </div>
              <el-button class="more" type="text">
                <span>查看更多</span>
              </el-button>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-main>
  </div>
</template>

<script>
export default {
  async asyncData({ req,$api }) {
    let result = await $api.getMessages();
    let message = result.data;
    return {
      message: message
    };
  }
};
</script>

<style scoped>
.message {
  width: 100%;
  height: 100%;
}
/* 消息内容 */
.stuInformationList .el-card .cardItem {
  border-radius: 10px;
  margin-top: 20px;
  position: relative;
  background: #f7f8fa;
  padding: 20px 20px 20px 80px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
}
.stuInformationList .el-card .cardItem i.typeIcon {
  position: absolute;
  font-size: 20px;
  top: 40px;
  left: 30px;
  padding: 8px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 50%;
}
.stuInformationList .el-card .cardItem .tip {
  padding: 1px 4px;
  font-size: 14px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-right: 10px;
  border-radius: 2px;
  margin: 14px 0;
}
.stuInformationList .el-card .cardItem h2 {
  font-size: 16px;
  color: #2c3645;
  margin: 14px 0;
}
.stuInformationList .el-card .cardItem i.el-icon-delete {
  color: #666;
  padding: 4px;
  font-size: 16px;
  background: none;
  border-radius: 50%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
.stuInformationList .el-card .cardItem .content {
  font-size: 16px;
  color: #2c3645;
  margin: 14px 0;
  word-break: break-all;
  word-wrap: break-word;
}
.stuInformationList .el-card .cardItem .content p {
  display: inline-block;
  margin: 0;
}
.stuInformationList .el-card .cardItem p {
  font-size: 16px;
  color: #2c3645;
  margin: 14px 0;
  word-break: break-all;
  word-wrap: break-word;
}
.stuInformationList .el-card .cardItem .time {
  font-size: 14px;
  color: #888;
}
.stuInformationList .el-card .cardItem .more {
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: #409eff;
}
.stuInformationList .el-card .cardItem .more span {
  font-size: 13px;
}
</style>