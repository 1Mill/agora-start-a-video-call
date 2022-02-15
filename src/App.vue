<template>
	<nav>
		<router-link
		v-for="name in $router.options.routes.map(r => r.name)"
		:key="name"
		:to="{ name }"
		>
			{{ name }}
		</router-link>
	</nav>
	<router-view/>
</template>
<style>
	a { margin: 0 0.25rem; }
	body { padding: 1rem; }
</style>
