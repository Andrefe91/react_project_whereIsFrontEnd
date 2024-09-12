//Modules
import React from "react";

export default function Rules() {
	return (
		<>
			<div className="d-flex  align-items-center flex-column justify-content-evenly">
				<div
					className="card border border-primary border-3 shadow"
					style={{
						width: "calc(min(90vw, 90rem))",
						height: "h-30",
						borderRadius: "1rem",
					}}
				>
					<div
						className="card-header text-center fs-2"
						style={{ backgroundColor: "#424242", color: "#f5f5f5" }}
					>
						Rules
					</div>
					<div className="card-body">
						<p className="fs-3">
							The rules are simple, there are a number of characters hidden in
							each image. Find each of them in the shortest possible time to
							make it to the scoreboard.
						</p>
					</div>
				</div>

				<div
					className="card border border-primary border-3 shadow"
					style={{
						width: "calc(min(90vw, 90rem))",
						height: "h-30",
						borderRadius: "1rem",
					}}
				>
					<div
						className="card-header text-center fs-2"
						style={{ backgroundColor: "#424242", color: "#f5f5f5" }}
					>
						Controls
					</div>
					<div className="card-body p-4">
						<div className="d-flex fs-3 align-items-center">
							<img
								src="/src/assets/controls/Mouse_Middle.svg"
								alt="Mouse middle click"
							/>
							<p className="ms-4">
								Use the middle mouse click to move the image and the wheel to
								zoom in and out in the image.
							</p>
						</div>

						<div className="mt-4 d-flex fs-3 align-items-center">
							<img
								src="/src/assets/controls/Mouse_Click.svg"
								alt="Mouse main clic"
							/>
							<p className="ms-4">
								Click the character portrait icon and when selected click in the
								image position where you spot it.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
