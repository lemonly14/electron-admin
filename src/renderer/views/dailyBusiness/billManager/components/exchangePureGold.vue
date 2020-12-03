<!--  -->
<template>
  <div class="exchange-pure-gold">
    <el-dialog :visible.sync="isShow"
               center>
      <div class="small-thing" />
      <div class="dialog-tittle">
        <p class="tittle-word">{{ tittleName }}</p>
      </div>
      <div class="input-container">
        <el-form ref="exGoldForm"
                 :model="exGoldForm">
          <el-card class="box-card">
            <div slot="header">
              <span>基础信息</span>
            </div>
            <el-form-item label="编码"
                          prop="id">
              <el-input v-model="exGoldForm.id" />
            </el-form-item>
            <el-form-item label="品名"
                          prop="product">
              <el-input v-model="exGoldForm.id" />
            </el-form-item>
            <el-form-item label="收货仓库"
                          prop="warehouseName">
              <el-select v-model="exGoldForm.warehouseName"
                         filterable
                         placeholder="请选择">
                <el-option v-for="option in warehouses"
                           :key="option.value"
                           :label="option.label"
                           :value="option.value" />
              </el-select>
            </el-form-item>
            <el-form-item label="成色"
                          prop="fineness">
              <el-select v-model="exGoldForm.fineness"
                         filterable
                         placeholder="请选择">
                <el-option v-for="option in finenesses"
                           :key="option.value"
                           :label="option.label"
                           :value="option.value" />
              </el-select>
            </el-form-item>
            <el-form-item label="类别"
                          prop="type">
              <el-select v-model="exGoldForm.type"
                         filterable
                         placeholder="请选择">
                <el-option v-for="option in types"
                           :key="option.value"
                           :label="option.label"
                           :value="option.value" />
              </el-select>
            </el-form-item>
            <el-form-item label="颜色"
                          prop="color">
              <el-select v-model="exGoldForm.color"
                         filterable
                         placeholder="请选择">
                <el-option v-for="option in colors"
                           :key="option.value"
                           :label="option.label"
                           :value="option.value" />
              </el-select>
            </el-form-item>
            <el-form-item label="产地"
                          prop="place">
              <el-input v-model="exGoldForm.id" />
            </el-form-item>

            <el-form-item label="单位"
                          prop="uint">
              <el-input v-model="exGoldForm.id" />
            </el-form-item>
            <el-form-item label="证书号"
                          prop="certificateNumber">
              <el-input v-model="exGoldForm.id" />
            </el-form-item>
            <el-form-item label="款号"
                          prop="styleNum">
              <el-input v-model="exGoldForm.id"
              />
            </el-form-item>
            <el-form-item label="圈号"
                          prop="size">
              <el-input v-model="exGoldForm.id" />
            </el-form-item>
          </el-card>
          <el-card class="box-card">
            <div slot="header">
              <span>金料信息</span>
            </div>
            <el-form-item label="金重"
                          prop="weight">
              <el-input-number v-model="exGoldForm.weight"
                               controls-position="right" />
            </el-form-item>
            <el-form-item label="单价"
                          prop="price">
              <el-input-number v-model="exGoldForm.price"
                               controls-position="right" />
            </el-form-item>
            <el-form-item label="工费"
                          prop="fee">
              <el-input-number v-model="exGoldForm.fee"
                               controls-position="right" />
            </el-form-item>
            <el-form-item label="进货数量"
                          prop="count">
              <el-input-number v-model="exGoldForm.count"
                               controls-position="right" />
            </el-form-item>
            <el-form-item label="总金额"
                          prop="totalCost">
              <el-input-number v-model="exGoldForm.totalCost"
                               controls-position="right" />
            </el-form-item>
            <el-form-item label="工费计价方式"
                          prop="chargingType">
              <el-radio-group v-model="exGoldForm.chargingType">
                <el-radio :label="0">按件</el-radio>
                <el-radio :label="1">按重</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-card>
        </el-form>
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
      isShow: true,
      tittleName: '素金回收',
      exGoldForm: {},
      warehouses: [],
      finenesses: [],
      types: [],
      colors: []
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
@import "@/styles/mixin.scss";
.exchange-pure-gold {
  .small-thing {
    @include small-thing;
  }
  .dialog-tittle {
    @include dialog-tittle;
  }
  .input-container {
    width: 100%;
    .box-card {
      margin-bottom: 10px;
      span {
        font-size: 20px;
        font-weight: 350;
        color: #0096ff;
      }
    }
  }
}
</style>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import "@/styles/mixin.scss";
.exchange-pure-gold {
  /deep/.el-dialog {
    @include xl-dialog;
  }
  /deep/.el-form-item {
    min-width: 200px;
    display: inline-flex;
    margin-bottom: 0;
    /deep/.el-form-item__content {
      width: 135px;
    }
  }
  /depp/.el-form-item__label {
    white-space: nowrap;
  }
  .el-input-number--medium {
    width: 130px;
  }
  /deep/.el-textarea__inner {
    height: 36px !important;
    width: fit-content;
  }
  /deep/.el-dialog__body {
    height: 60vh !important;
    overflow: auto !important;
  }
  /deep/.el-form-item__label {
    width: 100px;
  }
}
</style>
