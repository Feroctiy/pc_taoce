import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/customer/main'
import Common from '@/views/index/common'
import user from '@/views/template/user-top.vue'
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
				// 检测只是
				{
					path: '/test-knowledge',
					name: 'test-knowledge',
					component: () => import('@/views/index/test-knowledge')
				},
				{
					path: '/test-knowledge-detail',
					name: 'test-knowledge-detail',
					component: () => import('@/views/index/test-knowledge-detail')
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
				},
				// 产品列表
				{
					path: '/product',
					name: 'Product',
					component: () => import('@/views/product/index')
				},
				// 产品详情
				{
					path: '/productDetail',
					name: 'ProductDetail',
					component: () => import('@/views/product/detail')
				},
				// 服务提供商
				{
					path: '/server',
					name: 'Server',
					component: () => import('@/views/product/server')
				},
				
			]
		},
		{
			path: '/step',
			name: 'user',
			component: user,
			children:[
				{
					path: '/step',
					name: 'Step',
					component: () => import('@/views/product/step')
				},
				{
					path: '/step1',
					name: 'Step1',
					component: () => import('@/views/product/step1')
				},
				{
					path: '/enter-step',
					name: 'Enter',
					component: () => import('@/views/institution/enter-step')
				}
			]
		},
		{
			path: '/register',
			name: 'Register',
			component: () => import('@/views/login/register')
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('@/views/login/login')
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
		// 我的
		{
			path: '/customer',
			name: 'Customer',
			component: Main,
			children: [
				{
					path: '/customer',
					name: 'Order',
					component: () => import('@/views/customer/customer')
				},
				{
					path: '/order',
					name: 'Order',
					component: () => import('@/views/customer/order')
				},
				{
					path: '/orderDetail',
					name: 'OrderDetail',
					component: () => import('@/views/customer/order-detail')
				},
				
				{
					path: '/orderPay',
					name: 'OrderPay',
					component: () => import('@/views/customer/order-pay')
				}, 
				{
					path: '/payGateWay',
					name: 'PayGateWay',
					component: () => import('@/views/customer/payGateWay')
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
					path: '/personal',
					name: 'Personal',
					component: () => import('@/views/customer/authentication/personal')
				},
				{
					path: '/enterprise',
					name: 'Enterprise',
					component: () => import('@/views/customer/authentication/enterprise')
				},
				{
					path: '/buydata',
					name: 'Buydata',
					component: () => import('@/views/customer/buydata')
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
