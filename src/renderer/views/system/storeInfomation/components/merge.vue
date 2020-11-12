<!--  -->
<template>
  <div class="merge-dialog">
    <el-dialog :visible.sync="isShow">
      <div class="small-thing" />
      <div class="dialog-tittle">
        <p class="tittle-word">{{ tittleName }}</p>
      </div>
      <div class="form-container">
        <el-form ref="storeInfoFrom"
                 :model="storeInfoFrom"
                 :rules="rules"
                 label-width="100px">
          <el-form-item label="供应商编码："
                        prop="supplierCode"> <!--表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的-->
            <el-input v-model="storeInfoFrom.supplierCode" />
          </el-form-item>
          <el-form-item label="供应商名称："
                        prop="supplierName">
            <el-input v-model="storeInfoFrom.supplierName" />
          </el-form-item>
          <el-form-item label="供应商地址："
                        prop="supplierAddr">
            <el-input v-model="storeInfoFrom.supplierAddr" />
          </el-form-item>
          <el-form-item label="办公电话："
                        prop="phoneNumber">
            <el-input v-model="storeInfoFrom.phoneNumber" />
          </el-form-item>
          <el-form-item label="办公传真："
                        prop="officeFax">
            <el-input v-model="storeInfoFrom.officeFax" />
          </el-form-item>
          <el-form-item label="联系人："
                        prop="contacts">
            <el-input v-model="storeInfoFrom.contacts" />
          </el-form-item>
          <el-form-item label="电子邮箱："
                        prop="email">
            <el-input v-model="storeInfoFrom.email" />
          </el-form-item>
          <el-form-item label="公司网址："
                        prop="companyWebsite">
            <el-input v-model="storeInfoFrom.companyWebsite" />
          </el-form-item>
           <el-form-item label="开户行："
                        prop="bankDeposit">
            <el-input v-model="storeInfoFrom.bankDeposit" />
          </el-form-item>
          <el-form-item label="银行账号："
                        prop="accountNumber">
            <el-input v-model="storeInfoFrom.accountNumber" />
          </el-form-item>
          <el-form-item label="税号："
                        prop="dutyParagraph">
            <el-input v-model="storeInfoFrom.dutyParagraph" />
          </el-form-item>
          <el-form-item label="所属地区："
                        prop="regoin">
            <el-input v-model="storeInfoFrom.regoin" />
          </el-form-item>
          <el-form-item label="期初金额："
                        prop="openingAmount">
            <el-input-number v-model="storeInfoFrom.openingAmount"
                             controls-position="right"
                             :min="1"
                             :max="10"/>
          </el-form-item>
          <el-form-item label="建档时间："
                        prop="filingTime">
            <el-input v-model="storeInfoFrom.filingTime" />
          </el-form-item>
          <el-form-item label="备注："
                        prop="remarks">
            <el-input v-model="storeInfoFrom.remarks" />
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer">
        <el-button @click="close()">取 消</el-button>
        <el-button type="primary"
                   @click="submitForm('storeInfoFrom')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import _ from 'lodash'
export default {
  components: {},
  // import引入的组件需要注入到对象中才能使用
  props: {
    tittleName: {
      type: String,
      default: ''
    },
    editInfo: {
      type: Object,
      default() { }
    }
  },
  data() {
    // 这里存放数据
    return {
      isShow: false,
      storeInfoFrom: {
        supplierCode: '',
        supplierAddr: '',
        supplierName: '',
        phoneNumber: '',
        officeFax: '',
        email: '',
        companyWebsite: '',
        bankDeposit: '',
        accountNumber: '',
        dutyParagraph: '',
        regoin: '',
        openingAmount: '',
        filingTime: '',
        remarks: ''
      },
      rules: {
        /* 供应商名称和编码为必填项，需校验 */
        supplierCode: [{ required: true, message: '请填写供应商编码', trigger: 'change' }],
        supplierName: [{ required: true, message: '请选择供应商名称', trigger: 'change' }]
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {

  },
  // 监控data中的数据变化
  watch: {
    editInfo: {
      handler(newInfo, oldInfo) {
        this.storeInfoFrom = _.cloneDeep(newInfo)
      }, deep: true, immediate: true
    },
    tittleName(newName, oldName) {
      // 添加时清空信息
      console.log('newName', newName)
    },
    isShow(newVal, oldVal) {
      newVal && this.tittleName === '添加' && Object.keys(this.storeInfoFrom).forEach(key => { this.storeInfoFrom[key] = '' })
      this.$nextTick(() => {
        this.$refs.storeInfoFrom.clearValidate()
      })
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
    close() {
      this.isShow = false
    },
    clear() {
      this.$emit('on-clear')
    },
    submitForm(formName) {
      this.$refs[formName].validate((vaild) => {
        if (vaild) {
          this.$message({
            showClose: true,
            message: '编辑成功',
            type: 'success',
            duration: 2000
          })
        } else {
          this.$message({
            showClose: true,
            message: '请按格式填写',
            type: 'error',
            duration: 2000
          })
        }
      })
    }
  }
}
</script>
<style lang='scss' scoped>
@import "@/styles/mixin.scss";
.merge-dialog {
  .small-thing {
    @include small-thing;
  }
  .dialog-tittle {
    @include dialog-tittle;
  }
  /deep/.el-dialog__footer {
    display: flex;
    justify-content: center;
  }
  .form-container {
    .el-form {
      width: 90%;
      margin: auto;
      display: flex;
      flex-flow: row wrap;
      .el-form-item {
        width: 50%;
        /deep/.el-form-item__content {
          min-width: 150px;
        }
      }
      .el-select {
        width: -webkit-fill-available;
      }
    }
  }
}
</style>
