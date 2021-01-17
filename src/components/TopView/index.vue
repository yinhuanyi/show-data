<template>
  <div class="top-view">
    <!-- gutter指的是每个col的间隔 -->
    <el-row :gutter="20">
      <!-- span指的是每个col占6格 -->
      <el-col :span="6">
        <!-- padding是让文字的周围具有20的边距 -->
        <el-card shadow="hover" :body-style="{padding: 20}">
          <total-sales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-order />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import TotalSales from '../TotalSales'
  import TotalOrder from '../TotalOrder'
  import TodayUsers from '../TodayUsers'
  import TotalUsers from '../TotalUsers'
  export default {
    components: {
      TotalSales,
      TotalOrder,
      TodayUsers,
      TotalUsers
    }
  }
</script>

<style scoped>

</style>
