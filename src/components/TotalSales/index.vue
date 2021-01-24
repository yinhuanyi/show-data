<template>
  <common-card title="累计销售额" :value="'$ ' + salesToday">
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">{{salesGrowthLastDay}}</span>
          <div class="increase" />
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">{{salesGrowthLastMonth}}</span>
          <div class="decrease" />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额：</span>
      <span class="emphasis">$ {{salesLastDay}}</span>
      <!-- 在这里展示父组件的数据 -->
<!--      <div>从父组件获取的数据：{{reportData}}</div>-->
    </template>
  </common-card>
</template>

<script>
  import commonCardMixin from '../../mixins/commonCardMixin'
  // 引入mixin
  import commonDataMixin from '@/mixins/commonDataMixin'
  export default {
      // 使用mixin
      mixins: [commonCardMixin, commonDataMixin]
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
