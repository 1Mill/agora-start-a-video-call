<script setup>
	import { computed } from 'vue'
	import { useAgora } from '@/composables/useAgora'

	const { join, leave } = useAgora()
	const token = computed(() => process.env.VUE_APP_AGORA_TOKEN)
</script>
<template>
	<h1>Toggle Join Call</h1>
	<div id="me" style="height: 20rem; width: 20rem; border: 1px solid red;">
	</div>
	<button @click="join({
		channel: 'testing-channel',
		token,
	})">
		JOIN
	</button>
	<button @click="leave()">
		LEAVE
	</button>
</template>
