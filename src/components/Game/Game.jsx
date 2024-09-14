//Modules
import React, { useState, useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
//Components
import GameInfo from "../GameInfo/GameInfo";
import GameCharacters from "../GameCharacters/GameCharacters";

//Assets
import normal_1 from "../../assets/gameImages/normal_1.jpg";
import normal_2 from "../../assets/gameImages/normal_2.jpg";
import difficult_1 from "../../assets/gameImages/dificult_1.jpg";
import difficult_2 from "../../assets/gameImages/dificult_2.jpeg";

import normal_1_a from "../../assets/charactersPortraits/normal_1/normal_1_a.svg";
import normal_1_b from "../../assets/charactersPortraits/normal_1/normal_1_b.svg";
import normal_2_a from "../../assets/charactersPortraits/normal_2/normal_2_a.svg";
import normal_2_b from "../../assets/charactersPortraits/normal_2/normal_2_b.svg";
import difficult_1_a from "../../assets/charactersPortraits/difficult_1/difficult_1_a.svg";
import difficult_1_b from "../../assets/charactersPortraits/difficult_1/difficult_1_b.svg";
import difficult_1_c from "../../assets/charactersPortraits/difficult_1/difficult_1_c.svg";
import difficult_2_a from "../../assets/charactersPortraits/difficult_2/difficult_2_a.svg";
import difficult_2_b from "../../assets/charactersPortraits/difficult_2/difficult_2_b.svg";
import difficult_2_c from "../../assets/charactersPortraits/difficult_2/difficult_2_c.svg";

const normal_1_portraits = [normal_1_a, normal_1_b];
const normal_2_portraits = [normal_2_a, normal_2_b];
const difficult_1_portraits = [difficult_1_a, difficult_1_b, difficult_1_c];
const difficult_2_portraits = [difficult_2_a, difficult_2_b, difficult_2_c];

export async function loader({ params }) {
	const imageDifficulty = params.difficulty;
	return { imageDifficulty };
}

function imageSelection(imageDifficulty) {
	switch (imageDifficulty) {
		case "normal_1":
			return { background: normal_1, portraits: normal_1_portraits };
		case "normal_2":
			return { background: normal_2, portraits: normal_2_portraits };
		case "difficult_1":
			return { background: difficult_1, portraits: difficult_1_portraits };
		case "difficult_2":
			return { background: difficult_2, portraits: difficult_2_portraits };
		default:
			return normal_1;
	}
}

export default function Game() {
	const { imageDifficulty } = useLoaderData();
	const images = imageSelection(imageDifficulty);

	const [selectedCharacter, setSelectedCharacter] = useState(null);
	const [selectionCoordinates, setSelectionCoordinates] = useState({});
	const imageRef = useRef(null);

	function printFromClick(event) {
		//Get the image size
		const imageRect = imageRef.current?.getBoundingClientRect();
		const imageHeight = imageRect.height;
		const imageWidth = imageRect.width;
		const imageStartX = imageRect.x;
		const imageStartY = imageRect.y;
		const clientX = event.clientX;
		const clientY = event.clientY;

		//Calculate the relative position of the click event within the image
		let relativeX = (clientX - imageStartX) / imageWidth;
		let relativeY = (clientY - imageStartY) / imageHeight;

		if (selectedCharacter !== null) {
			setSelectionCoordinates({
				...selectionCoordinates,
				[selectedCharacter]: {
					relativeX: relativeX,
					relativeY: relativeY,
					absoluteX: (relativeX*imageWidth)+imageStartX,
					absoluteY: (relativeY*imageHeight)+60,
				},
			});
		}

		console.log({
			relativeX: relativeX,
			relativeY: relativeY,
			absoluteX: (relativeX*imageWidth)+imageStartX,
			absoluteY: (relativeY*imageHeight)+imageStartY,
			imageHeight: imageHeight,
			imageStartY: imageStartY,
		});
	}

	return (
		<>
			<div className="min-vw-100">
				<GameInfo imageDifficulty={imageDifficulty} time="00:00:00" />

				<GameCharacters
					selected={selectedCharacter}
					characters={images.portraits}
					selectFunction={setSelectedCharacter}
				/>

				{Object.keys(selectionCoordinates).map((key) => (
					<div
						key={key}
						className={`board-portrait portrait-${key}`}
						style={{
							top: `${selectionCoordinates[key].absoluteY}px`,
							left: `${selectionCoordinates[key].absoluteX}px`,
							transform: "translate(-50%, -50%)",
						}}
					></div>
				))}

				<img
					style={{ width: "100vw", zIndex: "-1" }}
					src={images.background}
					alt="Game Image"
					onClick={(event) => printFromClick(event)}
					ref={imageRef}
				/>
			</div>
		</>
	);
}
