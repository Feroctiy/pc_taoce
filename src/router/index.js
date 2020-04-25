import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/customer/main'
import Common from '@/views/index/common'
Vue.use(Router)



export default new Router({
	// mode: "history",
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Common,
			children: [
				// 首页
				{
					path: '/',
					component: () => import('@/views/index/index'),
					name: 'IndexMain'
				},
				// 产品分类 - 机构
				{
					path: '/sort',
					name: 'Sort',
					component: () => import('@/views/sort/index')
				},
				// 新闻中心
				{
					path: '/news',
					name: 'News',
					component: () => import('@/views/news/index')
				},
				//机构展示
				{
					path: '/institution',
					name: 'Institution',
					component: () => import('@/views/institution/index')
				},
				{
					path: '/potal',
					name: 'Potal',
					component: () => import('@/views/sort/potal')
				}
			]
		},
		{
			path: '/addOrder',
			name: 'Order',
			component: () => import('@/views/order/addOrder')
		},
		{
			path: '/addOrder2',
			name: 'Order',
			component: () => import('@/views/order/addOrder2')
		},
		{
			path: '/addOrder3',
			name: 'Order',
			component: () => import('@/views/order/addOrder3')
		},
		
		// {
		// 	path: '/goodDetail',
		// 	name: 'GoodDetail',
		// 	component: () => import('@/views/good1/detail')
		// },
		// {
		// 	path: '/cart',
		// 	name: 'Cart',
		// 	component: () => import('@/views/good1/cart')
		// },
		{
			path: '/customer',
			name: 'Customer',
			component: Main,
			children: [
				{
					path: '/order',
					name: 'Order',
					component: () => import('@/views/customer/order')
				},
				{
					path: '/wallet',
					name: 'Wallet',
					component: () => import('@/views/customer/wallet')
				},
				{
					path: '/center',
					component: () => import('@/views/customer/center'),
					name: 'Center'
				},
				{
					path: '/userInfo',
					component: () => import('@/views/customer/userInfo'),
					name: 'userInfo'
				},
				{
					path: '/detail',
					component: () => import('@/views/customer/detail'),
					name: 'Detail'
				},
				{
					path: '/address',
					component: () => import('@/views/customer/address'),
					name: 'Address'
				},
				
				
				{
					path: '/invoice',
					name: 'Invoice',
					component: () => import('@/views/customer/invoice')
				},
				{
					path: '/message',
					name: 'Message',
					component: () => import('@/views/customer/message')
				},
				// 用户认证 
				{
					path: '/authentication',
					name: 'Authentication',
					component: () => import('@/views/customer/authentication/index')
				},
				// 个人认证
				{
					path: '/userAuth',
					name: 'UserAuth',
					component: () => import('@/views/customer/authentication/user')
				},
				
			]
		},
		// {
		// 	path: '/detail',
		// 	name: 'Detail',
		// 	component: () => import('@/views/customer/detail')
		// }
		
	],
	scrollBehavior: () => ({
		y: 0
	})
})
