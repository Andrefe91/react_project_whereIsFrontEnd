//Modules
import React, { useState, useRef, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { generateApiKey } from "generate-api-key";
//Components
import GameInfo from "../GameInfo/GameInfo";
import GameCharacters from "../GameCharacters/GameCharacters";
import ResolvedModal from "../ResolvedModal/ResolvedModal";
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
//Scripts
import fetchData from "../../scripts/getData";
import checkIfValidCoordinates from "../../scripts/checkValidCoordinates";
//Hooks
import useInterval from "../../hooks/useInterval";

const normal_1_portraits = [normal_1_a, normal_1_b];
const normal_2_portraits = [normal_2_a, normal_2_b];
const difficult_1_portraits = [difficult_1_a, difficult_1_b, difficult_1_c];
const difficult_2_portraits = [difficult_2_a, difficult_2_b, difficult_2_c];

export async function loader({ params }) {
	const coordinates = await fetchData(
		"https://rails-project-whereisbackendtwo.fly.dev/characterCoordinates.json",
		"solutionCache",
	);
	const imageDifficulty = params.difficulty;
	return { imageDifficulty, coordinates };
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
	const { imageDifficulty, coordinates } = useLoaderData();
	const images = imageSelection(imageDifficulty);
	const solCoordinates = coordinates[imageDifficulty];
	const URL = "https://rails-project-whereisbackendtwo.fly.dev";

	const [answerValidation, setAnswerValidation] = useState([]);
	const [selectedCharacter, setSelectedCharacter] = useState(null);
	const [selectionCoordinates, setSelectionCoordinates] = useState({}); //Selected character coordinates
	const [gameRegistered, setGameRegistered] = useState(false); //Help to track if the game has been solved to stop the clock
	const [secondsCount, setSecondsCount] = useState(0); //Track the time of the game
	const [modalVisibility, setModalVisibility] = useState(false); //Control the visibility of the modal
	const finishTime = useRef(0);
	const imageRef = useRef(null);
	const gameKey = useRef(generateApiKey({ method: "string", length: 10 })); //This key identify the user of the game

	function checkCoordinates() {
		console.log("Checking solution");
		//Calculate if the click is inside the bounding box
		let checkValidAnswers = checkIfValidCoordinates(
			selectionCoordinates,
			solCoordinates,
		);

		setAnswerValidation([...checkValidAnswers]);

		if (checkValidAnswers.every((value) => value)) {
			//Set the time value in a hook so it doesnt get modified during re render
			finishTime.current = secondsCount;

			//Deactivate the button by erasing the selected coordinates
			setSelectionCoordinates({});
			setSelectedCharacter(null);

			//Register the solution to the backend
			const registerSolution = async () => {
				try {
					let response = await fetch(`${URL}/attempts/1`, {
						method: "PUT",
						headers: new Headers({ "content-type": "application/json" }),
						body: JSON.stringify({
							identifier: gameKey.current,
							resolved: true,
							time: secondsCount,
						}),
					});

					if (response.ok) {
						console.log("Solution registered, well done!", response);
						setGameRegistered(false);
						setModalVisibility(true);
					} else {
						console.error(
							"Network Error registering the finished game",
							response,
						);
					}
				} catch (error) {
					console.error("Error registering the finished game: ", error);
				}
			};

			registerSolution();
		}
	}

	//
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
					absoluteX: relativeX * imageWidth + imageStartX,
					absoluteY: relativeY * imageHeight + 60,
				},
			});
		}
	}

	useEffect(() => {
		const registerGame = async () => {
			//Register game attempt to the server
			try {
				let response = await fetch(`${URL}/attempts`, {
					method: "POST",
					headers: new Headers({ "content-type": "application/json" }),
					body: JSON.stringify({
						identifier: gameKey.current,
						difficulty: imageDifficulty,
					}),
				});

				if (response.ok) {
					console.log("Game registered, starts now!", response);
					setGameRegistered(true);
				} else {
					console.error("Network Error registering the game", response);
				}
			} catch (error) {
				console.error("Error registering game: ", error);
			}
		};

		registerGame();
	}, []);

	//When the game is correctly registered in the backend, start the counter.
	useInterval(
		() => {
			setSecondsCount(secondsCount + 1);
		},
		gameRegistered ? 1000 : null,
	);

	return (
		<>
			<div className="min-vw-100">
				{modalVisibility && (
					<ResolvedModal
						gameKey={gameKey.current}
						time={finishTime.current}
						visibilityFunction={setModalVisibility}
					/>
				)}

				<GameInfo imageDifficulty={imageDifficulty} time={secondsCount} />

				<GameCharacters
					selected={selectedCharacter}
					characters={images.portraits}
					selectFunction={setSelectedCharacter}
					answerValidation={answerValidation}
					gameRegistered={gameRegistered}
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

				<button
					className="fs-4 check-button m-2 btn btn btn-success"
					onClick={() => checkCoordinates()}
					disabled={
						Object.keys(selectionCoordinates).length < images.portraits.length
					}
				>
					Check
				</button>

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
