<!--  -->
<template>
  <div class="pure-gold-infomation-container">

    <div v-if="!isMerge"
         class="home-container">
      <div class="table-header">
        <div class="input-item">
          <span>类别：</span>
          <el-input v-model="infoParams.type" />
        </div>
        <div class="input-item">
          <span>成色：</span>
          <el-input v-model="infoParams.fineness" />
        </div>
        <div class="input-item">
          <span>款式：</span>
          <el-input v-model="infoParams.style" />
        </div>
        <div class="input-item">
          <span>金重：</span>
          <el-input v-model="infoParams.weight" />
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
          <el-table-column prop="type"
                           label="类别"
                           width="180" />
          <el-table-column prop="fineness"
                           label="成色"
                           width="180" />
          <el-table-column prop="style"
                           label="款式" />
          <el-table-column prop="weight"
                           label="金重" />
          <el-table-column prop="certificateNumber"
                           label="证书号" />
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
                         @click="selectData(scope.$index, scope.row, 'single')">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
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
                   @click="deleteItem()">导出</el-button>
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
    }
  }
}
</script>
<style lang='scss' scoped>
@import url("../../../styles/animate.css");
.pure-gold-infomation-container {
  height: 100%;
  .home-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: inherit;
    .table-header {
      width: 100%;
      min-height: 60px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex: 0;
      .input-item {
        padding-right: 50px;
        display: flex;
        align-items: center;
      }
      .input-item:nth-of-type(1) {
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
.pure-gold-infomation-container {
  .el-input {
    width: 200px;
    /deep/.el-input__inner {
      border-radius: 20px;
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
