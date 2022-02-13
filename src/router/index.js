import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
		name: 'Home',
		path: '/',
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
