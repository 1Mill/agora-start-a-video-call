<script setup>
	import AgoraRTC from 'agora-rtc-sdk'
	import { ref } from 'vue'

	const remoteContainer = ref(null)
	const addVideoStream = (id) => {
		// Create a new container for every stream
		const div = document.createElement('div')
		div.id = id
		div.style.transform = "rotateY(180deg)"

		// Add div to remote container
		remoteContainer.value.appendChild(div)
		console.log(id)
		console.log(div)
	}
	const removeVideoStream = (id) => {
		const div = document.getElementById(id)
		if (div) { div.parentNode.removeChild(div) }
	}

	const client = AgoraRTC.createClient({
		codec: 'h264',
		mode: 'rtc',
	})
	client.init(process.env.VUE_APP_AGORA_APP_ID, () => {
		console.log('Client init success')
	}, (err) => {
		console.error('Client init failed', err)
	})
</script>
<template>
	<h1>02 Start Video Call</h1>
	<div ref="remoteContainer">
		Remote Container
	</div>
	<button @click="addVideoStream(1)">Add</button>
	<button @click="removeVideoStream(1)">Remove</button>
</template>
