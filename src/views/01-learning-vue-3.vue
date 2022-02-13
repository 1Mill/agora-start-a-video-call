<script setup>
	import { onMounted, ref, watch } from 'vue'

	const props = defineProps({
		someValue: {
			default: 123,
			type: [Number, String],
		}
	})

	// * Counter logic
	const count = ref(parseInt(props.someValue))

	const increment = () => count.value++
	const reset = () => count.value = 0

	watch(count, () => console.log('Count Changed to: ', count.value))

	// * Auto focus input
	const countInput = ref(null)
	onMounted(() => countInput.value.focus() )
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
	<p>
		<span :class="$style.example">{{ count }}</span>
	</p>
	<input v-model="count" type="number" ref="countInput"/>
</template>
<style module>
	.example {
		border-radius: 100%;
		border: 1px solid black;
		font-size: 1.5rem;
		padding: 1rem;
	}
</style>
