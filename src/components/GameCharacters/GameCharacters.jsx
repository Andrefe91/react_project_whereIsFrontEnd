//Modules
import React from "react";
import { PropTypes } from "prop-types";

function GameCharacters({ selected, characters, selectFunction }) {
	console.log(characters, selected);

	return (
		<div className="d-flex flex-column card sticky-middle m-2 border-primary border-3">
			{characters.map((character, index) => (
				<div
					key={index}
					className={`character-portrait portrait-${index} ${
						selected === index + 1 && "selected"
					}`}
					style={{ borderRadius: "5rem" }}

                    onClick={() => {selectFunction(index+1)}}
				>
					<img
						src={character}
						alt={`Character number ${index}`}
						style={{ minWidth: "6rem" }}
					/>
				</div>
			))}
		</div>
	);
}

GameCharacters.propTypes = {
	selected: PropTypes.number.isRequired,
	characters: PropTypes.array.isRequired,
    selectFunction: PropTypes.func.isRequired,
};

export default GameCharacters;
