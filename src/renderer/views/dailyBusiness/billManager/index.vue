<!--  -->
<template>
  <div class="business-container">
    <div class="header">
      <div class="header-button">
        <el-button type="primary"
                   icon="el-icon-sell">新增销售单</el-button>
        <el-button type="success"
                   icon="el-icon-wallet">结账</el-button>
      </div>
      <div class="header-input">
        <div class="info-item">
          <el-select v-model="saleParams.clerkId"
                     placeholder="营业员">
            <el-option v-for="item in clerkOptions"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value" />
          </el-select>
        </div>
        <div class="info-item">
          <el-input v-model="saleParams.name"
                    placeholder="商品编码" />
          <el-button slot="append"
                     icon="el-icon-more"
                     @click="searchItem" />
        </div>
      </div>
    </div>

    <el-card class="sell-card">
      <div slot="header"
           class="clearfix">
        <span>出库商品</span>
        <el-button style="float: right; padding: 3px 0"
                   type="text">操作按钮</el-button>
      </div>
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
    </el-card>
    <div class="footer">
      <el-button type="warning"
                 icon="el-icon-connection">换货</el-button>
    </div>
    <SearchDialog ref="search" />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import SearchDialog from './components/searchDialog'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    SearchDialog
  },
  data() {
    // 这里存放数据
    return {
      saleParams: {},
      clerkOptions: [
        {
          label: '张三',
          value: '1111111'
        },
        {
          label: '赵四',
          value: '22222222'
        },
        {
          label: '张丽',
          value: '33333'
        }
      ],
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
    searchItem() {
      this.$refs.search.isShow = true
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.business-container {
  height: 100%;
  width: 100%;
  .header {
    .header-button {
      width: 100%;
      padding: 10px 20px;
    }
    .header-input {
      padding: 10px 20px;
      .info-item {
        width: 250px;
        display: inline-flex;
      }
    }
  }

  .sell-card {
    margin: 10px 20px;
  }
  .footer {
    width: 100%;
    padding: 10px 20px;
  }
}
</style>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.business-container {
  .header-input {
    .info-item {
      .el-select {
        width: -webkit-fill-available;
      }
      /deep/.el-input__inner {
        border-radius: 3px 0px 0px 3px;
      }
      .el-button {
        border-radius: 0px 3px 3px 0px;
        height: 36px;
      }
    }
  }
}
</style>
