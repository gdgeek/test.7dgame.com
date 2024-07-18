<template>
  <div style="padding:20px 20px">
    <el-card>
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column
          prop="number"
          label="订单号"
          width="180"
        />
        <el-table-column
          prop="time"
          label="订单时间"
          width="180"
        />
        <el-table-column
          prop="amount"
          label="金额"
          width="180"
        />
        <!-- <el-table-column
          prop="orderstate"
          label="订单状态"
          width="180"
        />
        <el-table-column
          prop="operate"
          label="操作"
          width="180"
        /> -->
      </el-table>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'Orderfrom',

  data() {
    return {
      tableData: [{
        number: '23213FFSA231',
        time: '2022-3-30',
        amount: '50'
      }, {
        number: 'adga31231231',
        time: '2022-3-30',
        amount: '120'
      }, {
        number: 'qseq31231231',
        time: '2022-3-30',
        amount: '120'
      }]
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      console.log(row, 'row')
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 2) {
        return 'success-row'
      }
      return ''
    }
  }

}
</script>

<style lang="scss" scoped>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
