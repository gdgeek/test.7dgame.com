<template>
  <div>
    <div class="guide-header">
      <!-- header布局开始 -->
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="12" :lg="14" :xl="14">
          <div>
            <ul class="guide-header-ul">
              <li><a>介绍</a></li><li><a>文档</a></li><li><a>帮助</a></li>
            </ul></div>
        </el-col>
        <el-col :xs="18" :sm="12" :md="12" :lg="10" :xl="10">
          <div class="guide-header-search">
            <el-input
              v-model="input"
              size="mini"
              style="width: 80%;min-width:200px"
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
    <div class="guide-main">
      <div class="guide-main-box">
        <!-- 引入开始 -->
        <div slot="header" style="text-align: center">
          <font-awesome-icon icon="globe" />
          <b id="title">{{ title }}</b>
          <small id="date" class="pull-right">{{ date }}</small>
        </div>
        <div class="box-item">
          <aside style="margin-top: 15px">
            <p
              id="content"
              class="text-muted well well-sm no-shadow"
              style="margin: 20px"
              v-html="content"
            />
          </aside>
        </div>
        <!-- 引入结束 -->
        <div style="text-align: center">
          <br>
          <h2>34324</h2>
          <h3>4141</h3>
          <h1>414</h1>
          <h2>34324</h2>
          <h3>4141</h3>
          <h1>414</h1>
          <h2>34324</h2>
          <h3>4141</h3>
          <h1>414</h1>
          <h2>34324</h2>

          <h1>414</h1>
          <h2>34324</h2>
          <h3>4141</h3>
          <h1>414</h1>
        </div>
      </div>
    </div>

    <!-- footer star -->
    <div class="guide-footer">
      <mr-p-p-footer />

    </div>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import request from '@/utils/request'
import MrPPFooter from '@/components/MrPP/MrPPFooter'
export default {
  name: 'DocumentIndex',
  components: {
    MrPPFooter
  },
  data() {
    return {
      title: '标题',
      content: '载入中....',
      date: 'Date: 2/10/2014'
    }
  },
  computed: {
    ...mapState({
      document: state => state.document.index
    })
  },
  created: function() {
    request({
      url: this.document + 'posts/872',
      method: 'get'
    }).then(response => {
      this.title = response.data.title.rendered
      this.content = response.data.content.rendered
      this.date = response.data.date
    })
  },
  methods: {
    ...mapMutations(['setTitle', 'setSubTitle', 'setBreadcrumbs'])
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
    list-style-type:none;
    display:inline;
    padding-right: 12%;
    line-height: 30px;
    font-size: 16px;
    font-weight:700;
    color:  rgb(101, 132, 136);
  }
  .guide-header-ul a:hover {
    color: rgb(74, 168, 180);
  }
  .guide-header-search {
    margin: 0 70px 0 100px;
  }
}
// main样式开始
.guide-main {
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 110px);
  background-color:rgb(236, 243, 241);
  margin: 0;
  padding: 40px 0 30px;
}
.guide-main-box {
  border-radius: 6px;
  width: 84%;
  min-height: calc(100vh - 140px);
  margin: 0 auto;
  padding: 30px 50px;
  // text-align: center;
  background-color:#fff;
}
.guide-footer{
  width: 100%;
  height: 80px;
  background: #cadbe2;
}
</style>
