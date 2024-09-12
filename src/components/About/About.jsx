//Modules
import React from "react";

export default function About() {
	return (
		<>
			<div className="d-flex  align-items-center">
				<div
					className="card border border-primary border-3 shadow"
					style={{
						width: "calc(min(90vw, 40rem))",
						height: "h-30",
						borderRadius: "1rem",
					}}
				>
					<div
						className="card-header text-center fs-2"
						style={{ backgroundColor: "#424242", color: "#f5f5f5" }}
					>
						About
					</div>
					<div className="card-body">
						<p className="fs-3">
							This application was made as a project for The Odin Project using
							React, Ruby on Rails and some basic design concepts deployed on
							the Fly.io platform. The art belongs to:
						</p>

						<div className="d-flex justify-content-center fs-3">
							<a href="https://elijahhaswell.myportfolio.com">Elijah Haswell</a>
							<a href="https://anomaly-world.com/" className="ms-4">
								Anomaly World Studio
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
