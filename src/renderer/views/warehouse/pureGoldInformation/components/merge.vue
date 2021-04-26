<!--  -->
<template>
  <div class="pure-gold-merge-container">
    <div class="merge-header">
      <span>素金类入库</span>
      <el-button type="primary"
                 class="back-btn"
                 @click="goBack">返回</el-button>
    </div>
    <el-form ref="pureGoldFrom"
             :model="pureGoldFrom"
             :rules="rules">
      <div class="left-container">
        <el-card id="basic-card"
                 class="box-card">
          <div slot="header">
            <span>基础信息</span>
          </div>
          <el-form-item v-for="item in basicGather"
                        :key="item.prop"
                        :label="item.label"
                        :prop="item.prop">
            <el-input v-if="item.type === 'input'"
                      v-model="pureGoldFrom[item.prop]"
                      :placeholder="item.placeholder" />
            <el-select v-if="item.type === 'select'"
                       v-model="pureGoldFrom[item.prop]"
                       filterable
                       placeholder="请选择">
              <el-option v-for="option in optionsMap[item.options]"
                         :key="option.value"
                         :label="option.label"
                         :value="option.value" />
            </el-select>
            <el-date-picker v-if="item.type === 'datePicker'"
                            v-model="pureGoldFrom[item.prop]"
                            type="date"
                            placeholder="选择日期" />
          </el-form-item>
          <div class="footer">
            <el-button type="primary"
                       @click="handleHide(hideType)">{{ hideType }}</el-button>
          </div>

        </el-card>
        <el-card class="box-card">
          <div slot="header">
            <span>金价信息</span>
          </div>
          <div class="count-info">
            <el-form-item v-for="item in measureGather"
                          :key="item.prop"
                          :prop="item.prop"
                          :label="item.label">
              <el-input-number v-if="item.type === 'inputNumber'"
                               v-model="pureGoldFrom[item.prop]"
                               :placeholder="item.placeholder"
                               controls-position="right"
                               :min="0"
                               @change="handleChangeNum" />
              <el-radio-group v-if="item.type === 'radio'"
                              v-model="pureGoldFrom[item.prop]">
                <el-radio v-for="option in optionsMap[item.options]"
                          :key="option.name"
                          :label="option.label">{{ option.name }}</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
        </el-card>

      </div>
      <div class="right-container">
        <el-card>
          <div class="img-container">
            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove">
              <i class="el-icon-plus" />
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%"
                   :src="dialogImageUrl"
                   alt="">
            </el-dialog>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%"
                   :src="dialogImageUrl"
                   alt="">
            </el-dialog>
          </div>
          <div class="footer">
            <el-button @click="submitForm('queryTotal')">确定再添加</el-button>
            <el-button type="primary"
                       @click="submitForm('queryTotal')">确 定</el-button>
          </div>
        </el-card>

      </div>
    </el-form>

  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { basicGather, measureGather, labelGather, units, styles, chargingTypes } from '../../data'
export default {
  // import引入的组件需要注入到对象中才能使用

  components: {},
  data() {
    // 这里存放数据
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      hideType: '更多',
      pureGoldFrom: {
        date: new Date().getTime()
      },
      basicGather: [],
      measureGather: [],
      labelGather: [],
      units: [],
      styles: [],
      chargingTypes: [],
      rules: {
        shop: [{ required: true, message: '请选择收货店铺', trigger: 'change' }],
        id: [{ required: true, message: '请填写编码', trigger: 'change' }],
        store: [{ required: true, message: '请选择收货仓库', trigger: 'change' }],
        datePicker: [{ required: true, message: '请选择采购日期', trigger: 'change' }],
        supplier: [{ required: true, message: '请选择供应商名称', trigger: 'change' }],
        style: [{ required: true, message: '请选择供类别', trigger: 'change' }],
        fineness: [{ required: true, message: '请选择成色', trigger: 'change' }],
        fashion: [{ required: true, message: '请选择款式', trigger: 'change' }]
      },
      optionsMap: {}
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.basicGather = basicGather
    this.measureGather = measureGather
    this.labelGather = labelGather
    this.units = units
    this.styles = styles
    this.chargingTypes = chargingTypes
    this.optionsMap['units'] = units
    this.optionsMap['styles'] = styles
    this.optionsMap['chargingTypes'] = chargingTypes
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    const basicDom = document.getElementById('basic-card')
    const formItemDom = basicDom.getElementsByClassName('el-form-item')
    this.noRequireDom = Array.from(formItemDom).filter((item, index) => {
      return item.className === 'el-form-item el-form-item--medium'
    })
    this.noRequireDom.forEach((item, index) => {
      item.style.display = 'none'
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
    goBack() {
      this.$emit('go-back')
    },
    handleHide(type) {
      console.log('type', type)
      type === '更多' ? this.show() : this.hide()
    },
    hide() {
      this.hideType = '更多'
      this.noRequireDom.forEach((item, index) => {
        item.style.display = 'none'
      })
      const basicCard = document.getElementById('basic-card')
      basicCard.style.height = '310px'
    },
    show() {
      this.hideType = '收起'
      this.noRequireDom.forEach((item, index) => {
        item.style.display = ''
      })
      const basicCard = document.getElementById('basic-card')
      basicCard.style.height = '491px'
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleChangeNum(name, val) {
      console.log('name', name)
      console.log('val', val)
      console.log('pureGoldFrom', this.pureGoldFrom)
    },
    submitForm() {
      console.log('看看', this.pureGoldFrom)
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.pure-gold-merge-container {
  .merge-header {
    min-height: 50px;
    font-size: 35px;
    color: #0096ff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .back-btn {
      position: absolute;
      right: 20px;
    }
  }
  .left-container {
    width: 70%;
    display: inline-block;
    .box-card {
      width: 100%;
      position: relative;
      .footer {
        flex: auto;
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
      }
      .count-info {
        display: flex;
        flex-flow: wrap;
      }
    }
    #basic-card {
      height: 310px;
      transition: height 0.6s;
    }
    #basic-card::-webkit-scrollbar {
      display: none;
    }
  }
  .right-container {
    width: 30%;
    padding: 0 20px;
    display: inline-block;
    .img-container {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .footer {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      width: 100%;
    }
  }
}
</style>

<style lang="scss" scoped>
.pure-gold-merge-container {
  .el-form {
    display: flex;
    padding: 30px 50px;
  }
  .el-card {
    margin-bottom: 40px;
    overflow: auto;
  }
  .left-container {
    .el-form-item {
      width: 32%;
      min-width: 250px;
      max-width: 390px;
      ::v-deep.el-form-item__label {
        width: 115px;
      }
    }
    ::v-deep.el-card__body {
      display: flex;
      flex-flow: wrap;
    }
    .el-input,
    .el-select,
    .el-select,
    .el-radio-group,
    .el-input-number {
      width: calc(100% - 115px);
    }
  }
}
</style>
