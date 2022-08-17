const checkName = (request, response, next) => {
	if (request.body.name) {
		next();
	} else {
		response.status(400).json({ success: false, payload: `error: No name specified!` });
	}
};
const checkFiber = (request, response, next) => {
	if (!!request.body.fiber) {
		next();
	} else {
		response
			.status(400)
			.json({ success: false, payload: `error: No fiber content specified!` });
	}
};
const checkProtein = (request, response, next) => {
	if (!!request.body.protein) {
		next();
	} else {
		response
			.status(400)
			.json({ success: false, payload: `error: No protein content specified!` });
	}
};
const checkAddedSugar = (request, response, next) => {
	if (!!request.body.added_sugar) {
		next();
	} else {
		response
			.status(400)
			.json({ success: false, payload: `error: No added_sugar content specified!` });
	}
};
const checkImage = (request, response, next) => {
	if (request.body.image) {
		next();
	} else {
		response.status(400).json({ success: false, payload: `error: No image specified!` });
	}
};


const checkForNoAdditionalParams = (req, res, next) => {
	const { name, fiber, protein, added_sugar, is_healthy, image, ...otherStuff } = req.body;
	if (
		otherStuff &&
		Object.keys(otherStuff).length === 0 &&
		Object.getPrototypeOf(otherStuff) === Object.prototype
	) {
		next();
	} else {
		res.status(400).send({ error: "keep it short and sweet: no extra paramaters!" });
	}
};

module.exports = {
	checkAddedSugar,
	checkFiber,
	checkImage,
	checkName,
	checkProtein,
	checkForNoAdditionalParams,
};
