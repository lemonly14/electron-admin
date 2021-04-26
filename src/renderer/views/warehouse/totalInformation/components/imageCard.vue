<!--  -->
<template>
  <el-card id="image-card"
           class="image-card">
    <div class="info-header">
      <span>{{ imageData.id }}</span>
      <span>{{ imageData.product }}</span>
    </div>
    <el-image :src="imageData.img"
              style="height: 10vw;" />
    <el-form>
      <el-form-item label="件重">
        <el-input v-model="weight" />
      </el-form-item>
      <el-form-item label="类别">
        <el-input v-model="imageData.style" />
      </el-form-item>
      <el-form-item label="库存数量">
        <el-input v-model="imageData.inCount" />
      </el-form-item>
      <el-form-item label="标签价">
        <el-input v-model="imageData.labelPrice" />
      </el-form-item>
      <el-form-item label="成本价">
        <el-input v-model="imageData.cost" />
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    imageData: {
      type: Object,
      default() { }
    }
  },
  data() {
    // 这里存放数据
    return {
      weight: ''
    }
  },
  // 监听属性 类似于data概念
  computed: {

  },
  // 监控data中的数据变化
  watch: {

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.weight = this.imageData.weight || this.imageData.pieceWeight
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
.image-card {
  width: 13vw;
  min-width: 250px;
  margin-right: 30px;
  margin-top:30px
}
.info-header {
  display: flex;
  justify-content: space-between;
  padding: 5px;
}
</style>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.image-card {
  ::v-deep.el-card__body {
    padding: 0;
  }
  .el-image {
    width: -webkit-fill-available;
    height: 8 vw;
    min-height: 150px;
    min-width: 250px;
  }
  .el-form-item {
    pointer-events: none;
    margin-bottom: 10px;
    widows: 100%;
    ::v-deep.el-form-item__label {
      width: 80px;
    }
    .el-input {
      width: calc(100% - 90px);
    }
  }
}
</style>
