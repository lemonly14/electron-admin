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
                 label-width="80px">
          <el-form-item label="所属店铺"
                        prop="store"> <!--表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的-->
            <el-select v-model="storeInfoFrom.store"
                       placeholder="请选择">
              <el-option v-for="item in tpyeOptions"
                         :key="item.value"
                         :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="仓库编码"
                        prop="warehouseCode">
            <el-input v-model="storeInfoFrom.warehouseCode" />
          </el-form-item>
          <el-form-item label="仓库名称"
                        prop="warehouseName">
            <el-input v-model="storeInfoFrom.warehouseName" />
          </el-form-item>
          <el-form-item label="负责人"
                        prop="warehouseCharity">
            <el-input v-model="storeInfoFrom.warehouseCharity" />
          </el-form-item>
          <el-form-item label="备注"
                        prop="remarks">
            <el-input v-model="storeInfoFrom.remarks" />
          </el-form-item>
          <el-from-item prop="checked">
            <el-checkbox v-model="storeInfoFrom.checked"
                         label="不参加交接班" />
          </el-from-item>
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
        store: '',
        warehouseCode: '',
        warehouseName: '',
        warehouseCharity: '',
        remarks: '',
        checked: false
      },
      tpyeOptions: [
        {
          value: '总店'
        }
      ],
      rules: {
        /* 供应商名称和编码为必填项，需校验 */
        warehouseCode: [{ required: true, message: '请填写仓库编码', trigger: 'change' }]
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
  ::v-deep.el-dialog__footer {
    display: flex;
    justify-content: center;
  }
  .form-container {
    .el-form {
      width: 70%;
      margin: auto;
      display: flex;
      flex-flow: row wrap;
      .el-form-item {
        width: 100%;
        ::v-deep.el-form-item__content {
          min-width: 100px;
        }
      }
      .el-select {
        width: -webkit-fill-available;
      }
    }
  }
}
</style>
