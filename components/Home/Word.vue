<template>
	<div>
		<span class="text-light-300">let {{ variable }} = "</span>
		<label :for="variable" class="sr-only">Entrer un mot</label>
		<input
			:id="variable"
			type="text"
			:value="modelValue"
			@input="
				$emit(
					'update:modelValue',
					($event.target as HTMLInputElement)?.value
				)
			"
			class="animate-pulse max-w-full w-32 focus:outline-0 lg:w-52"
		/>
		<span class="text-light-300">"</span>
	</div>
</template>

<script setup lang="ts">
defineProps({
	variable: String,
	modelValue: String,
});

const emit = defineEmits(['update:modelValue']);
</script>
