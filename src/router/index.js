import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
		name: 'Home',
		path: '/',
	},
	{
		component: () => import(/* webpackChunkName: "01-start-video-call" */ '@/views/01-start-video-call.vue'),
		name: '01-start-video-call',
		path: '/01-start-video-call',
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
