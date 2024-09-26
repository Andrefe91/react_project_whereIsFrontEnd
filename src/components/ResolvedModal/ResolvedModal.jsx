//Modules
import React, { useState } from "react";
import { PropTypes } from "prop-types";
//Css
import "./resolvedModa.css";

ResolvedModal.propTypes = {
    gameKey: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    visibilityFunction: PropTypes.func.isRequired,
};

function ResolvedModal({ gameKey, time, visibilityFunction }) {
	const [name, setName] = useState("");
	const URL = "https://rails-project-whereisbackendtwo.fly.dev";

	function changeName(event) {
		setName(event.target.value);
	}

	async function handleSubmit() {
		try {
			let response = await fetch(`${URL}/attempts/1`, {
				method: "PUT",
				headers: new Headers({ "content-type": "application/json" }),
				body: JSON.stringify({
					identifier: gameKey,
					resolved: true,
					time: time,
					name: name.toUpperCase(),
				}),
			});

			if (response.ok) {
				console.log("Score submitted successfully!");
				visibilityFunction(false);
			} else {
				console.error(`Network Error submitting score: ${response.status}`);
			}
		} catch (e) {
			console.error(`Error submitting score: ${e.message}`);
		}
	}

	return (
		<>
			<div className="m-0 card resolved-modal text-center">
				<p className="m-1 fs-5">
					Congrats !! You solved the game in {time} seconds
				</p>
				<p className="m-1 fs-5">How would you like to be remembered?</p>

				<div className="d-flex align-items-center m-1 justify-content-center">
					<p className="m-0 fs-5">Name:</p>
					<input
						type="text"
						className="ms-2 fs-5"
						onChange={(e) => changeName(e)}
					/>
				</div>

				<button className="fs-4 m-2 btn btn-success" onClick={() => handleSubmit()}>
					Accept
				</button>
			</div>
		</>
	);
}

ResolvedModal.propTypes = {
	gameKey: PropTypes.string.isRequired,
	time: PropTypes.number.isRequired,
	visibilityFunction: PropTypes.func.isRequired,
};

export default ResolvedModal;
