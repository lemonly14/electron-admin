import Layout from '@/layout'

const systemRouter = {
  path: '/system',
  component: Layout,
  redirect: 'noRedirect',
  name: 'System',
  meta: {
    title: 'System',
    icon: 'chart'
  },
  children: [
    {
      path: 'basicInformation',
      component: () => import('@/views/system/basicInformation'),
      name: 'Basicinfo',
      meta: { title: '基础资料管理', noCache: true }
    },
    {
      path: 'supplierInfomation',
      component: () => import('@/views/system/supplierInformation'),
      name: 'SupplierInfomation',
      meta: { title: '供应商管理', noCache: true }
    },
    {
      path: 'storeInfomation',
      component: () => import('@/views/system/storeInformation'),
      name: 'StoreInfomation',
      meta: { title: '仓库管理', noCache: true }
    }
  ]
}

export default systemRouter
