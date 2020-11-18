<!--  -->
<template>
  <div class="info-tree">
    <div class="operation-container">
      <el-button type="success"
                 size="mini"
                 icon="el-icon-plus"
                 :disabled="selectData.type === 2"
                 round
                 @click="addShop">添加</el-button>
      <el-button type="primary"
                 size="mini"
                 icon="el-icon-edit"
                 round
                 @click="editShop">编辑</el-button>
      <el-button type="danger"
                 size="mini"
                 icon="el-icon-delete"
                 round
                 :disabled="selectData.type"
                 @click="deleteShop">删除</el-button>
    </div>
    <el-input v-model="filterText"
              placeholder="输入关键字进行过滤" />

    <el-tree ref="tree"
             class="filter-tree"
             :data="data"
             :props="defaultProps"
             default-expand-all
             :expand-on-click-node="false"
             :filter-node-method="filterNode"
             highlight-current
             @node-click="clickNode" />
    <MergeShop ref="mergeShop"
               :edit-info="selectData"
               :tittle-name="tittleName" />
    <DeleteShop ref="deleteShop"
                :tittle-name="tittleName" />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import MergeShop from './mergeShop'
import DeleteShop from './deleteShop'
import _ from 'lodash'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    MergeShop,
    DeleteShop
  },
  data() {
    return {
      filterText: '',
      tittleName: '',
      selectData: {},
      data: [{
        id: 1,
        label: '全部',
        type: 0,
        children: [{
          id: 4,
          label: '金万福总店',
          type: 1,
          children: [{
            id: 9,
            label: '金万福分店1',
            type: 2
          }, {
            id: 10,
            label: '金万福分店2',
            type: 2
          }]
        },
        {
          id: 4,
          label: '鑫鑫总店',
          type: 1,
          children: [{
            id: 9,
            label: '鑫鑫分店1',
            type: 2
          }, {
            id: 10,
            label: '鑫鑫分店2',
            type: 2
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },

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
    clickNode(data, node) {
      this.selectData = _.cloneDeep(data)
    },
    addShop() {
      this.tittleName = '添加分店'
      this.$refs.mergeShop.isShow = true
    },
    editShop() {
      this.tittleName = '编辑分店'
      this.$refs.mergeShop.isShow = true
      console.log('编辑店铺')
    },
    deleteShop() {
      this.tittleName = '删除店铺'
      this.$refs.deleteShop.isShow = true
    },
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.info-tree {
  width: 80%;
  .operation-container {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
  }
}
</style>

<style lang="scss" scoped>
.el-button {
  margin: 0 0 8px 0 !important;
}
</style>
