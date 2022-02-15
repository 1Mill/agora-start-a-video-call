<script setup>
	import { useAgoraClient } from '@/composables/useAgoraClient.js'
	const { client } = useAgoraClient()
	console.log(client)
</script>
<template>
	<h1>Toggle Join Call</h1>
</template>
