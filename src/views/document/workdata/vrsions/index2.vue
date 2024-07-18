<template>
  <div>
    <!-- 试下这个布局 -->

    <!-- 布局记录 -->
    <el-container>
      <el-header class="guide-header">
        <el-input
          v-model="input"
          size="mini"
          style="width:220px"
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
      </el-header>
      <el-container>
        <!-- 1 -->
        <!-- 1 end -->
        <el-aside width="180px" class="guide-sidebar">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"><span class="sidebar-title"><i class="el-icon-s-promotion" />介绍</span></template>
              <el-menu-item-group>
                <template slot="title">1-1</template>
                <el-menu-item index="1-1">来探险吧</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="1-2">
                <el-menu-item index="1-2">开启旅程</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 第一组结束 -->
            <el-submenu index="2">
              <template slot="title"><span class="sidebar-title"><i class="el-icon-s-platform" />开发</span></template>
              <el-menu-item-group>
                <template slot="title">2-1</template>
                <el-menu-item index="2-1">创作进阶</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="2-2">
                <el-menu-item index="2-2">工程示例</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 第二组结束 -->
            <el-submenu index="3">
              <template slot="title"><span class="sidebar-title"><i class="el-icon-s-help" />帮助</span></template>
              <el-menu-item-group>
                <template slot="title">3-1</template>
                <el-menu-item index="3-1">支持</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="3- 2">
                <el-menu-item index="3-2">常见问题</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main class="guide-main">Main
          <h4>12345</h4>
          <div class="testpic"><a href="" /></div>
          <h4>12345</h4>
          <h4>12345</h4>
          <h4>12345</h4>
          <h4>12345</h4>
          <h4>12345</h4>
          <h2>3212312</h2>

          <h4>12345</h4>
          <h4>12345</h4>
          <h4>12345</h4>
          <h4>12345</h4>
          <h2>3212312</h2>
          <p>Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：

            我们已经成功创建了第一个 Vue 应用！看起来这跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。现在数据和 DOM 已经被建立了关联，所有东西都是响应式的。我们要怎么确认呢？打开你的浏览器的 JavaScript 控制台 (就在这个页面打开)，并修改 app.message 的值，你将看到上例相应地更新。

            注意我们不再和 HTML 直接交互了。一个 Vue 应用会将其挂载到一个 DOM 元素上 (对于这个例子是 #app) 然后对其进行完全控制。那个 HTML 是我们的入口，但其余都会发生在新创建的 Vue 实例内部。

            除了文本插值，我们还可以像这样来绑定元素 attribute：

            这里我们遇到了一点新东西。你看到的 v-bind attribute 被称为指令。指令带有前缀 v-，以表示它们是 Vue 提供的特殊 attribute。可能你已经猜到了，它们会在渲染的 DOM 上应用特殊的响应式行为。在这里，该指令的意思是：“将这个元素节点的 title attribute 和 Vue 实例的 message property 保持一致”。

            如果你再次打开浏览器的 JavaScript 控制台，输入 app2.message = '新消息'，就会再一次看到这个绑定了 title attribute 的 HTML 已经进行了更新。

            条件与循环
            观看本节视频讲解
            控制切换一个元素是否显示也相当简单：

            继续在控制台输入 app3.seen = false，你会发现之前显示的消息消失了。

            这个例子演示了我们不仅可以把数据绑定到 DOM 文本或 attribute，还可以绑定到 DOM 结构。此外，Vue 也提供一个强大的过渡效果系统，可以在 Vue 插入/更新/移除元素时自动应用过渡效果。

            还有其它很多指令，每个都有特殊的功能。例如，v-for 指令可以绑定数组的数据来渲染一个项目列表：
          </p>
          <h4>43432</h4>

        </el-main>

      </el-container>
    </el-container>
    <!-- 布局结束 -->

  </div>

</template>

<script>
export default {
  name: 'DocumentIndex',
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  },
  computed: {},
  created: function() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.guide-header {
  // 简单样式
  position: fixed;
  z-index: 2;
  width: 100%;
  text-align: right;
  padding-right: 14em;
  line-height: 60px;
  background: #cadbe2;
}

.guide-sidebar {
  position: fixed;
  z-index: 1;
  overflow-x: hidden !important;
  overflow-y:scroll;
  height: 100%;
  padding: 50px 0;
  color: #333;
  // background-color: rgb(238, 241, 246);

  .sidebar-title {
    padding-left: 14px;
    font-weight:600;
    line-height: 0px;
  }
}
.guide-main {
margin-top: 70px;
margin-left: 200px;
}
</style>
