<template>
  <div>
    <div class="guide-header font-style">
      <!-- header布局开始 -->
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="12" :lg="14" :xl="14">
          <div>
            <ul class="guide-header-ul">
              <li><a>工作文档</a></li>
              <li><a>搭建中</a></li>
              <li><a>搭建中</a></li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="10" :xl="10">
          <div class="guide-header-search">
            <el-input
              v-model="input"
              size="mini"
              style="width: 80%; min-width: 200px"
              placeholder="搜索名称"
              class="input-with-select"
              @keyup.enter.native="keyDown"
            >
              <el-button
                slot="append"
                icon="el-icon-search"
                size="mini"
                @click="search"
              />
            </el-input>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- header结束 -->
    <!-- main star -->
    <div class="guide-main font-style">
      <div class="guide-main-box">
        <div style="text-align: center">
          <h3 style="color:#308831">工作文档</h3>
          <p>
            /document/workdata
            目录下设doing（工作进展）,vresion（历史版本）<br> waittest（单元测试，组件封装测试准备）三大板块
          </p>
        </div>
        <hr style=" height:10px;border:none;border-top:10px groove skyblue;">
        <br>
        <h4 class="font-color">目前进行中工作</h4>
        <p>1.mrppcropper组件 <br> 2.论坛组件抽取，插件相关工作</p>
        <hr style="height:1px;border:none;border-top:1px dashed #0066CC;">
        <h4 class="font-color">vresion版本说明</h4>
        <p>src/document/workdata/vrsions目录:<br>/index2:初级版本, /index3:无sidebar常规布局，/index4:无sidebar的fixed版本<br>
          /index5:sidebar常规浅色版本， /index6:sidebar 渐变色fixed版本
        </p>
        <hr style="height:1px;border:none;border-top:1px dashed #0066CC;">
      </div>
    </div>

    <!-- footer star -->
    <div class="guide-footer">
      <mr-p-p-footer />
    </div>
  </div>
</template>

<script>
import MrPPFooter from '@/components/MrPP/MrPPFooter'
export default {
  name: 'DocumentIndex',
  components: {
    MrPPFooter
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
// 头部样式
.guide-header {
  width: 100%;
  line-height: 60px;
  background: #cadbe2;
  overflow: hidden;
  .guide-header-ul {
    line-height: 0px;
    min-width: 500px;
    margin-left: 14%;
  }
  .guide-header-ul li {
    list-style-type: none;
    display: inline;
    padding-right: 10%;
    line-height: 30px;
    font-size: 16px;
    font-weight: 700;
    color: rgb(101, 132, 136);
  }
  .guide-header-ul a:hover {
    color: rgb(74, 168, 180);
  }
  .guide-header-search {
    margin: 0 65px 0 120px;
  }
}
// main样式开始
.guide-main {
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 110px);
  background-color: rgb(236, 243, 241);
  margin: 0;
  padding: 40px 0 30px;
}
.guide-main-box {
  border-radius: 6px;
  width: 84%;
  min-height: calc(100vh - 110px);
  margin: 0 auto;
  padding: 30px 50px;
  // text-align: center;
  background-color: #fff;
}
.guide-footer {
  width: 100%;
  height: 80px;
  background: #cadbe2;
}
.font-color{
  color: #334157;
}
.font-style {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
</style>
