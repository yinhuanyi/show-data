<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu mode="horizontal"
                   :default-active="activeIndex"
                   @select="onMenuselect"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
        </div>
      </template>
      <template>
        <div>这是内容</div>
      </template>
    </el-card>
  </div>
</template>

<script>
   // 之类先将eslint语法检查禁止一下
  /* eslint-disable */
  export default {
    // 2：返回echarts绘图相关的options数据 data
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      onMenuselect (index) {
        this.activeIndex = index
      }
    }

  }
</script>

<style lang="scss" scoped>
  // 3： 设置图表大小
  .echarts {
    width: 100%;
    height: 100%;
  }
  .sales-view {
    margin-top: 20px;
  }
</style>
