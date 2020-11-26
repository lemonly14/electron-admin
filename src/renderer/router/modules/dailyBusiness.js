import Layout from '@/layout'

const businessRouter = {
  path: '/dailyBusiness',
  component: Layout,
  redirect: 'noRedirect',
  name: 'DailyBusiness',
  meta: {
    title: '日常业务',
    icon: 'chart'
  },
  children: [
    {
      path: 'billManager',
      component: () => import('@/views/dailyBusiness/billManager'),
      name: 'ClerkManager',
      meta: { title: '销售开单', noCache: true }
    }
  ]
}

export default businessRouter
