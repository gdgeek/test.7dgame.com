<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <b>用户信息</b>
        :
      </div>
      <div class="box-item">
        <el-descriptions :column="2" :size="'mini'" border>
          <!-- <template slot="extra">
                          <el-button type="primary" size="small">操作</el-button>
                        </template> -->
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user" />
              性别
            </template>
            男
            <i class="el-icon-male" />
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-tickets" />
              行业
            </template>
            <el-tag size="mini">科技行业</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-location-outline" />
              <!-- <font-awesome-icon class="icon" icon="cube" /> -->
              居住地
            </template>
            苏州市吴中大道
          </el-descriptions-item>
        </el-descriptions>

        <aside style="margin-top: 10px; margin-bottom: 15px; float: right">
          <el-button type="primary" plain size="mini" @click="gotoPeople()">
            <i class="el-icon-edit" />
            进入b
          </el-button>
        </aside>
      </div>
    </el-card>
    <br />
  </div>
</template>

<script>
export default {
  name: 'MrPPUserProfile',
  data() {
    return {}
  },
  methods: {
    gotoPeople() {
      this.$router.push({ path: '/settings/people' })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-col {
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #282a2b;
}
// .info-title{
//   height:39px;
//   font-weight: 700;
//   color: #666666;
//   line-height:39px;
//   border-bottom: 1px solid #e2e5ec
// }
.info-content-label {
  width: 70px;
}
.info-content-label-link:hover {
  color: #40a0ffd0;
  text-decoration: underline;
}
.info-content-label-link {
  color: #409eff;
}
</style>
