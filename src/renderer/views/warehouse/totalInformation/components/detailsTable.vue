<!--  -->
<template>
  <el-card id="details-card"
           class="details-card">
    <el-table :data="detailsData"
              style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left"
                   inline
                   class="demo-table-expand">
            <el-form-item v-for="item in basicGather"
                          :key="item.prop"
                          :label="item.label">
              <span>{{ props.row[`${item.prop}`] }}</span>
            </el-form-item>

          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="ID"
                       prop="id" />
      <el-table-column label="品名"
                       prop="product" />
      <el-table-column label="图片"
                       prop="img">
        <template slot-scope="scope">
          <el-image style="width: 100px; height: 100px"
                    :src="scope.row.img" />

        </template>
      </el-table-column>
      <el-table-column label="品牌"
                       prop="brand" />
      <el-table-column label="备注"
                       prop="remark" />
    </el-table>
    <el-pagination :current-page="currentPage"
                   :page-sizes="[100, 200, 300, 400]"
                   :page-size="100"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="400"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange" />
  </el-card>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { basicGather } from '../../data'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    detailsData: {
      type: Array,
      default() { }
    }

  },
  data() {
    // 这里存放数据
    return {
      currentPage: 1,
      optionsMap: {},
      basicGather: [],
      styles: []
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
    this.basicGather = basicGather
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
</style>
