function checkIfValidCoordinates(selectionCoordinates, validCoordinates) {
	let validAnswers = [];

	//Calculate if the click is inside the bounding box
	validAnswers = Object.keys(selectionCoordinates).map((index) => {
		const { relativeX, relativeY } = selectionCoordinates[index]; //Destructure object
		const characterSolution = validCoordinates[Number(index) + 1]; //Get Solution for the n character
		if (
			characterSolution.TL.relative_x <= relativeX &&
			characterSolution.BR.relative_x > relativeX
		) {
			if (
				characterSolution.BR.relative_y >= relativeY &&
				characterSolution.TL.relative_y <= relativeY
			) {
				return true; //If the point is whitin the bounding box limits, then it's valid
			}
		}
		return false; //If the point is not within the bounding box limits, then it's not valid
	});

	return validAnswers;
}

export default checkIfValidCoordinates;
