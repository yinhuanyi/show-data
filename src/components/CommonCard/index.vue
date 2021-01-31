<template>
  <div class="common-card">
    <div class="title">{{title}}</div>
    <div class="value">{{value}}</div>
    <div class="chart">
      <!-- 插槽显不显示、怎样显示是由父组件来控制的，而插槽在哪里显示就由子组件来进行控制  -->
      <slot></slot>
    </div>
    <div class="line"></div>
    <div class="total">
      <!-- 设置一个name为footer的插槽，可以在父组件中给插槽设置样式  -->
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>

  export default {
    // 接收父组件传递的数据
    props: {
      title: String,
      // 这里是让value支持两种数据类型
      value: [String, Number]
    }
  }
</script>

<style lang="scss" scoped>
  .title{
    font-size: 12px;
    color: #999;
  }
  .value{
    font-size: 25px;
    color: #000;
    margin-top: 5px;
    letter-spacing: 1px;
  }
  .chart{
    height: 80px;
    //background-color: red;
  }
  .line{
    margin: 10px 0;
    border-top: 1px solid #eee;
  }
  .total{
    font-size: 12px;
    color: #666;
  }

</style>
<!--不加scoped的样式可以被全局引用-->
<style lang="scss">
  //  这是数字加粗的样式
  .emphasis{
    margin-left: 5px;
    color: black;
    font-weight: 700;
  }
  //  这是红色三角形的样式
  .increase{
    width: 0;
    height: 0;
    border-width: 3px;
    border-color: transparent transparent red transparent;
    border-style: solid;
    margin: 3px 0 0 5px;
  }
  //  这是绿色三角形的样式
  .decrease{
    width: 0;
    height: 0;
    border-width: 3px;
    border-color: green transparent transparent transparent;
    border-style: solid;
    margin: 5px 0 0 5px;
  }
</style>
