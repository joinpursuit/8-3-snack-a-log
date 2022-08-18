const confirmHealth = (snack) => {
	if (
		typeof snack.fiber !== "number" &&
		typeof snack.protein !== "number" &&
		typeof snack.added_sugar !== "number"
	) {
		return null;
	}

	if (snack.fiber >= 5 && snack.added_sugar < 5) return true;

	if (snack.protein > 5 && snack.added_sugar < 5) return true;

	if (snack.protein > 5 && snack.added_sugar < 5 && snack.fiber > 5)
		return true;

	return false;
};

module.exports = confirmHealth;