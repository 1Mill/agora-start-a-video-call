<script setup>
	import { useAgora } from '@/composables/useAgora'

	const { join, leave } = useAgora()
</script>
<template>
	<h1>Toggle Join Call</h1>
	<div id="me" style="height: 20rem; width: 20rem; border: 1px solid red;">
	</div>
	<button @click="join()">
		JOIN
	</button>
	<button @click="leave()">
		LEAVE
	</button>
</template>
