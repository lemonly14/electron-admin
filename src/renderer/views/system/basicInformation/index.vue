<!--  -->
<template>
  <div class="basic-infomation-container">
    <div class="left-tree">
      <InfoTree />
    </div>
    <div class="right-container">
      <div class="table-header">
        <div class="input-item">
          <span>编码：</span>
          <el-input v-model="infoParams.idCode" />
        </div>
        <div class="input-item">
          <span>名称：</span>
          <el-input v-model="infoParams.name" />
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
                  :header-cell-style="{background:'#E4E4E4'}"
                  @selection-change="handleSelect">
          <el-table-column type="selection"
                           width="55" />
          <el-table-column prop="type"
                           label="资料分类"
                           width="180" />
          <el-table-column prop="id"
                           label="编号"
                           width="180" />
          <el-table-column prop="name"
                           label="名称" />
          <el-table-column prop="sortNum"
                           label="排序" />
          <el-table-column prop="remark"
                           label="备注" />
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
                         @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
        <el-button icon="el-icon-delete"
                   round
                   type="danger"
                   plain
                   :disabled="!length > 0"
                   @click="deleteItems()">批量删除</el-button>
        <el-button icon="el-icon-bottom"
                   round
                   type="primary"
                   plain
                   @click="exportItems()">导出</el-button>

      </div>
    </div>
    <Merge ref="merge"
           :edit-info="editInfo"
           :tittle-name="tittleName"
           @on-clear="clear()" />
    <Delete ref="delete"
            :length="length"
            :delete-type="deleteType"
            :tittle-name="tittleName" />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { InfoTree, Merge, Delete } from './components/index'
import _ from 'lodash'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    InfoTree,
    Merge,
    Delete
  },
  data() {
    // 这里存放数据
    return {
      currentPage: 1,
      length: 0,
      deleteType: '',
      infoParams: {
        idCode: '',
        name: ''
      },
      tableData: [{
        type: '类别',
        id: '01',
        name: '黄金按克',
        sortNum: '0',
        remark: ''
      }, {
        type: '类别',
        id: '02',
        name: '黄金按件',
        sortNum: '0',
        remark: ''
      }, {
        type: '类别',
        id: '03',
        name: 'K金',
        sortNum: '0',
        remark: ''
      }, {
        type: '类别',
        id: '04',
        name: '钻石',
        sortNum: '0',
        remark: ''
      }],
      tittleName: '',
      editInfo: {}

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
      this.$refs.merge.isShow = true
      this.tittleName = '添加'
    },
    handleEdit(index, row) {
      this.$refs.merge.isShow = true
      this.tittleName = '编辑'
      this.editInfo = _.cloneDeep(row)
      console.log('row', row)
    },
    handleDelete(index, row) {
      this.$refs.delete.isShow = true
      this.tittleName = '删除'
      this.deleteType = 'single'
    },
    deleteItems() {
      this.tittleName = '批量删除'
      this.$refs.delete.isShow = true
      this.deleteType = 'batch'
    },
    handleSelect(selection) {
      console.log('selection', selection)
      this.length = selection.length
    },
    clear() {
      console.log('我到这步了')
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
//@import url(); 引入公共css类
.basic-infomation-container {
  display: flex;
  flex: 1;
  height: 100%;
  .left-tree {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 20%;
    border-right: 1px #eeeeee solid;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .right-container {
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
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
      overflow: auto;
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
.basic-infomation-container {
  .el-input {
    width: 200px;
    /deep/.el-input__inner {
      border-radius: 20px;
    }
  }
  .el-pagination{
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px;
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
