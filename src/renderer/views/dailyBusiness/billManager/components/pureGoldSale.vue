<!--  -->
<template>
  <div class="pure-gold-sale">
    <el-dialog :visible.sync="isShow"
               center>
      <div class="small-thing" />
      <div class="dialog-tittle">
        <p class="tittle-word">{{ tittleName }}</p>
      </div>
      <div class="info-container">
        <div class="img-container">
          <el-image v-for="item in goldForm.imgList"
                    :key="item"
                    style="width: 100px; height: 100px"
                    :src="item"
                    :preview-src-list="goldForm.imgList" />
        </div>
        <div class="input-container">
          <el-form ref="goldForm"
                   :model="goldForm">
            <el-card class="box-card">
              <div slot="header">
                <span>基础信息</span>
              </div>
              <el-form-item label="编码"
                            prop="id">
                <el-input v-model="goldForm.id" />
              </el-form-item>
              <el-form-item label="品名"
                            prop="product">
                <el-input v-model="goldForm.id" />
              </el-form-item>
              <el-form-item label="产地"
                            prop="place">
                <el-input v-model="goldForm.id" />
              </el-form-item>
              <el-form-item label="颜色"
                            prop="color">
                <el-input v-model="goldForm.id" />
              </el-form-item>
              <el-form-item label="单位"
                            prop="uint">
                <el-input v-model="goldForm.id" />
              </el-form-item>
              <el-form-item label="证书号"
                            prop="certificateNumber">
                <el-input v-model="goldForm.id" />
              </el-form-item>
              <el-form-item label="款号"
                            prop="styleNum">
                <el-input v-model="goldForm.id" />
              </el-form-item>
              <el-form-item label="圈号"
                            prop="size">
                <el-input v-model="goldForm.id" />
              </el-form-item>
            </el-card>
            <el-card class="box-card">
              <div slot="header">
                <span>金料信息</span>
              </div>
              <el-form-item label="金重"
                            prop="weight">
                <el-input-number v-model="goldForm.weight"
                                 controls-position="right" />
              </el-form-item>
              <el-form-item label="工费"
                            prop="fee">
                <el-input-number v-model="goldForm.fee"
                                 controls-position="right" />
              </el-form-item>
              <el-form-item label="单价"
                            prop="price">
                <el-input-number v-model="goldForm.price"
                                 controls-position="right" />
              </el-form-item>
              <el-form-item label="工费计价方式"
                            prop="chargingType">
                <el-radio-group v-model="goldForm.chargingType">
                  <el-radio :label="0">按件</el-radio>
                  <el-radio :label="1">按重</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-card>
            <el-card class="box-card">
              <div slot="header">
                <span>整件信息</span>
              </div>
              <el-form-item label="件重"
                            prop="pieceWeight">
                <el-input-number v-model="goldForm.pieceWeight" />
              </el-form-item>
              <el-form-item label="销售单价"
                            prop="salePrice">
                <el-input-number v-model="goldForm.salePrice"
                                 controls-position="right" />
              </el-form-item>
              <el-form-item label="数量"
                            prop="num">
                <el-input-number v-model="goldForm.num"
                                 controls-position="right" />
              </el-form-item>
              <el-form-item label="折扣"
                            prop="discount">
                <el-input-number v-model="goldForm.discount"
                                 controls-position="right" />
              </el-form-item>
              <el-form-item label="实售单价"
                            prop="realPrice">
                <el-input-number v-model="goldForm.realPrice"
                                 controls-position="right" />
              </el-form-item>
              <el-form-item label="总金额"
                            prop="totalPrice">
                <el-input v-model="goldForm.totalPrice" />
              </el-form-item>
              <el-form-item label="备注"
                            prop="remark">
                <el-input v-model="goldForm.remark"
                          type="textarea" />
              </el-form-item>
            </el-card>
          </el-form>
        </div>
      </div>
      <span slot="footer">
        <el-button @click="close()">取 消</el-button>
        <el-button type="primary"
                   @click="sibmit()">确认</el-button>
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
      tittleName: '素金销售',
      isShow: false,
      goldForm: {
        imgList: [
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      }
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
.pure-gold-sale {
  .small-thing {
    @include small-thing;
  }
  .dialog-tittle {
    @include dialog-tittle;
  }
  .info-container {
    width: 100%;
    .img-container{
       display: flex;
       justify-content: center;
       margin: 20px 0;
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
}
</style>

<style lang='scss' scoped>
//@import url(); 引入公共css类
@import "@/styles/mixin.scss";
.pure-gold-sale {
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
    height: 80vh !important;
    overflow: auto !important;
  }
}
</style>
