<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div class="el-header-title font-style">
        <span>Wellcome to MrPP</span>
      </div>
      <div class="el-header-search">
        <el-input
          v-model="input"
          size="mini"
          style="width: 220px"
          placeholder="搜索名称"
        >
          <el-button slot="append" icon="el-icon-search" size="mini" />
        </el-input>
      </div>
    </el-header>
    <!-- 头部区域结束 -->
    <!-- 页面主体 -->
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside width="196px" class="font-style">
        <!-- 激活router 以index路径跳转 -->
        <el-menu
          class="el-aside-menu"
          router
          :default-openeds="['1','2']"
          unique-opened
          background-color="#e9efed"
          text-color="#475659"
          active-text-color="#61c08c"
        >
          <el-submenu index="1">
            <template slot="title">
              <div class="el-aside-subtitle">
                <!-- <i class="el-icon-location" /> -->
                介绍
              </div>
            </template>
            <el-menu-item index="/main1">欢迎</el-menu-item>
            <el-menu-item index="/main2">开启旅程</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <div class="el-aside-subtitle">
                <!-- <i class="el-icon-location" /> -->
                文档
              </div>
            </template>
            <el-menu-item index="/main1">教程</el-menu-item>
            <el-menu-item index="/main2">示例</el-menu-item>
            <el-menu-item index="/main1">选项3</el-menu-item>
            <el-menu-item index="/main2">选项4</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <div class="el-aside-subtitle">
                <!-- <i class="el-icon-location" /> -->
                生态
              </div>
            </template>
            <el-menu-item index="/main1">帮助</el-menu-item>
            <el-menu-item index="/main2">合作伙伴</el-menu-item>
            <el-menu-item index="/main1">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧主内容 -->
      <el-main class="font-style">
        <!-- router页面跳转 -->
        <router-view />
        <!-- router页面跳转结束 -->
        <p>
          In order to receive the best answers to your questions please follow
          these simple guidelines. Be descriptive about your question or problem
          and be sure to include any errors. Single line topics will rarely
          receive answers and do not just post a screenshot. Provide examples of
          the code in question and use syntax highlighting. Breakdown the issue
          in your code and provide a link to an example that replicates it. Use
          JSFiddle, CodePen, JSBin, or CodeSandbox. Following these few steps
          will greatly improve your chances of getting a good quality answer to
          your issue. Remember, everyone is here to share ideas and to help out
          using their own free time. Making an effort to craft a well thought
          out topic pays tribute to this.
        </p>
      </el-main>
    </el-container>
    <!-- 页面主体结束 -->
  </el-container>
</template>

<script>
export default {
  name: 'DocumentIndex',
  methods: {}
}
</script>

<style lang="scss" scoped>
.home-container {
  min-height: 90vh;
}
.el-header {
  position: fixed;
  z-index: 100;
  width: 100%;
  min-width: 700px;
  line-height: 60px;
  text-align: right;
  padding-right: 3rem;
  // background: #cadbe2;
  background: rgb(117, 195, 214);
  background: linear-gradient(
    333deg,
    rgba(117, 195, 214, 0.986453956582633) 23%,
    rgba(161, 228, 216, 1) 76%
  );
  &-title {
    position: relative;
    float: left;
    font-size: 20px;
    font-weight: 700;
    color: #2f3e50;
  }
  &-search {
    position: relative;
    float: right;
    margin-right: 170px;
    position: relative;
  }
}
.el-aside {
  position: fixed;
  z-index: 10;
  top: 50px;
  bottom: 0;
  padding-top: 60px;
  overflow-y: auto;
  box-sizing: border-box;
  color: #333;
  border-right: 1pxsolid #eaecef;
  background-color: #e9efed;
  .el-menu {
    text-align: center;
  }
  &-subtitle {
    font-weight: 700;
    color: #495d7c;
  }
}

.el-main {
  min-height: calc(100vh - 110px);
  width: 100%;
  background-color: #fff;
  margin: 50px 0 0 240px;
  overflow-y: auto;
  padding: 50px 40px 30px 0;
}
.font-style {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
</style>
