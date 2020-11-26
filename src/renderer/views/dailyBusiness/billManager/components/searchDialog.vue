<!--  -->
<template>
  <div class="search-dialog">
    <el-dialog :visible.sync="isShow"
               center>
      <div class="search-header">
        <el-input v-model="searchInfo.id"
                  placeholder="商品编号" />
        <el-input v-model="searchInfo.name"
                  placeholder="商品名称" />
        <el-button icon="el-icon-search"
                   type="primary"
                   @click="search()">搜索</el-button>
      </div>
      <div class="search-body">
        <div class="left-tree">
          <el-tree ref="tree"
                   class="filter-tree"
                   :data="data"
                   :props="defaultProps"
                   default-expand-all />
        </div>
        <div class="right-table">
          <el-table :data="tableData"
                    style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left"
                         inline
                         class="demo-table-expand">
                  <el-form-item label="编码">
                    <span>{{ props.row.id }}</span>
                  </el-form-item>
                  <el-form-item label="类别">
                    <span>{{ props.row.style }}</span>
                  </el-form-item>
                  <el-form-item label="品牌">
                    <span>{{ props.row.brand }}</span>
                  </el-form-item>
                  <el-form-item label="品名">
                    <span>{{ props.row.product }}</span>
                  </el-form-item>
                  <el-form-item label="颜色">
                    <span>{{ props.row.color }}</span>
                  </el-form-item>
                  <el-form-item label="成色">
                    <span>{{ props.row.fineness }}</span>
                  </el-form-item>
                  <el-form-item label="证书号">
                    <span>{{ props.row.certificateNumber }}</span>
                  </el-form-item>
                  <el-form-item label="收货店铺">
                    <span>{{ props.row.store }}</span>
                  </el-form-item>
                  <el-form-item label="收货仓库">
                    <span>{{ props.row.warehouseName }}</span>
                  </el-form-item>
                  <el-form-item label="供应商名称">
                    <span>{{ props.row.supplierName }}</span>
                  </el-form-item>
                  <el-form-item label="采购日期">
                    <span>{{ props.row.datePicker }}</span>
                  </el-form-item>
                  <el-form-item label="单位">
                    <span>{{ props.row.uint }}</span>
                  </el-form-item>
                  <el-form-item label="款号">
                    <span>{{ props.row.styleNum }}</span>
                  </el-form-item>
                  <el-form-item label="圈号">
                    <span>{{ props.row.size }}</span>
                  </el-form-item>
                  <el-form-item label="类别">
                    <span>{{ props.row.style }}</span>
                  </el-form-item>

                  <el-form-item label="手寸">
                    <span>{{ props.row.handSize }}</span>
                  </el-form-item>
                  <el-form-item label="款式">
                    <span>{{ props.row.fashion }}</span>
                  </el-form-item>
                  <el-form-item label="产地">
                    <span>{{ props.row.place }}</span>
                  </el-form-item>

                  <el-form-item label="备注">
                    <span>{{ props.row.remark }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column prop="id"
                             label="编号"
                             width="150" />
            <el-table-column prop="product"
                             label="品名" />
            <el-table-column prop="remain"
                             label="库存数量" />
            <el-table-column prop="certificateNumber"
                             label="证书号" />
            <el-table-column prop="styleNum"
                             label="款号"
                             width="200">
              <template slot="header">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索" />
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
      </div>
      <span slot="footer">
        <el-button @click="close()">取 消</el-button>
        <el-button type="primary"
                   @click="submitForm('clerkFrom')">确 定</el-button>
      </span>
    </el-dialog>
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
      isShow: false,
      search: '',
      currentPage: 1,
      searchInfo: {
        id: '',
        name: ''
      },
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      data: [{
        id: 1,
        label: '全部类别',
        children: [{
          id: 2,
          label: '黄金'
        }, {
          id: 3,
          label: '银饰'
        }, {
          id: 4,
          label: '玛瑙'
        }, {
          id: 5,
          label: '翡翠'
        }, {
          id: 6,
          label: '玉器'
        }, {
          id: 7,
          label: '钻石'
        }]
      }],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
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
.search-dialog {
  .search-header {
  }
  .search-body {
    margin-top: 10px;
    display: flex;
    .left-tree {
      width: 20%;
      height: 40vh;
    }
    .right-table {
      width: 80%;
      height: 40vh;
    }
  }
}
</style>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.search-dialog {
  .search-header {
    .el-input {
      width: 35%;
    }
  }
  .search-body{
    .el-pagination{
      margin-top: 20px;
      position: absolute;
      right: 15px;
    }
  }
}
</style>
