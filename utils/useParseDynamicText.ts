export const useParseDynamicText = (
	input: string,
	value: {
		year?: number | string;
		variable?: string;
	}
): string => {
	let output = input;

	if (value.year !== undefined) {
		output = output.replace(/\|\|year\|\|/g, String(value.year));
	}

	if (value.variable !== undefined) {
		output = output.replace(/\{\{(.*?)\}\}/g, (_, inner) => {
			return `<span class="dynamic-content">${value.variable}</span>`;
		});
	}

	return output;
};
