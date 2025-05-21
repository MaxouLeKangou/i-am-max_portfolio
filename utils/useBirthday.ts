export const useBirthday = () => {
	const birthday = new Date('2004-05-05');

	return computed(() => {
		const now = new Date();
		let year = now.getFullYear() - birthday.getFullYear();
		const m = now.getMonth() - birthday.getMonth();
		if (m < 0 || (m === 0 && now.getDate() < birthday.getDate())) {
			year--;
		}
		return year;
	});
};
