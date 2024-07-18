<template>
  <!-- 设计和实施 -->
  <section class="sandtable-section">
    <br />
    <div align="center">
      <h1 class="section-title-size section-title-dark title-lighter">
        设计和实施
      </h1>
      <p class="f-text-color">创新架构体系，成熟的设计和实施方案</p>
      <p class="section-underline-blue" />
      <br />
    </div>
    <div style="padding: 0 20px">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :md="10" :lg="12" :xl="12">
          <div class="system-section-content">
            <el-divider />
            <ul style="font-size: 15px; color: #666666">
              <li class="system-content-box">
                本着让⽤户有更好体验的原则，本平台在设计中结合了CS（AR设备和后台通信）BS（前端和后端通信两种
                设计模式综合使⽤。
              </li>
            </ul>
            <el-divider />
            <ul style="font-size: 15px; color: #666666">
              <li class="system-content-box">
                服务器-客户机，即Client-Server(C/S)结构。C/S结构通常采取两层结构。服务器负责数据的管理，客户
                机负责完成与⽤户的交互任务。
              </li>
            </ul>
            <el-divider />
            <ul style="font-size: 15px; color: #666666">
              <li class="system-content-box">
                B/S结构（Browser/Server，浏览器/服务器模式），是WEB兴起后的⼀种⽹络结构模式，WEB浏览器是客
                户端最主要的应⽤软件。这种模式统⼀了客户端，将系统功能实现的核⼼部分集中到服务器上，简化了系
                统的开发、维护和使⽤。客户机上只要安装⼀个浏览器，如Chrome、Safari、Microsoft
                Edge或Internet
                Explorer，服务器安装SQLServer、Oracle、MYSQL等数据库。浏览器通过Web
                Server 同数据库进⾏数据交互。
              </li>
            </ul>
          </div>
          <br />
        </el-col>
        <el-col :xs="24" :sm="24" :md="14" :lg="12" :xl="12" align="center">
          <div
            style="background-color: #f8f8f8; padding: 5%"
            class="section-radius"
          >
            <img src="/media/bg/cloudbgc5.jpg" style="width: 100%" />
          </div>
        </el-col>
      </el-row>
      <br />
      <!-- 实施方案 -->
      <el-row :gutter="20">
        <h4>实施方案（建设中）</h4>
        <el-col :span="6">1. 项⽬概述</el-col>
        <el-col :span="6">2.安装部署计划</el-col>
        <el-col :span="6">3. ⽂档以及教程提供</el-col>
        <el-col :span="6">4. 后期服务</el-col>
        <!-- 待写 -->
      </el-row>
    </div>
    <br />
    <br />
  </section>
</template>

<script>
export default {
  name: 'EducationSystem',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '~@/styles/screenstyle.scss';
@import '~@/styles/sandtable.scss';
.system-section-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 30px;
  min-height: 460px;
  // transition: width 2 s;
}
</style>
