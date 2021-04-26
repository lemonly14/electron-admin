<!--  -->
<template>
  <div class="role-manager-container">
    <div class="right-container">
      <div class="filter-container">
        <div class="filter-item">
          <el-input v-model="infoParams.idCode"
                    placeholder="编号" />
        </div>
        <div class="filter-item">
          <el-input v-model="infoParams.name"
                    placeholder="名称" />
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
          <el-table-column prop="roleName"
                           label="角色名称"
                           width="180" />
          <el-table-column prop="sort"
                           label="排序"
                           width="180" />
          <el-table-column prop="remark"
                           label="角色说明" />
          <el-table-column prop="discountAuth"
                           label="打折权限"
                           width="100"
                           align="center">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.discountAuth"
                         active-color="#13ce66"
                         inactive-color="#ff4949"
                         :active-value="true"
                         :inactive-value="false"
                         @change="changeAuth" />
            </template>
          </el-table-column>
          <el-table-column prop="minDiscount"
                           label="最低折扣" />
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
                         type="primary"
                         round
                         icon="el-icon-view"
                         @click="handleAuth(scope.$index, scope.row)">权限信息</el-button>
              <el-button size="mini"
                         icon="el-icon-delete"
                         round
                         type="danger"
                         @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
        <el-button icon="el-icon-delete"
                   round
                   type="danger"
                   plain
                   :disabled="!length > 0"
                   @click="deleteItems()">批量删除</el-button>
      </div>
    </div>

    <Merge ref="merge"
           :edit-info="editInfo"
           :tittle-name="tittleName" />
    <Delete ref="delete"
            :length="length"
            :delete-type="deleteType"
            :tittle-name="tittleName" />
    <Auth ref="auth"
          :routes="routes"
          :tittle-name="tittleName" />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { Merge, Delete, Auth } from './components/index'

import _ from 'lodash'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    Merge,
    Delete,
    Auth
  },
  data() {
    // 这里存放数据
    return {
      routes: [],
      length: 0,
      deleteType: '',
      infoParams: {
        idCode: '',
        name: ''
      },
      tableData: [{
        roleName: '管理员',
        sort: '0',
        remark: '系统管理员',
        discountAuth: true,
        minDiscount: 1.00
      },
      {
        roleName: '营业员',
        sort: '0',
        remark: '',
        discountAuth: true,
        minDiscount: 1.00
      },
      {
        roleName: '店长',
        sort: '0',
        remark: '',
        discountAuth: true,
        minDiscount: 1.00
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
      console.log('this.$refs.merge', this.$refs.merge)
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
    handleAuth(index, row) {
      console.log('index', index)
      console.log('row', row)
      this.tittleName = '权限编辑'
      this.$refs.auth.isShow = true
    },
    changeAuth(val) {
      console.log('val', val)
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.role-manager-container {
  height: 100%;
  .right-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
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
.role-manager-container {
  .el-input {
    width: 200px;
    ::v-deep.el-input__inner {
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
