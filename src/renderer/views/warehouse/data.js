const basicGather = [
  {
    label: '收货店铺：',
    prop: 'shop',
    placeholder: '',
    type: 'select',
    options: 'shops ',
    default: ''
  },
  {
    label: '收货仓库：',
    prop: 'store',
    placeholder: '',
    type: 'select',
    options: 'stores ',
    default: ''
  },
  {
    label: '供应商名称：',
    prop: 'supplier',
    placeholder: '',
    type: 'select',
    options: 'suppliers',
    default: ''
  },
  {
    label: '采购日期：',
    prop: 'date',
    placeholder: '',
    type: 'datePicker',
    options: 'suppliers',
    default: ''
  },
  {
    label: '编码：',
    prop: 'id',
    placeholder: '自动生成',
    type: 'input',
    default: ''
  },
  {
    label: '单位：',
    prop: 'unit',
    placeholder: '',
    type: 'select',
    options: 'units',
    default: '克'
  },
  {
    label: '款号：',
    prop: 'styleNum',
    placeholder: '',
    type: 'input',
    default: ''
  },
  {
    label: '类别：',
    prop: 'style',
    placeholder: '',
    type: 'select',
    options: 'styles',
    default: ''
  },
  {
    label: '品牌：',
    prop: 'brand',
    placeholder: '',
    type: 'select',
    options: 'styles',
    default: ''
  },
  {
    label: '圈号：',
    prop: 'size',
    placeholder: '',
    type: 'input',
    default: ''
  },
  {
    label: '成色：',
    prop: 'fineness',
    placeholder: '',
    type: 'select',
    options: 'styles',
    default: ''
  },
  {
    label: '证书号：',
    prop: 'certificateNumber',
    placeholder: '',
    type: 'input',
    default: ''
  },
  {
    label: '手寸：',
    prop: 'handSize',
    placeholder: '',
    type: 'select',
    options: 'styles',
    default: ''
  },
  {
    label: '款式：',
    prop: 'fashion',
    placeholder: '',
    options: 'styles',
    type: 'select',
    default: ''
  },
  {
    label: '产地：',
    prop: 'place',
    placeholder: '',
    type: 'input',
    default: ''
  },
  {
    label: '备注：',
    prop: 'remark',
    placeholder: '',
    type: 'input',
    default: ''
  },
  {
    label: '品名：',
    prop: 'product',
    placeholder: '',
    type: 'input',
    default: ''
  },
  {
    label: '颜色：',
    prop: 'color',
    placeholder: '',
    type: 'input',
    default: ''
  }
]

const measureGather = [
  {
    label: '金重(g)：',
    prop: 'weight',
    placeholder: '',
    type: 'inputNumber',
    default: 1
  },
  {
    label: '工费：',
    prop: 'fee',
    placeholder: '',
    type: 'inputNumber',
    default: 1
  },
  {
    label: '单价：',
    prop: 'price',
    placeholder: '',
    type: 'inputNumber',
    default: 1
  },
  {
    label: '工费计价方式：',
    prop: 'chargingType',
    placeholder: '',
    type: 'radio',
    options: 'chargingTypes',
    default: 1
  },
  {
    label: '进货数量：',
    prop: 'count',
    placeholder: '',
    type: 'inputNumber',
    default: 1
  },
  {
    label: '总成本：',
    prop: 'totalCost',
    placeholder: '',
    type: 'inputNumber',
    default: 1
  }
]

const labelGather = [
  {
    label: '标签工费：',
    prop: 'chargingType',
    placeholder: '',
    type: 'inputNumber',
    default: 1
  },
  {
    label: '进货数量：',
    prop: 'count',
    placeholder: '',
    type: 'inputNumber',
    default: 1
  },
  {
    label: '总成本：',
    prop: 'totalCost',
    placeholder: '',
    type: 'inputNumber',
    default: 1
  }
]

const units = [
  {
    label: '克',
    value: 'g'
  },
  {
    label: '千克',
    value: 'kg'
  }
]

const styles = [
  {
    label: '111',
    value: '111'
  },
  {
    label: '222',
    value: '222'
  },
  {
    label: '333',
    value: '333'
  }
]

const chargingTypes = [
  {
    name: '按件',
    label: 0
  },
  {
    name: '按重',
    label: 1
  }
]

export { basicGather, units, styles, chargingTypes, measureGather, labelGather }
