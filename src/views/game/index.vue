<template>
  <div>
    <br/>
    <VerseDialog ref="dialog" @selected="selected"/>
    <el-container>
      <el-header>
        <mr-p-p-header
          sorted=""
          sortByTime="created_at"
          sortByName="title"
          :hasSearch="false"
        >
        
          <el-button-group :inline="true">
            <el-button size="mini" type="primary" @click="addGuide()">
              <font-awesome-icon icon="plus" />
              &nbsp;
              <span class="hidden-sm-and-down">创建【关卡】</span>
            </el-button>
          </el-button-group>
        </mr-p-p-header>
      </el-header>
      <el-main>
        <el-card>
    <el-table
      :data="items"
      style="width: 100%">
      <el-table-column
        prop="order"
        label="顺序"
        width="180">  
        <template slot-scope="scope">
          <el-input type="number" @change="(value) => onchange(scope.row.id, value)" size="mini" v-model="scope.row.order" placeholder="请输入排序"></el-input>
        </template>
        
      </el-table-column>
      <el-table-column
        prop="level_id"
        label="宇宙id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="level.name"
        label="宇宙名"
        width="180">
      </el-table-column>
    
      <el-table-column
        label="操作">
        <template slot-scope="scope">
         <el-button
          size="mini"
          type="danger"
          @click="del(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </el-card>
      </el-main>
      <el-footer>
        <el-card class="box-card">
          <el-pagination
            :current-page="pagination.current"
            :page-count="pagination.count"
            :page-size="pagination.size"
            :total="pagination.total"
            layout="prev, pager, next, jumper"
            background
            @current-change="handleCurrentChange"
          />
        </el-card>
      </el-footer>
    </el-container>
    
  
  </div>
</template>

<script>
import MrPPHeader from '@/components/MrPP/MrPPHeader'
import { putVpGuide, getVpGuides, postVpGuide, deleteVpGuide } from '@/api/v1/vp-guide.js'
import VerseDialog from '@/components/MrPP/VerseDialog.vue'
export default {
  name: 'GameIndex',

  components: {
    VerseDialog,
    MrPPHeader,
  },
  mounted() {
   this.refresh()
  },
  methods: {
    
    async onchange(id, val) {
      try {
        await this.$confirm('修改排序?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await putVpGuide(id, {order:val})
        await this.refresh()
        this.$message({
          type: 'success',
          message: '修改成功!'
        })
      } catch (e) {
        console.error(e)
        this.$message({
          type: 'info',
          message: '已取消修改'
        })
      }
    },
    selected(item) { 
      postVpGuide({level_id:item.data.id}).then(res => {
        this.$message({
          type: 'success',
          message: '添加成功!'
        })
        this.refresh()
      })
    },
    addGuide() {
      this.$refs.dialog.open()
    },
    async del(id) {
     
      try {
        await this.$confirm('此操作将永久删除该【关卡】, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await deleteVpGuide(id)
        await this.refresh()
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      } catch (e) {
        console.error(e)
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      }
     
    },
   async refresh() {
     const response = await getVpGuides(this.pagination.current)
     this.items = response.data
     this.pagination = {
        current: parseInt(response.headers['x-pagination-current-page']),
        count: parseInt(response.headers['x-pagination-page-count']),
        size: parseInt(response.headers['x-pagination-per-page']),
        total: parseInt(response.headers['x-pagination-total-count'])
      }
    
    },
    handleCurrentChange(val) {
      this.pagination.current = val
      this.refresh()
    },
  },
  
  data() {
    return {
      items: null,
      pagination: { current: 1, count: 1, size: 20, total: 20 },
      
    }
  }
}
</script>
