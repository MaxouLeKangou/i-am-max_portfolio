<template>
	<div>
		<span>let {{ variable }} = "</span>
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
		/>
		<span>"</span>
	</div>
</template>

<script setup lang="ts">
defineProps({
	variable: String,
	modelValue: String,
});

const emit = defineEmits(['update:modelValue']);
</script>
