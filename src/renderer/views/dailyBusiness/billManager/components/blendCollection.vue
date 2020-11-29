<!--  -->
<template>
  <div class="blend-collection">
    <el-dialog :visible.sync="isShow"
               center
               append-to-body>
      <div class="small-thing" />
      <div class="dialog-tittle">
        <p class="tittle-word">{{ tittleName }}</p>
      </div>
      <div class="count-info">
        <el-form>
          <div class="count-form">
            <el-form-item label="应收金额"
                          prop="totalCount">
              <el-input v-model="countForm.willCount" />
            </el-form-item>
            <el-form-item label="已收金额"
                          prop="yesCount">
              <el-input v-model="countForm.yesCount" />
            </el-form-item>
            <el-form-item label="未收金额"
                          prop="noCount">
              <el-input v-model="countForm.noCount" />
            </el-form-item>
          </div>
          <el-divider content-position="left">付款方式</el-divider>
          <el-form-item class="pay-type">
            <el-checkbox v-model="isCash">现金</el-checkbox>
            <el-input-number v-model="countForm.cash"
                             controls-position="right"
                             @change="handleChange" />
            <el-input v-model="countForm.smallChange"
                      placeholder="找零" />
          </el-form-item>
          <el-form-item class="pay-type">
            <el-checkbox v-model="isWechat">微信</el-checkbox>
            <el-input-number v-model="countForm.wechatCount"
                             controls-position="right"
                             @change="handleChange" />
            <el-input v-model="countForm.weChatId"
                      placeholder="卡号" />
          </el-form-item>
          <el-form-item class="pay-type">
            <el-checkbox v-model="isAlipay">支付宝</el-checkbox>
            <el-input-number v-model="countForm.alipayCount"
                             controls-position="right"
                             @change="handleChange" />
            <el-input v-model="countForm.alipayId"
                      placeholder="卡号" />
          </el-form-item>

          <el-form-item class="pay-type">
            <el-checkbox v-model="isSavingCard">银行储蓄卡</el-checkbox>
            <el-input-number v-model="countForm.savingCardCount"
                             controls-position="right"
                             @change="handleChange" />
            <el-input v-model="countForm.savingCardId"
                      placeholder="卡号" />
          </el-form-item>
          <el-form-item class="pay-type">
            <el-checkbox v-model="isBankCard">银行信用卡</el-checkbox>
            <el-input-number v-model="countForm.bankCard"
                             controls-position="right"
                             @change="handleChange" />
            <el-input v-model="countForm.bankCardId"
                      placeholder="卡号" />
          </el-form-item>
          <el-form-item class="pay-type">
            <el-checkbox v-model="isVoucher">代金卷</el-checkbox>
            <el-input-number v-model="countForm.voucherCount"
                             controls-position="right"
                             @change="handleChange" />
            <el-input v-model="countForm.voucher"
                      placeholder="券号" />
          </el-form-item>
          <el-form-item class="pay-type">
            <el-checkbox v-model="isGroup">团购</el-checkbox>
            <el-input-number v-model="countForm.groupCount"
                             controls-position="right"
                             @change="handleChange" />
            <el-input v-model="countForm.groupId"
                      placeholder="卡号" />
          </el-form-item>
        </el-form>

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
import eventBus from '@/utils/bus'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      tittleName: '混合付款',
      isShow: false,
      countForm: {},
      isCash: true,
      isWechat: true,
      isAlipay: true,
      isSavingCard: true,
      isBankCard: true,
      isVoucher: true,
      isGroup: true
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
    eventBus.$on('mix-pay', (data) => {
      console.log('11111111111111111111')
      this.isShow = data
    })
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
    handleChange() {
      console.log(2222)
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import "@/styles/mixin.scss";

.small-thing {
  @include small-thing;
}
.dialog-tittle {
  @include dialog-tittle;
}
.count-info {
  display: flex;
  .count-form {
    display: flex;
    justify-content: space-between;
  }
}
.pay-type {
  width: 100% !important;
}
</style>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import "@/styles/mixin.scss";
.el-form-item {
  display: inline-flex;
  width: 30%;
  .el-form-item__content {
    width: -webkit-fill-available;
    display: flex;
    justify-content: space-between;
  }
  /deep/.el-form-item__label {
    width: 100px;
  }
}
.pay-type {
  /deep/.el-form-item__content {
    display: flex !important;
    justify-content: space-between;
    width: 100%;
    .el-input {
      width: 200px;
      max-width: 300px;
    }
  }
  .el-checkbox {
    width: 80px;
  }
}
/deep/.el-dialog {
  margin-top: 5vh !important;
}
/deep/.el-dialog__body {
  height: 80vh;
  overflow: auto;
}
</style>
