<!--  -->
<template>
  <div class="simple-collection">
    <el-dialog :visible.sync="isShow"
               center>
      <div class="small-thing" />
      <div class="dialog-tittle">
        <p class="tittle-word">{{ tittleName }}</p>
      </div>
      <el-form ref="collectionForm"
               :model="collectionForm">
        <el-form-item label="总金额"
                      prop="totalCount">
          <el-input v-model="collectionForm.totalCount" />
        </el-form-item>
        <el-form-item label="整单打折"
                      prop="discount">
          <el-input-number v-model="collectionForm.discount"
                           controls-position="right" />
        </el-form-item>
        <el-form-item label="应收金额"
                      prop="willCount">
          <el-input-number v-model="collectionForm.willCount"
                           controls-position="right" />
        </el-form-item>
        <el-form-item label="未收金额"
                      prop="noCount">
          <el-input-number v-model="collectionForm.noCount"
                           controls-position="right" />
        </el-form-item>
        <el-form-item label="已收金额"
                      prop="yesCount">
          <el-input-number v-model="collectionForm.yesCount"
                           controls-position="right" />
        </el-form-item>
        <el-form-item label="优惠金额"
                      prop="preferentialCount">
          <el-input-number v-model="collectionForm.preferentialCount"
                           controls-position="right" />
        </el-form-item>
        <el-form-item label="支付方式"
                      prop="payWay"
                      style="display:flex">
          <el-select v-model="collectionForm.payWay"
                     placeholder="请选择">
            <el-option v-for="item in payWays"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value" />
          </el-select>
          <el-button round
                     plain
                     icon="el-icon-s-help"
                     type="primary"
                     style="margin-left:25px"
                     @click="mixPay()">混合支付</el-button>
        </el-form-item>
        <el-form-item label="宾客支付"
                      prop="hasCount">
          <el-input v-model="collectionForm.hasCount" />
        </el-form-item>
        <el-form-item label="找零"
                      prop="smallChange">
          <el-input v-model="collectionForm.smallChange" />
        </el-form-item>
      </el-form>
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
import eventBus from '@/utils/bus'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      isShow: true,
      tittleName: '单一收款',
      collectionForm: {},
      payWays: [
        {
          value: 0,
          label: '现金'
        },
        {
          value: 1,
          label: '微信'
        },
        {
          value: 2,
          label: '支付宝'
        },
        {
          value: 3,
          label: '银行储蓄卡'
        },
        {
          value: 4,
          label: '银行行用卡'
        },
        {
          value: 5,
          label: '代金卷'
        },
        {
          value: 6,
          label: '团购'
        }
      ]
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
    mixPay() {
      eventBus.$emit('mix-pay', true)
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import "@/styles/mixin.scss";
.simple-collection {
  .small-thing {
    @include small-thing;
  }
  .dialog-tittle {
    @include dialog-tittle;
  }
}
</style>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import "@/styles/mixin.scss";
.simple-collection {
  /deep/.el-dialog {
    @include s-dialog;
    margin-top: 5vh !important;
    .el-dialog__body {
      max-height: 70vh;
      overflow: auto;
      .el-form-item {
        display: flex;
        .el-form-item__content {
          width: -webkit-fill-available;
          display: flex;
        }
        .el-input-number {
          width: -webkit-fill-available;
        }
        /* .el-select {
          width: -webkit-fill-available;
        } */
      }
    }
    .el-form-item__label {
      width: 100px;
    }
  }
}
</style>
