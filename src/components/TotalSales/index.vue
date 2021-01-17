<template>
  <!-- 使用mixin中的common-card组件 -->
  <!-- title和value是给子组件传递的数据 -->
  <common-card title="累计销售额" value="$ 1999">
    <!-- 在chart这个slot里面，添加数据 -->
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <div class="increase" />
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">7.33%</span>
          <div class="decrease" />
        </div>
      </div>
    </template>
    <!--  指定给子组件的footer插槽，添加数据  -->
    <template v-slot:footer>
      <span>昨日销售额：</span>
      <span class="emphasis">$ 300</span>
    </template>
  </common-card>

</template>

<script>
  // 导入mixin
  import commonCardMixin from '../../mixins/commonCardMixin'
  // 应用mixin
  export default {
      mixins: [commonCardMixin]
  }
</script>

<style lang="scss" scoped>
  .compare-wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .compare{
      // background: yellow;
      // height: 50%;
      display: flex;
      align-content: center;
      font-size: 12px;
      margin-top: 3px;
      color: #666;
    }
  }

</style>
