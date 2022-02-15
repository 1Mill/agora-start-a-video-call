import AgoraRTC from 'agora-rtc-sdk'

export const useAgoraClient = () => {
	const client = AgoraRTC.createClient({
		codec: 'vp9',
		mode: 'rtc',
	})

	client.init(process.env.VUE_APP_AGORA_APP_ID, () => {
		console.info('Agora Client Initiailized')
	}, console.error)

	return { client }
}
