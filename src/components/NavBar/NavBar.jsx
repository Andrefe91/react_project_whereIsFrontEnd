//Modules
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
	const appTitle = " { Where Is... }";

	return (
		<>
			<nav className="navbar navbar-expand-sm navbar-light bg-light shadow p-1 bg-body-tertiary rounded ">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<Link to={"/"} className="navbar-brand fs-3">
						{appTitle}
					</Link>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<div className="flex-grow-1"></div>

						<ul className="navbar-nav">
							<li className="nav-item fs-4">
								<Link to={"/leaderboard"} className="nav-link">
									{" "}
									Leader-Board{" "}
								</Link>
							</li>
							<li className="nav-item fs-4">
								<Link to={"/rules"} className="nav-link">
									{" "}
									Rules{" "}
								</Link>
							</li>
							<li className="nav-item fs-4">
								<Link to={"/about"} className="nav-link">
									{" "}
									About{" "}
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
