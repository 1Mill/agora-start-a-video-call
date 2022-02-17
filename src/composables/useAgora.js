import { onMounted } from 'vue'

export const useAgora = () => {
	let client = null

	onMounted(() => {
		client = window.AgoraRTC.createClient({
			codec: 'vp9',
			mode: 'rtc',
		})
	})

	const join = async ({ channel, token }) => {
		if (client.connectionState !== 'DISCONNECTED') { return }

		const uid = await client.join(process.env.VUE_APP_AGORA_APP_ID, channel, token)
		console.info('YOUR USER ID IS: ', uid)
	}

	const leave = async () => {
		if (client.connectionState !== 'CONNECTED') { return }

		await client.leave()
	}

	return { join, leave }
}
