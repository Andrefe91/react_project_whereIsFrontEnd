//Modules
import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
	return (
		<>
			<div className="d-flex flex-column justify-content-center">
				<div className="display-3 text-center">Where Is...</div>

				<div className="display-6 text-center">
					Can you find all the characters ?
				</div>

				<div className="dropdown-center d-flex justify-content-center mt-5">
					<button
						className="btn btn-secondary dropdown-toggle fs-3"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Select Difficulty
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						<li>
							<Link to={"/game/normal_1"} className="dropdown-item fs-3">
								Normal - 1
							</Link>
						</li>
						<li>
							<Link to={"/game/normal_2"} className="dropdown-item fs-3">
								Normal - 2
							</Link>
						</li>
						<li>
							<Link to={"/game/difficult_1"} className="dropdown-item fs-3">
								Difficult - 1
							</Link>
						</li>
						<li>
							<Link to={"/game/difficult_2"} className="dropdown-item fs-3">
								Difficult - 2
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
