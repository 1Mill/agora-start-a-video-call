import { onMounted } from 'vue'

export const useAgora = () => {
	let client = null
	let localAudioStrack = null
	let localVideoTrack = null

	onMounted(() => {
		client = window.AgoraRTC.createClient({
			codec: 'vp9',
			mode: 'rtc',
		})
	})

	const join = async () => {
		const res = await window.AgoraRTC.createMicrophoneAndCameraTracks()
		localAudioStrack = res[0]
		localVideoTrack = res[1]

		localVideoTrack.play('me')
	}

	const leave = async () => {
		client.unpublish()

		if (localVideoTrack) {
			localVideoTrack.close()
			localVideoTrack.stop()
		}

		if (localAudioStrack) {
			localAudioStrack.close()
			localAudioStrack.stop()
		}
	}

	return { leave, join }
}
