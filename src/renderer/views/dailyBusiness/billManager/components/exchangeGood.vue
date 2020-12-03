<!--  -->
<template>
  <div class="exchange-goods">
    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <span>换货入库商品</span>
        <el-button style="float: right; padding: 3px 0"
                   type="text">操作按钮</el-button>
      </div>
      <div class="select-container">
        <el-radio-group v-model="changeType">
          <el-radio :label="0">旧料换货</el-radio>
          <el-radio :label="1">成品换货</el-radio>
        </el-radio-group>
        <el-button type="primary"
                   style="margin-left:20px">素金</el-button>
        <el-button type="primary">镶嵌</el-button>
        <el-button type="primary">饰品</el-button>
      </div>
      <div class="table-container">
        <el-table :data="tableData"
                  border
                  style="width: 100%">
          <el-table-column prop="id"
                           label="编码"
                           width="180" />
          <el-table-column prop="name"
                           label="品名"
                           width="180" />
          <el-table-column prop="content"
                           label="含量" />
          <el-table-column prop="fineness"
                           label="成色" />
          <el-table-column prop="color"
                           label="颜色" />
          <el-table-column prop="handInch"
                           label="手寸" />
          <el-table-column prop="style"
                           label="款式" />
          <el-table-column prop="type"
                           label="类别" />
          <el-table-column prop="unit"
                           label="单位" />
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      changeType: 0,
      tableData: [{
        id: '11111111',
        name: '18K黄金',
        content: '99%',
        fineness: '99%',
        color: '金色',
        handInch: '三寸',
        style: '111111',
        unit: '19.00'
      }, {
        id: '11111111',
        name: '18K黄金',
        content: '99%',
        fineness: '99%',
        color: '金色',
        handInch: '三寸',
        style: '111111',
        unit: '19.00'
      }, {
        id: '11111111',
        name: '18K黄金',
        content: '99%',
        fineness: '99%',
        color: '金色',
        handInch: '三寸',
        style: '111111',
        unit: '19.00'
      }, {
        id: '11111111',
        name: '18K黄金',
        content: '99%',
        fineness: '99%',
        color: '金色',
        handInch: '三寸',
        style: '111111',
        unit: '19.00'
      }]
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  beforeCreate() { }, // 生命周期 - 创建之前
  beforeMount() { }, // 生命周期 - 挂载之前
  beforeUpdate() { }, // 生命周期 - 更新之前
  updated() { }, // 生命周期 - 更新之后
  beforeDestroy() { }, // 生命周期 - 销毁之前
  destroyed() { }, // 生命周期 - 销毁完成
  activated() { }, // 如果页面有keep-alive缓存功能，这个函数会触发
  // 方法集合
  methods: {

  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.exchange-goods {
  .select-container {
    margin-bottom: 25px;
  }
}
</style>
