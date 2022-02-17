import AgoraRTC from 'agora-rtc-sdk-v4'

export const useAgora = () => {
	const client = AgoraRTC.createClient({
		codec: 'vp9',
		mode: 'rtc',
	})
	let cameraTrack = null
	let microphoneTrack = null

	const join = async ({ channel, token }) => {
		if (client.connectionState !== 'DISCONNECTED') { return }

		try {
			const uid = await client.join(process.env.VUE_APP_AGORA_APP_ID, channel, token)
			console.log('YOUR USER ID IS: ', uid)

			// * Destructure to existing vars - https://stackoverflow.com/a/32138566
			;([microphoneTrack, cameraTrack] = await AgoraRTC.createMicrophoneAndCameraTracks())
		} catch (err) {
			console.error(err)
		}
	}

	const leave = async () => {
		if (client.connectionState !== 'CONNECTED') { return }

		try {
			await client.leave()
		} catch (err) {
			console.error(err)
		}
	}

	return { join, leave }
}
