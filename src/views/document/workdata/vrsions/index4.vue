<template>
  <div>
    <!-- header star -->
    <el-container>
      <el-header class="guide-header">
        <div>
          <ul class="guide-header-ul">
            <li><a>介绍</a></li>
            <li><a>文档</a></li>
            <li><a>生态</a></li>
            <li style="margin-left: 50px">
              <el-input
                v-model="input"
                size="mini"
                style="width: 220px"
                placeholder="搜索名称"
                class="input-with-select"
              >
                <el-button slot="append" icon="el-icon-search" size="mini" />
              </el-input>
            </li>
          </ul>
        </div>
      </el-header>

      <!-- header end -->
      <!-- main star -->
      <el-main class="guide-main">
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
          <div>
            <br>
            <h2>34324</h2>
            <p>
              In order to receive the best answers to your questions please
              follow these simple guidelines. Be descriptive about your question
              or problem and be sure to include any errors. Single line topics
              will rarely receive answers and do not just post a screenshot.
              Provide examples of the code in question and use syntax
              highlighting. Breakdown the issue in your code and provide a link
              to an example that replicates it. Use JSFiddle, CodePen, JSBin, or
              CodeSandbox. Following these few steps will greatly improve your
              chances of getting a good quality answer to your issue. Remember,
              everyone is here to share ideas and to help out using their own
              free time. Making an effort to craft a well thought out topic pays
              tribute to this.
            </p>
            <p>
              Vue (pronounced /vjuː/, like view) is a progressive framework for
              building user interfaces. Unlike other monolithic frameworks, Vue
              is designed from the ground up to be incrementally adoptable. The
              core library is focused on the view layer only, and is easy to
              pick up and integrate with other libraries or existing projects.
              On the other hand, Vue is also perfectly capable of powering
              sophisticated Single-Page Applications when used in combination
              with modern tooling and supporting libraries. If you’d like to
              learn more about Vue before diving in, we created a video walking
              through the core principles and a sample project. If you are an
              experienced frontend developer and want to know how Vue compares
              to other libraries/frameworks, check out the Comparison with Other
              Frameworks.
            </p>
          </div>
          <!-- 引入结束 -->
        </div>
      </el-main>
      <!-- main end -->
      <!-- footer star -->
      <el-fooder class="guide-footer">
        <mr-p-p-footer />
      </el-fooder>
      <!-- footer end -->
    </el-container>
    <!-- 布局结束 -->
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
.guide-header {
  // 头部样式
  position: fixed;
  z-index: 100;
  width: 100%;
  text-align: right;
  padding-right: 5em;
  align-items: center;
  background: #cadbe2;
  .guide-header-ul {
     align-items: center;
     margin-right: 100px;
  }
  .guide-header-ul li {
    list-style-type: none;
    display: inline-block;
    margin-right: 4.8%;
    font-size: 16px;
    font-weight: 700;
    color: rgb(101, 132, 136);
  }
  .guide-header-ul a:hover {
    color: rgb(74, 168, 180);
  }
}

// main样式开始
.guide-main {
  margin-top: 55px;
  width: 100%;
  height: 100%;
  min-height: 80vh;
  background-color: rgb(236, 243, 241);
  padding: 40px 0 30px;
}

.guide-main-box {
  width: 82%;
  min-height: 80vh;
  margin: 0 auto;
  padding: 50px 50px;
  border-radius: 6px;
  background-color: #fff;
}
//footer样式开始
.guide-footer {
  width: 100%;
  height: 80px;
  background: #cadbe2;
}
</style>
