<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
	someValue: {
		default: 123,
		type: [Number, String],
	}
})

const count = ref(parseInt(props.someValue))

const increment = () => count.value++
const reset = () => count.value = 0

watch(count, () => {
	console.log('Count Changed to: ', count.value)
})
</script>

<template>
<button @click="increment">
	INCREMENT
</button>
<button @click="reset">
	RESET
</button>
<button @click="count = 100">
	Set to 100
</button>
<p>{{ count }}</p>
</template>
