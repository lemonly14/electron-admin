const basicGather = [
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
    prop: 'fineness',
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

export { basicGather, units, styles }
