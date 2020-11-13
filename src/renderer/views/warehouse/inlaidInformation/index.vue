<!--  -->
<template>
  <div class="inlaid-information-container">

    <div v-if="!isMerge"
         class="home-container">
      <div class="filter-container">
        <div class="filter-item">
          <el-input v-model="infoParams.type"
                    placeholder="类别" />
        </div>
        <div class="filter-item">
          <el-input v-model="infoParams.fineness"
                    placeholder="成色" />
        </div>
        <div class="filter-item">
          <el-input v-model="infoParams.style"
                    placeholder="款式" />
        </div>
        <div class="filter-item">
          <el-input v-model="infoParams.weight"
                    placeholder="金重" />
        </div>
        <el-button type="primary"
                   icon="el-icon-search">
          搜索
        </el-button>
      </div>
      <div class="table-body">
        <el-table :data="tableData"
                  border
                  style="width: 100%"
                  :header-cell-style="{background:'#E4E4E4'}">
          <el-table-column prop="id"
                           label="编码"
                           width="130" />
          <el-table-column prop="name"
                           label="品名"
                           width="130" />
          <el-table-column prop="style"
                           label="款号"
                           width="130" />
          <el-table-column prop="weight"
                           label="金重"
                           width="130" />
          <el-table-column prop="price"
                           label="金单价"
                           width="130" />
          <el-table-column prop="fee"
                           label="工费"
                           width="130" />
          <el-table-column prop="unitPrice"
                           label="件重"
                           width="130" />
          <el-table-column prop="unitPrice"
                           label="数量"
                           width="130" />
          <el-table-column prop="unitPrice"
                           label="件单价"
                           width="130" />
          <el-table-column prop="unitPrice"
                           label="金额"
                           width="130" />
          <el-table-column prop="unitPrice"
                           label="标签工费"
                           width="130" />
          <el-table-column align="center"
                           fixed="right"
                           label="操作">
            <template slot-scope="scope">
              <el-button size="mini"
                         type="primary"
                         round
                         icon="el-icon-edit"
                         @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini"
                         icon="el-icon-delete"
                         round
                         type="danger"
                         @click="handleDelete(scope.$index, scope.row, 'single')">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination :current-page="currentPage"
                       :page-sizes="[100, 200, 300, 400]"
                       :page-size="100"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="400"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange" />
      </div>
      <div class="table-footer">
        <el-button icon="el-icon-plus"
                   round
                   type="success"
                   plain
                   @click="add()">添加</el-button>
        <el-button icon="el-icon-bottom"
                   round
                   type="primary"
                   plain
                   @click="exportBarcode()">导出条码</el-button>
      </div>
    </div>

    <Merge v-if="isMerge"
           ref="merge"
           @go-back="goBack" />

  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import Merge from './components/merge'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    Merge
  },
  data() {
    // 这里存放数据
    return {
      isMerge: false,
      infoParams: {
        type: '',
        fineness: '',
        style: '',
        weight: ''
      },
      currentPage: 1,
      tableData: [{
        type: '类别',
        fineness: '01',
        style: '黄金按克',
        weight: '0',
        certificateNumber: '1111'
      }, {
        type: '类别',
        fineness: '01',
        style: '黄金按克',
        weight: '0',
        certificateNumber: '1111'
      }, {
        type: '类别',
        fineness: '01',
        style: '黄金按克',
        weight: '0',
        certificateNumber: '1111'
      }, {
        type: '类别',
        fineness: '01',
        style: '黄金按克',
        weight: '0',
        certificateNumber: '1111'
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
    add() {
      this.isMerge = true
    },
    goBack() {
      this.isMerge = false
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang='scss' scoped>
@import url("../../../styles/animate.css");
.inlaid-information-container {
  height: 100%;
  overflow: auto;
  .home-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: inherit;
    .filter-container {
      width: 100%;
      flex: 0;
      padding-bottom: 0;
      .filter-item {
        width: 200px;
        display: inline-block;
        vertical-align: middle;
        margin: 10px;
      }
      .filter-item:nth-of-type(1) {
        margin-left: 10px;
      }
    }
    .table-body {
      width: 100%;
      flex: 1;
    }
    .table-footer {
      width: 100%;
      min-height: 65px;
      flex: 0;
      display: flex;
      border-top: 1px #eeeeee solid;
      justify-content: flex-start;
      align-items: center;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
}
</style>

<style lang="scss" scoped>
.inlaid-information-container {
  .filter-container {
    .el-button{
      margin-left: 10px;
    }
  }
  .el-pagination{
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px;
  }
  .el-input {
    width: 200px;
    /deep/.el-input__inner {
      border-radius: 20px;
    }
  }
  .table-body {
    .el-table /deep/.cell {
      display: flex;
      flex-flow: wrap;
      justify-content: space-evenly;
    }
    .el-button {
      margin-left: 0 !important;
    }
  }
  .table-footer {
    .el-button:nth-of-type(1) {
      margin-left: 10px;
    }
    .el-button:nth-of-type(2) {
      margin-left: 20px;
    }
  }
}
</style>
