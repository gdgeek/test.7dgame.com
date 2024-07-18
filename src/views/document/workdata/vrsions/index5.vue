<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div class="el-header-title">
        <span>Wellcome to MrPP</span>
      </div>
      <el-input
        v-model="input"
        size="mini"
        style="width: 220px"
        placeholder="搜索名称"
        class="input-with-select"
      >
        <el-button slot="append" icon="el-icon-search" size="mini" />
      </el-input>
    </el-header>
    <!-- 头部区域结束 -->
    <!-- 页面主体 -->
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside width="200px">
        <!-- 激活router 以index路径跳转 -->
        <el-menu
          class="el-aside-menu"
          router
          :default-openeds="['1']"
          unique-opened
          background-color="#e9efed"
          text-color="#475659"
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
        <router-view />
        演示文档
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
  min-height: calc(100vh - 110px);
}
.el-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background:#cadbe2;
  &-title {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    color: #495d7c;
  }
}
.el-aside {
  background-color: #e9efed;
  .el-menu{
    text-align: center;
  }
  &-subtitle {
    font-weight: 700;
  }
}
.el-main {
  min-height: calc(100vh - 110px);
  background-color: #fff;
  padding: 30px;
}
.font-style {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
</style>
