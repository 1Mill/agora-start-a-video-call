import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
		name: 'Home',
		path: '/',
	},
	{
		component: () => import(/* webpackChunkName: "01-learning-vue-3" */ '@/views/01-learning-vue-3.vue'),
		name: '01-learning-vue-3',
		path: '/01-learning-vue-3',
		props: route => ({ someValue: route.query.someValue }),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
