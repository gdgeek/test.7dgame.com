<template>
  <el-tabs v-model="activeName" type="border-card" style="min-height:620px" @tab-click="handleClick">
    <!-- first tab -->
    <el-tab-pane label="动态" name="first">动态
      <!-- <p>{{ userData }}</p> -->
    </el-tab-pane>
    <!-- second tab -->
    <el-tab-pane label="帖子" name="second">帖子</el-tab-pane>
    <!-- third tab -->
    <el-tab-pane label="收藏" name="third">
      <div>收藏</div>

    </el-tab-pane>
  </el-tabs>
</template>

<script>

export default {
  name: 'MrPPUserMain',

  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event, this.activeName, 'tabevent')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
