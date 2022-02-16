import AgoraRTC from 'agora-rtc-sdk'
import { runPromisify } from './useRunPromisify'

export const useAgoraClient = async () => {
	const client = AgoraRTC.createClient({
		codec: 'vp9',
		mode: 'rtc',
	})

	try {
		await runPromisify(client.init, process.env.VUE_APP_AGORA_APP_ID)
		console.info('Agora Client Initiailized')
	} catch (err) {
		console.error(err)
	}

	return { client }
}
