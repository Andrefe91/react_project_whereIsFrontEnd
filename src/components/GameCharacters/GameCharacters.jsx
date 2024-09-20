//Modules
import React from "react";
import { PropTypes } from "prop-types";

function GameCharacters({ selected, characters, selectFunction, answerValidation }) {

	return (
		<>
			<div className="d-flex flex-column card sticky-middle m-2 border-primary border-3">
				{characters.map((character, index) => (
					<div
						key={index}
						className={`character-portrait portrait-${index} ${
							selected === index && "selected"
						} ${ answerValidation[index] == false ? "incorrect":""} ${ answerValidation[index] == true ? "correct":""}`}
						style={{ borderRadius: "5rem" }}

						onClick={() => {selectFunction(index)}}
					>
						<img
							src={character}
							alt={`Character number ${index}`}
							style={{ minWidth: "6rem" }}
						/>
					</div>
				))}
			</div>

		</>
	);
}

GameCharacters.propTypes = {
	selected: PropTypes.number,
	characters: PropTypes.array.isRequired,
    selectFunction: PropTypes.func.isRequired,
	answerValidation: PropTypes.array.isRequired,
};

export default GameCharacters;
