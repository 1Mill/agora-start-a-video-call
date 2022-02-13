<template>
	<nav>
		<router-link :to="{ name: '01-learning-vue-3' }">
			01 Learning Vue 3
		</router-link>
		<router-link :to="{ name: '02-start-video-call' }">
			02 Starting Video Call
		</router-link>
	</nav>
	<router-view/>
</template>
<style scoped>
a {
	margin-right: 1rem;
}
</style>
