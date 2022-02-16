<script setup>
	import AgoraRTC from 'agora-rtc-sdk-v3'
	import { ref } from 'vue'

	const remoteContainer = ref(null)
	const addVideoStream = (id) => {
		// Create a new container for every stream
		const div = document.createElement('div')
		div.id = id
		div.style.border = '1px solid blue'
		div.style.height = '20rem'
		div.style.transform = "rotateY(180deg)"
		div.style.width = '20rem'

		// Add div to remote container
		remoteContainer.value.appendChild(div)
		console.log(id)
		console.log(div)
	}
	const removeVideoStream = (id) => {
		const div = document.getElementById(id)
		if (div) { div.parentNode.removeChild(div) }
	}

	const handleError = (err) => { console.error("Error: ", err) }

	const client = AgoraRTC.createClient({
		codec: 'vp9',
		mode: 'rtc',
	})
	client.init(process.env.VUE_APP_AGORA_APP_ID, () => {
		console.log('Client init success')
	}, (err) => {
		console.error('Client init failed', err)
	})
	client.join(process.env.VUE_APP_AGORA_TOKEN, 'testing-channel', null, uid => {
		console.log("Successfully join channel: ", uid)
		const localStream = AgoraRTC.createStream({
			audio: true,
			video: true,
		})
		localStream.init(() => {
			localStream.play('me')
			client.publish(localStream, (err) => { console.error("Error: ", err) })
		})
	}, handleError)

	client.on('stream-added', (event) => {
		client.subscribe(event.stream, handleError)
		console.log('INFO: STREAM ADDED')
	})
	client.on('stream-subscribed', (event) => {
		const { stream } = event
		const id = String(stream.getId())
		addVideoStream(id)
		stream.play(id)
		console.log('INFO: STREAM SUBSCRIBED')
	})
	client.on('stream-removed', (event) => {
		const { stream } = event
		const id = String(stream.getId())
		stream.close()
		removeVideoStream(id)
		console.log('INFO: STREAM REMOVED')
	})
	client.on('peer-leave', (event) => {
		const { stream } = event
		const id = String(stream.getId())
		stream.close()
		removeVideoStream(id)
		console.log('INFO: PEER LEAVE')
	})
</script>
<template>
	<h1>02 Start Video Call</h1>

	<h2>Local Video</h2>
	<div id="me" :class="$style.videoStream"></div>

	<h2>Remote Video</h2>
	<div ref="remoteContainer">Remote Container</div>
</template>
<style module>
	.videoStream {
		border: 1px solid red;
		height: 20rem;
		width: 20rem;
	}
</style>
