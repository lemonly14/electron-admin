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
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>基础信息</span>
          </div>
          <el-row :gutter="20">
            <el-col v-for="item in basicGather"
                    :key="item.prop"
                    :span="8">
              <el-form-item :label="item.label"
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
            </el-col>
          </el-row>

        </el-card>
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>金价信息</span>
          </div>
          <div class="count-info">
            <el-form-item v-for="item in measureGather"
                          :key="item.prop"
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
          <div class="label-info">
            <el-form-item v-for="item in labelGather"
                          :key="item.prop"
                          :label="item.label">
              <el-input-number v-model="pureGoldFrom[item.prop]"
                               :placeholder="item.placeholder"
                               controls-position="right"
                               :min="0"
                               @change="handleChangeNum" />
            </el-form-item>
          </div>
        </el-card>

      </div>
      <div class="right-container">
        <div class="img-container">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
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
          <el-button
            type="primary"
            @click="submitForm('queryTotal')"
          >确 定</el-button>
        </div>
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
      pureGoldFrom: {
        date: new Date().getTime()
      },
      basicGather: [],
      measureGather: [],
      labelGather: [],
      units: [],
      styles: [],
      chargingTypes: [],
      countGather: [
        {
          label: '金总：',
          prop: 'weight',
          placeholder: ''
        },
        {
          label: '工费：',
          prop: 'cost',
          placeholder: ''
        },
        {
          label: '标签工费：',
          prop: 'labelCost',
          placeholder: ''
        },
        {
          label: '单价：',
          prop: 'price',
          placeholder: ''
        },
        {
          label: '销售系数：',
          prop: 'saleFactoc',
          placeholder: ''
        },
        {
          label: '进货数量：',
          prop: 'inCount',
          placeholder: ''
        },
        {
          label: '总成本：',
          prop: 'totalCost',
          placeholder: ''
        }
      ],
      rules: {},
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
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
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
  .info-item {
    width: 260px;
    margin: 0 40px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 100%;
    .count-info{
      width: 66%;
      display: flex;
      flex-flow: wrap;
    }
    .label-info{
      width: 33%;
      display: flex;
      flex-flow: wrap;
    }
  }
}
.right-container{
  width: 30%;
  display: inline-block;
  .img-container{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .footer{
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
}
</style>

<style lang="scss" scoped>
.pure-gold-merge-container {
  .el-col{
    min-width: 300px;
  }
  .el-form{
    display: flex;
    padding: 30px 50px;
  }
  .el-card{
    margin-bottom: 40px;
    overflow: auto;
  }
  .left-container {
    .el-form-item{
      /deep/.el-form-item__label{
        width: 115px;
      }
    }
    /deep/.el-card__body {
      display: flex;
      flex-flow: wrap;
    }
    .el-input {
     width: calc(100% - 115px)
    }
    .el-select{
      width: calc(100% - 115px);
    }
    .el-input-number{
      width: calc(100% - 115px);
    }
    .el-radio-group{
      width: calc(100% - 115px);
    }
  }
  .count-info{
    .el-form-item{
      width: 50%;
      min-width: 300px;
    }
  }
  .label-info{
    .el-form-item{
      width: 100%;
      min-width: 300px;
    }
  }
}
</style>
