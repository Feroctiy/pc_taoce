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
				{
					path: '/news-detail',
					name: 'NewsDetail',
					component: () => import('@/views/news/news-detail')
				},
				{
					path: '/ask-detail',
					name: 'AskDetail',
					component: () => import('@/views/news/ask-detail')
				},
				
				// 检测知识
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
				{
					path: '/answer',
					name: 'Answer',
					component: () => import('@/views/index/answer')
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
				// 查询
				// 报告查询
				{
					path: '/reportFind',
					name: 'ReportFind',
					component: () => import('@/views/index/reportFind')
				},
				// 证书查询  
				{
					path: '/certificateFind',
					name: 'CertificateFind',
					component: () => import('@/views/index/certificateFind')
				},
				// 标准查询
				{
					path: '/standardFind',
					name: 'StandardFind',
					component: () => import('@/views/index/standardFind')
				}
				
			]
		},
		{
			path: '/step',
			name: 'user',
			component: user,
			children:[
				{
					path: '/agreement',
					name: 'Agreement',
					component: () => import('@/views/product/agreement')
				},
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
					path: '/shopJoinApply',
					name: 'ShopJoinApply',
					component: () => import('@/views/shop/shopJoinApply')
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
			path: '/addOrder3',
			name: 'Order',
			component: () => import('@/views/order/addOrder3')
		},
		
		// {
		// 	path: '/goodDetail',
		// 	name: 'GoodDetail',
		// 	component: () => import('@/views/good1/detail')
		// },
		{
			path: '/chat',
			name: 'Chat',
			component: () => import('@/views/index/Chat')
		},
		// 个人中心
		{
			path: '/customer',
			name: 'Customer',
			component: Main,
			children: [
				{
					path: '/customer',
					name: 'Customer',
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
				// 我的钱包
				{
					path: '/wallet',
					name: 'Wallet',
					component: () => import('@/views/customer/wallet')
				},
				// 充值明细
				{
					path: '/rechargeDetail',
					name: 'RechargeDetail',
					component: () => import('@/views/customer/rechargeDetail')
				},
				// 充值
				{
					path: '/recharge',
					name: 'Recharge',
					component: () => import('@/views/customer/recharge')
				},
				// 提现
				{
					path: '/widthdraw',
					name: 'Widthdraw',
					component: () => import('@/views/customer/widthdraw')
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
				// 地址库
				{
					path: '/address',
					component: () => import('@/views/customer/address'),
					name: 'Address'
				},
				
				// 发票薄
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
					path: '/enterpriseList',
					name: 'EnterpriseList',
					component: () => import('@/views/customer/authentication/enterpriseList')
				},
				{
					path: '/buydata',
					name: 'Buydata',
					component: () => import('@/views/customer/buydata')
				},
				// 修改密码
				{
					path: '/updatePwd',
					name: 'UpdatePwd',
					component: () => import('@/views/customer/UpdatePwd')
				},
				{
					path: '/myQA',
					name: 'MyQA',
					component: () => import('@/views/customer/myQA')
				},
				// 我的关注
				{
					path: '/myForce',
					name: 'MyForce',
					component: () => import('@/views/customer/myForce')
				},
				// 反馈意见
				{
					path: '/feedback',
					name: 'Feedback',
					component: () => import('@/views/customer/feedback')
				},
				// 我的收藏
				{
					path: '/collection',
					name: 'Collection',
					component: () => import('@/views/customer/collection')
				}
				
			]
		} 
	],
	scrollBehavior: () => ({
		y: 0
	})
})
