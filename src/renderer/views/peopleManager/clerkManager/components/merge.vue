<!--  -->
<template>
  <div class="merge-dialog">
    <el-dialog :visible.sync="isShow">
      <div class="small-thing" />
      <div class="dialog-tittle">
        <p class="tittle-word">{{ tittleName }}</p>
      </div>
      <div class="form-container">
        <el-form ref="clerkFrom"
                 :model="clerkFrom"
                 :rules="rules"
                 label-width="100px">
          <el-form-item label="所属店铺"
                        prop="shop">
            <el-select v-model="clerkFrom.shop"
                       placeholder="请选择">
              <el-option v-for="item in tpyeOptions"
                         :key="item.value"
                         :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="在职状态"
                        prop="state">
            <el-radio-group v-model="clerkFrom.state">
              <el-radio :label="0">在职</el-radio>
              <el-radio :label="1">离职</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="编号"
                        prop="id">
            <el-input v-model="clerkFrom.id" />
          </el-form-item>
          <el-form-item label="姓名"
                        prop="name">
            <el-input v-model="clerkFrom.name" />
          </el-form-item>
          <el-form-item label="性别"
                        prop="sex">
            <el-select v-model="clerkFrom.sex"
                       placeholder="请选择">
              <el-option v-for="item in sexOptions"
                         :key="item.value"
                         :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="电子邮箱"
                        prop="mail">
            <el-input v-model="clerkFrom.mail" />
          </el-form-item>
          <el-form-item label="联系电话"
                        prop="telephone">
            <el-input v-model="clerkFrom.telephone" />
          </el-form-item>
          <el-form-item label="家庭住址"
                        prop="address">
            <el-input v-model="clerkFrom.address" />
          </el-form-item>
          <el-form-item label="证件号"
                        prop="idNum">
            <el-input v-model="clerkFrom.idNum" />
          </el-form-item>
          <el-form-item label="备注"
                        prop="remark">
            <el-input v-model="clerkFrom.remark"
                      type="textarea" />
          </el-form-item>
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
      clerkFrom: {
        name: '',
        id: '',
        sex: '',
        state: '',
        mail: '',
        telephone: '',
        address: '',
        idNum: ''
      },
      tpyeOptions: [
        {
          value: '金万福总店'
        },
        {
          value: '金万福分店1'
        },
        {
          value: '金万福分店2'
        },
        {
          value: '鑫鑫总店'
        },
        {
          value: '鑫鑫分店1'
        },
        {
          value: '鑫鑫分店2'
        }
      ],
      sexOptions: [
        {
          value: '男'
        },
        {
          value: '女'
        }
      ],
      rules: {
        name: [{ required: true, message: '请填写名称', trigger: 'change' }],
        type: [{ required: true, message: '请选择类别', trigger: 'change' }],
        id: [{ required: true, message: '请填写编号', trigger: 'change' }]
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
        this.clerkFrom = _.cloneDeep(newInfo)
      }, deep: true, immediate: true
    },
    tittleName(newName, oldName) {
      // 添加时清空信息
      console.log('newName', newName)
    },
    isShow(newVal, oldVal) {
      newVal && this.tittleName === '添加' && Object.keys(this.clerkFrom).forEach(key => {
        if (key !== 'state') {
          this.clerkFrom[key] = ''
        } else {
          this.clerkFrom[key] = 0
        }
      })
      this.$nextTick(() => {
        this.$refs.clerkFrom.clearValidate()
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
