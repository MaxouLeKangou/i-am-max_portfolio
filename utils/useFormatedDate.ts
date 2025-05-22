export const useFormatedDate = (input: Date, locale = 'fr-FR'): string => {
	if (input !== null) {
		const date = new Date(input);

		return new Intl.DateTimeFormat(locale, {
			month: 'short',
			year: 'numeric',
		}).format(date);
	}
	return 'présent';
};
