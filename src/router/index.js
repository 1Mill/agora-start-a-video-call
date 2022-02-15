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
	{
		component: () => import(/* webpackChunkName: "02-start-video-call" */ '@/views/02-start-video-call.vue'),
		name: '02-start-video-call',
		path: '/02-start-video-call',
	},
	{
		component: () => import(/* webpackChunkName: "03-toggle-join-call" */ '@/views/03-toggle-join-call.vue'),
		name: '03-toggle-join-call',
		path: '/03-toggle-join-call',
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
